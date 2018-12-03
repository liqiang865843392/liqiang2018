<template>
  <div :id="id" style="width:100%;height:100%;"></div>
</template>
<script>
    // 引入基本模板
    // import bmap from '@/util/bmap.js';
    import {RndNum} from '@/util/util.js';
    import echarts from 'echarts';
    // 引入组件
    require('echarts/lib/chart/radar');
    // require('echarts/lib/chart/bar');
    require('echarts/lib/chart/line');
    require('echarts/lib/chart/effectScatter');
    require('echarts/lib/chart/scatter');
    // 引入提示框和title组件
    // require('echarts/lib/component/tooltip')
    // require('echarts/lib/component/title')

    export default {
      props: {
         options:{
              type:Object,
          },
         status:{
             type:Boolean,
             default:false
         }
      },
      created(){
          console.log('图表已生成');
          // console.log(222,this.status);
      },
      data(){
            return {
                id:Math.floor(Math.random()*10000),
                myChart:null,
            }
      },
      computed:{
          get_init_status(){
              return this.$store.state.common.init_status;
          }
      },
      watch: {
        //观察option的变化
        options: {
          handler(newVal, oldVal) {
            this.init();
          },
          deep: true //对象内部属性的监听，关键。
        },
        get_init_status(newVal){
            this.myChart.clear();
            setTimeout(()=>{ //--目前只有settimeout这样才可以点击收缩按钮是重新计算尺寸
                this.myChart.resize();
                this.init();
            },1000)
         },
      },
      mounted(){
          setTimeout(()=>{
              this.init();
          },1000);

          this.selfAdaption();
      },
      methods:{
        init() {
            this.myChart = echarts.init(document.getElementById(this.id));
            // console.log(998,this.$store.state.common.clear_status);
            if(this.$store.state.common.clear_status){//clear_status为true就说明点击的是切换图表 而不是配置了option触发的init
                this.myChart.clear();
            }
            this.myChart.setOption(this.options);
            //通知控制台修改当前的图表类型
            this.$store.dispatch('set_cur_chart_type',this.options.series[0].type);
            setTimeout(()=>{
              this.save_and_update_thumb();
            },1000)
        },
          //echarts自适应
          selfAdaption ()  {
            let _this = this;
              setTimeout(()=>{
                  window.addEventListener('resize', function () {
                      _this.myChart.resize();
                  })
              },1000);
          },
          //保存修改缩略图
          save_and_update_thumb(){
              console.log('存图');
              //缩略图相关
              if(this.$route.path === '/main'){//如果当前页面是首页 就调用生成全部缩略图
                  this.$store.dispatch('save_thumb',this.myChart.getConnectedDataURL("png"));
              }else if(this.$route.path === '/edit'){//如果当前页面是编辑页面 就执行修改缩略图
                  this.$store.dispatch('update_thumb',this.myChart.getConnectedDataURL("png"));
              }
          }
      }
    }
</script>





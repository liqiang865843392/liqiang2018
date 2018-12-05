<template>
  <div class="tools" @click.stop="_toolHandle">
    <!--<Icon class="icon" :type="item.type" :size="item.size"  :title="item.title" v-for="(item,index) in tool_list" :key="index" @click.stop="_toolHandle(index)"/>-->
  </div>
</template>
<script>
    export default {
      props: {
          tool_show:{
              type:Boolean,
          },
          cur_chart_index:{
              type:Number,
          }
      },
      created(){

      },
      watch:{
          tool_show(newVal){
              console.log(223325);
          }
      },
      data(){
            return {
                tool_list:[
                    {
                        type: 'md-create',
                        size:'20',
                        title:'编辑'
                    },
                    {
                        type: 'md-refresh',
                        size:'20',
                        title:'刷新图表'
                    },
                    {
                        type: 'md-qr-scanner',
                        size:'20',
                        title:'全屏'
                    },
                    {
                        type: 'ios-funnel',
                        size:'20',
                        title:'更新信息'
                    },
                    {
                        type: 'md-more',
                        size:'22',
                        title:'更多'
                    },
                ]
            }
      },
      mounted(){
          console.log('tool_show',this.tool_show);
      },
      methods:{
          _toolHandle(index){//点击了小工具
            // console.log('cur_chart_index',this.cur_chart_index);
            //0:编辑 1:刷新 2:全屏 3:更新信息 4:更多
              // if(index === 0){
              // console.log(777,this.$store.state.common.echarts_option[this.cur_chart_index].echart_option.series[0].type);
              console.log('this.cur_chart_index',this.cur_chart_index);

                  let type = this.$store.state.common.echarts_option[this.cur_chart_index].echart_option.series[0].type; //当前的类型
                  let chart_index =  this.cur_chart_index;//当前的图片index
                  if(type == 'line'){//type==line 可能是折线图 也有可能是 面积图  所以 要分开判断
                    if(this.$store.state.common.echarts_option[this.cur_chart_index].echart_option.series[0].hasOwnProperty("areaStyle")){//是面积图
                        type = 'area'
                    }
                  }
                 let length = this.$store.state.common.all_title[this.$store.state.common.template_no - 1].length;//获取当前模板的echart数量
                 if(length > this.$store.state.common.thumbs.length ){//说明缩略图没有生成完毕
                     this.$Message.info({
                             content: '图形未全部加载,请稍后重试',
                             duration: 3
                          }
                        );
                     return;
                 }
                  localStorage.setItem("thumbs",this.$store.state.common.thumbs);//将缩略存入localStorage（防止刷新后缩略图消失）
                  console.log('length',this.$store.state.common.all_title[this.$store.state.common.template_no - 1].length);
                  this.$store.dispatch('edit_chart',{type,chart_index});
                  this.$router.push({path:'/edit'});//跳转到编辑页面
              // }
            // switch (index){
            //     case 0 :
            //         this.$router.push({path:'/edit'});break;
            // }
          },
      }
    }
</script>
<style scoped lang="scss">
  .tools{
    width:120px;
    height:80px;
    /*display: flex;*/
    /*justify-content: space-between;*/
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-image: url("../../assets/images/button_edit@2x.png");
    background-repeat: no-repeat;
    background-size:cover;
    z-index: 100;
    cursor: pointer;
    /*.icon{*/
      /*color:rgba(255,255,255,.7);*/
      /*cursor:pointer;*/
    /*}*/
    /*.icon:hover{*/
      /*color:rgba(255,255,255,1);*/
    /*}*/
  }
</style>





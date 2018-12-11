<template>
    <div class="chart-type">
        <GooeyMenu></GooeyMenu>
        <Tooltip  :transfer=true :content="item.title" placement="top" class="item"  :class="{ 'active': cur_chart === item.type }" v-for="(item,index) in chart_list" :key="index" @click.native="select_chart(item,index)">
            <i class="chart-type-icon" :class="item.icon"></i>
        </Tooltip>
    </div>
</template>
<script>
    import GooeyMenu from '@/components/common/GooeyMenu.vue';
    export default {
      props: {
      },
      created(){

      },
      computed:{

      },
      data(){
            return {
                cur_chart:this.$store.state.common.cur_chart_type,//当前选中图表类型
                chart_list:[//图表类型列表
                    {
                        type:'table',
                        icon:'i-table',
                        title:'表格',
                        option_name:''
                    },
                    {
                        type:'bar',
                        icon:'i-bar',
                        title:'柱状图',
                        option_name:'bar_option'
                    },
                    {
                        type:'line',
                        icon:'i-line',
                        title:'折线图',
                        option_name:'line_option'
                    },
                    {
                        type:'pie',
                        icon:'i-pie',
                        title:'饼状图',
                        option_name:'pie_option'
                    },
                    {
                        type:'area',
                        icon:'i-area',
                        title:'面积图',
                        option_name:'area_option'
                    },
                    {
                        type:'scatter',
                        icon:'i-scatter',
                        title:'散点图',
                        option_name:'scatter_option'
                    },
                    {
                        type:'radar',
                        icon:'i-radar',
                        title:'雷达图',
                        option_name:'radar_option'
                    },
                    {
                        type:'gauge',
                        icon:'i-gauge',
                        title:'仪表盘',
                        option_name:'gauge_option'
                    },
                    {
                        type:'funnel',
                        icon:'i-funnel',
                        title:'漏斗图',
                        option_name:'funnel_option'
                    },
                    {
                        type:'map',
                        icon:'i-map',
                        title:'地图',
                        option_name:'map_option'
                    },
                ],
            }
      },
      mounted(){

      },
      methods:{
          select_chart(item,index){//选中了图表类型
              this.cur_chart = item.type;//设置当前图表类型（控制样式）
              this.$store.dispatch('change_chart',item.option_name);//选择图表类型后修改视图中的图表
              // setTimeout(()=>{
              //     console.log(2223,this.$store.state.echarts_option[this.$store.state.cur_chart_index].echart_option.legend.orient);
              // },2000);
          },
      },
      components:{
          GooeyMenu
      }
    }
</script>
<style  lang="scss">
    .chart-type{
        width:290px;
        .item{
            /*position:relative;*/
            display: inline-block;
            width: 40px;
            height: 40px;
            margin: 0 4px 4px 0;
            cursor: pointer;
            padding: 4px;
            .chart-type-icon{
                display: inline-block;
                width: 32px;
                height: 32px;
            }
            .i-table{
                background: url('../../svg/svg-sprite2.svg') -866px -1306px no-repeat;
            }
            .i-bar{
                background: url('../../svg/svg-sprite2.svg') -802px -1306px no-repeat;
            }
            .i-pie{
                background: url('../../svg/svg-sprite2.svg') -546px -1306px no-repeat;
            }
            .i-line{
                background: url('../../svg/svg-sprite2.svg') -610px -1306px no-repeat;
            }
            .i-area{
                background: url('../../svg/svg-sprite2.svg') -1341px -552px no-repeat;
            }
            .i-scatter{
                background: url('../../svg/svg-sprite2.svg') -832px -871px no-repeat;
            }
            .i-radar{
                background: url('../../svg/svg-sprite2.svg') -666px -531px no-repeat;
            }
            .i-gauge{
                background: url('../../svg/svg-sprite2.svg') -1254px -1238px no-repeat;
            }
            .i-funnel{
                background: url('../../svg/svg-sprite2.svg') -1341px -716px no-repeat;
            }
            .i-map{
                background: url('../../svg/svg-sprite2.svg') -1189px -1238px no-repeat;
            }

        }
        .active{
            background-color: rgba(81,130,228,.1);
            box-shadow: 0 0 0 2px rgba(81,130,227,.15), inset 0 0 0 2px #5182E4;
        }
        .item:hover{
            background-color: rgba(81,130,228,.1);
        }
    }
</style>





<template>
    <!--图表图形配置-->
    <div class="series">
        <div v-if="get_series_count <= 1">
            <BarOption v-if="cur_chart_type == 'bar'"></BarOption>
            <LineOption v-else-if="cur_chart_type == 'line'"></LineOption>
            <FunnelOption v-else-if="cur_chart_type == 'funnel'"></FunnelOption>
            <GaugeOption v-else-if="cur_chart_type == 'gauge'"></GaugeOption>
            <MapOption v-else-if="cur_chart_type == 'map'"></MapOption>
            <PieOption v-else-if="cur_chart_type == 'pie'"></PieOption>
            <RadarOption v-else-if="cur_chart_type == 'radar'"></RadarOption>
            <ScatterOption v-else-if="cur_chart_type == 'scatter'"></ScatterOption>
        </div>
        <div v-else>
            <Collapse accordion style="">
                <!--给每个组件传index是为了，每个组件中多系列的时候需要知道要修改的是哪一个系列-->
                <Panel v-for="(item,index) in get_series_count" :key="index">
                    <span class="main-color">系列 {{index+1}}</span>
                    <p slot="content">
                        <BarOption v-if="cur_chart_type == 'bar'" :index="index"></BarOption>
                        <LineOption v-else-if="cur_chart_type == 'line'" :index="index"></LineOption>
                        <FunnelOption v-else-if="cur_chart_type == 'funnel'" :index="index"></FunnelOption>
                        <GaugeOption v-else-if="cur_chart_type == 'gauge'" :index="index"></GaugeOption>
                        <MapOption v-else-if="cur_chart_type == 'map'"  :index="index"></MapOption>
                        <PieOption v-else-if="cur_chart_type == 'pie'" :index="index"></PieOption>
                        <RadarOption v-else-if="cur_chart_type == 'radar'" :index="index"></RadarOption>
                        <ScatterOption v-else-if="cur_chart_type == 'scatter'" :index="index"></ScatterOption>
                    </p>
                </Panel>

            </Collapse>
        </div>
    </div>
</template>
<script>
    //引入所有的图表配置
    import BarOption from '@/components/EditViewItem/SerieTypeOption/BarOption'
    import FunnelOption from '@/components/EditViewItem/SerieTypeOption/FunnelOption'
    import GaugeOption from '@/components/EditViewItem/SerieTypeOption/GaugeOption'
    import LineOption from '@/components/EditViewItem/SerieTypeOption/LineOption'
    import MapOption from '@/components/EditViewItem/SerieTypeOption/MapOption'
    import PieOption from '@/components/EditViewItem/SerieTypeOption/PieOption'
    import RadarOption from '@/components/EditViewItem/SerieTypeOption/RadarOption'
    import ScatterOption from '@/components/EditViewItem/SerieTypeOption/ScatterOption'
    export default {
      props: {
      },
      created(){

      },
      computed:{
         chart_type(){
             return this.$store.state.common.cur_chart_type;
         },
         get_series_count(){//获取当前图表的series count  如果>1 就显示折叠面板
             return this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series.length;
         }
      },
      watch:{
          chart_type(cur_chart_type){ //监听当前的控制台的当前图表类型动态显示不同的配置项
              console.log('当前图表类型',cur_chart_type);
              this.cur_chart_type = cur_chart_type;
          }
      },
      data(){
            return {
                cur_chart_type : this.$store.state.common.cur_chart_type, //当前图表类型
                series_count:1 //series数量
            }
      },
      mounted(){
      },
      methods:{

      },
      components:{
          BarOption,FunnelOption,GaugeOption,LineOption,MapOption,PieOption,RadarOption,ScatterOption
      }
    }
</script>
<style  lang="scss">
    .series{
        position: relative;
        .ivu-collapse-item{
            box-shadow:none!important;
            .ivu-collapse-content{
                padding-left:10px!important;
            }
        }
        .ivu-collapse-header{
            padding-left: 0!important;
        }
        .ivu-collapse-content{
            padding-right: 5px!important;
        }
        input{
            /*width:100%!important;*/
            height:24px;
            color: rgba(255,255,255,1);
            border: none;
            box-shadow: 0 -1px 0 0 rgba(81,130,228,.5) inset;
            background-color: transparent;
            outline: none;
        }
        input:focus{
            box-shadow: 0 -2px 0 0 rgba(81,130,228,1) inset;
        }
        .option-item{
            padding:10px 0;
            /*padding-left:16px;*/
            display: flex;
            align-items: center;
            /*justify-content: space-between;*/
            justify-content: flex-start;
        }
        .title-label{
            color: rgba(255,255,255,.5)!important;
            font-weight: 700!important;
        }
    }
</style>





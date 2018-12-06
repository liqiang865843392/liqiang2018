<template>
    <!--柱状图option-->
    <div class="bar-option">
        <div class="option-item">
            <Checkbox  v-model="bar_label_show" style="">显示标签</Checkbox>
            <Tooltip  :transfer=true content="编辑图例数据" placement="left-end" class="create-data" >
                <icon name="data" scale="2" @click.native = "add_data"></icon>
            </Tooltip>
        </div>
        <div class="option-item">
            <span class="title-label">标签属性</span>
            <MySelect tooltip="内容格式" iconType="font-icon" @onchange="" value=""  :option="this.$store.state.common.select_option.fontType"></MySelect>
            <MySelect tooltip="数值位置" iconType="line-width-icon" @onchange="change_bar_label_position" :value="get_bar_label_position" :option="this.$store.state.common.select_option.location"></MySelect>
        </div>
        <div class="option-item">
            <span class="title-label">柱形配置</span>
            <MySelect tooltip="柱组间距" iconType="font-icon" @onchange="" value=""  :option="this.$store.state.common.select_option.spacing"></MySelect>
            <MySelect tooltip="柱间距" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.spacing"></MySelect>
        </div>
        <div class="option-item"  style="height:30px;">
            <span class="title-label" style="float:left;line-height: 30px;" >圆角半径</span>
            <TextInput style="float:left;width:70%;" title="" type='number'   placeholder="" @onchange="" value=""></TextInput>
        </div>
        <div class="option-item">
            <span class="title-label">文字设置</span>
            <MySelect style="margin-left: -18px;" tooltip="字号" iconType="line-width-icon"  value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
            <ChooseColor tooltip="字体色" iconType="font-icon" @onchange="" value="#fff"></ChooseColor>
        </div>
    </div>
</template>
<script>
    export default {
      props: {
          index:{

          }
      },
      created(){

      },
      computed:{
          bar_label_show:{//item 标签显示
              get:function(){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series  && _series[0].hasOwnProperty("itemStyle") && _series[0].itemStyle.hasOwnProperty("normal") && _series[0].itemStyle.normal.hasOwnProperty("label") && _series[0].itemStyle.normal.label.hasOwnProperty("show")){
                      return _series[0].itemStyle.normal.label.show;
                  }else{
                      return false;
                  }
              },
              set:function(value) {
                  let data = {value:value,index:this.index};
                  this.$store.dispatch('bar_label_show', data);
              }
          },
          get_bar_label_position(){//获取标签位置
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series.hasOwnProperty("axisLine") &&  _xAxis.axisLine.hasOwnProperty("lineStyle") &&  _xAxis.axisLine.lineStyle.hasOwnProperty("width")){
                  return  _xAxis.axisLine.lineStyle.width;
              }else{
                  return '1';
              }
          }
      },
      data(){
            return {

            }
      },
      mounted(){

      },
      methods:{
          change_bar_label_position(val){//改变轴线的粗细
              this.$store.dispatch('change_line_width', val);
          },
      },
      components:{
      }
    }
</script>
<style  lang="scss">
    .bar-option{
        .option-item{
            padding-left:0!important;
            justify-content: space-between!important;
        }
    }
</style>





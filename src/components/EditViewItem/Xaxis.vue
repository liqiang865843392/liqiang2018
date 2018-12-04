<template>
    <div  class="edit-x">
        <div class="swiper-container" id="xAxis_swiper" >
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div>
                        <Checkbox v-model="xAxis_line_show"  style="">显示坐标轴</Checkbox>
                        <Tooltip  :transfer=true content="添加图例数据" placement="left-end" class="create-data" >
                            <icon name="data" scale="2"  @click.native = "add_data"></icon>
                        </Tooltip>
                        <div class="option-item">
                            <LineSelect iconType="line-icon" @onchange="change_line_type" :value="get_xAxis_line_type" :option="this.$store.state.common.select_option.line_type"></LineSelect>
                            <MySelect iconType="line-width-icon" @onchange="change_line_width" :value="get_xAxis_line_width" :option="this.$store.state.common.select_option.line_width"></MySelect>
                            <ChooseColor @onchange="xAxis_line_color" tooltip="线条色" :value="get_xAxis_line_color"></ChooseColor>
                        </div>

                        <Checkbox v-model="xAxis_label_show" style="">显示标签</Checkbox>
                        <div class="option-item">
                            <MySelect iconType="font-icon" @onchange="change_fontFamily" :value="get_xAxis_fontFamily"  :option="this.$store.state.common.select_option.fontType"></MySelect>
                            <MySelect iconType="line-width-icon" @onchange="change_fontSize" :value="get_xAxis_fontSize" :option="this.$store.state.common.select_option.font_size"></MySelect>
                            <ChooseColor iconType="font-icon" tooltip="字体色" @onchange="xAxis_label_color" :value="get_xAxis_label_color"></ChooseColor>
                        </div>
                        <div class="option-item" style="display: block;padding-left: 20px;">
                            <MySelect iconType="" text="文字方向" @onchange="xAxis_label_direction" :value="get_xAxis_label_direction" :option="this.$store.state.common.select_option.text_direction"></MySelect>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div style="margin-left: -18px;margin-right:-7px;margin-top: -8px;" v-show="get_is_current">
                        <Tooltip  :transfer=true content="返回" placement="left" class="go-back" >
                            <Icon type="ios-arrow-forward"  size="20" @click="go_back"/>
                        </Tooltip>
                        <TableData   @save="edit_xAxis_data" title="X轴" :table_data = get_xAxis_data></TableData>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import Swiper from 'swiper'
    export default {
      props: {
      },
      created(){

      },
      computed:{
          get_is_current(){//只显示当前swiper (避免显示出现异常)
              return (this.xAxis_swiper && this.xAxis_swiper.activeIndex == 1) ? true : false;
          },
          get_xAxis_data(){//获取X轴数据传入数据显示组件
              let xAxis_data = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.xAxis.data;
              console.log('xAxis_data',xAxis_data);
              return xAxis_data && xAxis_data.length > 0 ? xAxis_data : [];
          },
          xAxis_line_show:{//轴线条的显示
              get:function(){
                  let _xAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.xAxis;
                  if(_xAxis  && _xAxis.axisLine.hasOwnProperty("show")){
                      return  _xAxis.show;
                  }else{
                      return false;
                  }
              },
              set:function(value) {
                  this.$store.dispatch('xAxis_line_show', value);
              }
          },
          xAxis_label_show:{//轴线标签的显示
              get:function(){
                  let _xAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.xAxis;
                  if(_xAxis && _xAxis.hasOwnProperty("axisLabel") &&  _xAxis.axisLabel.hasOwnProperty("show")){
                      return  _xAxis.axisLabel.show;
                  }else{
                      return false;
                  }
              },
              set:function(value) {
                  this.$store.dispatch('xAxis_label_show', value);
              }
          },
          get_xAxis_line_type(){//获取线条类型
              let _xAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.xAxis;
              if(_xAxis && _xAxis.hasOwnProperty("axisLine") &&  _xAxis.axisLine.hasOwnProperty("lineStyle") &&  _xAxis.axisLine.lineStyle.hasOwnProperty("type")){
                  return  _xAxis.axisLine.lineStyle.type;
              }else{
                  return 'solid';
              }
          },
          get_xAxis_line_width(){//获取轴线的粗细
              let _xAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.xAxis;
              if(_xAxis && _xAxis.hasOwnProperty("axisLine") &&  _xAxis.axisLine.hasOwnProperty("lineStyle") &&  _xAxis.axisLine.lineStyle.hasOwnProperty("width")){
                  return  _xAxis.axisLine.lineStyle.width;
              }else{
                  return '1';
              }
          },
          get_xAxis_line_color(){
              let _xAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.xAxis;
              if(_xAxis && _xAxis.hasOwnProperty("axisLine") &&  _xAxis.axisLine.hasOwnProperty("lineStyle") &&  _xAxis.axisLine.lineStyle.hasOwnProperty("color")){
                  return  _xAxis.axisLine.lineStyle.color;
              }else{
                  return '#FFFFFF';
              }
          },
          get_xAxis_label_color(){
              let _xAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.xAxis;
              if(_xAxis && _xAxis.hasOwnProperty("axisLabel") &&  _xAxis.axisLabel.hasOwnProperty("color")){
                  return  _xAxis.axisLabel.color;
              }else{
                  return '#FFFFFF';
              }
          },
          get_xAxis_fontFamily(){//获取字体
              let _xAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.xAxis;
              if(_xAxis && _xAxis.hasOwnProperty("axisLabel") &&  _xAxis.axisLabel.hasOwnProperty("fontFamily")){
                  return  _xAxis.axisLabel.fontFamily;
              }else{
                  return '微软雅黑';
              }
          },
          get_xAxis_fontSize(){//获取字体大小
              let _xAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.xAxis;
              if(_xAxis && _xAxis.hasOwnProperty("axisLabel") &&  _xAxis.axisLabel.hasOwnProperty("fontSize")){
                  return  _xAxis.axisLabel.fontSize;
              }else{
                  return '12px';
              }
          },
          get_xAxis_label_direction(){//获取文字方向
              let _xAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.xAxis;
              if(_xAxis && _xAxis.hasOwnProperty("axisLabel") &&  _xAxis.axisLabel.hasOwnProperty("rotate")){
                  return  _xAxis.axisLabel.rotate;
              }else{
                  return 0;
              }
          }
      },
      data(){
            return {
                xAxis_swiper:null,
            }
      },
      mounted(){
          this.xAxis_swiper = new Swiper('#xAxis_swiper', {
              // direction : 'vertical',
              // autoHeight:true,
              centeredSlides: true,
              observer:true,
              observeParents:true,
              spaceBetween:37
          })
      },
      methods:{
          add_data(){//点击了编辑数据按钮
              this.xAxis_swiper.slideTo(1, 500, false);
          },
          go_back(){//返回
              this.xAxis_swiper.slideTo(0, 500, false);
          },
          edit_xAxis_data(data){//修改X轴数据
              this.$store.dispatch('edit_xAxis_data',data);
          },
          change_line_type(val){//改变了线条类型
            this.$store.dispatch('xAxis_line_type', val);
          },
          change_line_width(val){//改变轴线的粗细
              this.$store.dispatch('change_line_width', val);
          },
          xAxis_line_color(val){
              this.$store.dispatch('xAxis_line_color',val);
          },
          xAxis_label_color(val){
              this.$store.dispatch('xAxis_label_color',val);
          },
          change_fontFamily(val){//改变字体
              this.$store.dispatch('xAxis_fontFamily',val);
          },
          change_fontSize(val){//改变字体大小
              this.$store.dispatch('xAxis_fontSize',val);
          },
          xAxis_label_direction(val){//获取文字显示方向
              this.$store.dispatch('xAxis_label_direction',val);
          }
      },
      components:{
      }
    }
</script>
<style  lang="scss">

</style>





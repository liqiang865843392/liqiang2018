<template>
    <div class="legend">
        <!--class="swiper-no-swiping"-->
        <div class="swiper-container" id="legend_swiper" >
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <Checkbox v-model="legend_show" style="">显示图例</Checkbox>
                    <Tooltip  :transfer=true content="编辑图例数据" placement="left-end" class="create-data" >
                        <icon name="data" scale="2" @click.native = "add_data"></icon>
                    </Tooltip>
                    <MyRadio  @legend_align="legend_align" class="m-12" text="对齐方式"  :value="get_legend_orient"  :option="this.$store.state.common.select_option.algin_type"></MyRadio>
                    <MySlider  @distance="distance" text="边界距离" :value="get_distance_val"></MySlider>
                    <div class="option-item" style="padding:0;">
                        <MySelect iconType="font-icon" @onchange="legend_fontFamily" :value="get_legend_fontFamily" :option="this.$store.state.common.select_option.fontType"></MySelect>
                        <MySelect iconType="line-width-icon" @onchange="legend_fontSize" :value="get_legend_fontSize" :option="this.$store.state.common.select_option.font_size"></MySelect>
                        <ChooseColor iconType="font-icon" @onchange="legend_color" tooltip="字体色" :value="get_legend_color"></ChooseColor>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div style="margin-left: -18px;margin-right:-7px;margin-top: -8px;" v-show="get_is_current">
                        <!--<div>-->
                            <Tooltip  :transfer=true content="返回" placement="left" class="go-back" >
                                <Icon type="ios-arrow-forward"  size="20" @click="go_back"/>
                            </Tooltip>
                            <!--<span class="">数据编辑</span>-->
                        <!--</div>-->
                        <TableData title="图例" :table_data = get_legend_data></TableData>
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
          get_mode(){
              return this.mode ? 1 : 0;
          },
          get_is_current(){//只显示当前swiper (避免显示出现异常)
             return (this.legend_swiper && this.legend_swiper.activeIndex == 1) ? true : false;
          },
          get_legend_data(){//获取图例数据传入数据显示组件
              let legend_data = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.legend.data;
              return legend_data && legend_data.length > 0 ? legend_data : [];
          },
          // 配置项计算属性
          legend_show:{//图例的显示
              get:function(){
                  let _legend =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.legend;
                  return  _legend && _legend.hasOwnProperty("show") ? _legend.show : true;
              },
              set:function(value) {
                  this.$store.dispatch('legend_show', value);
              }
          },
          get_legend_orient(){
              let  _legend = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.legend;
              if(_legend && _legend.hasOwnProperty("orient")){
                    return  _legend.orient;
              }else{
                  return  'horizontal';
              }
          },
          get_distance_val(){
              // let  _legend = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.legend;
              // if(_legend && _legend.hasOwnProperty("orient")){
              //     if(_legend.orient == 'horizontal'){//横向
              //         return  parseInt(_legend.top);
              //     }else{
              //         return  parseInt(_legend.right);
              //     }
              // }

          },
          get_legend_color(){
              let _legend = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.legend;
              if(_legend && _legend.hasOwnProperty("textStyle") &&  _legend.textStyle.hasOwnProperty("color")){
                  return  _legend.textStyle.color;
              }else{
                  return '#FFFFFF';
              }
          },
          get_legend_fontFamily(){//获取字体
              let _legend = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.legend;
              if(_legend && _legend.hasOwnProperty("textStyle") &&  _legend.textStyle.hasOwnProperty("fontFamily")){
                  return  _legend.textStyle.fontFamily;
              }else{
                  return '微软雅黑';
              }
          },
          get_legend_fontSize(){//获取字体大小
              // let _legend = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.legend;
              // if(_legend && _legend.hasOwnProperty("textStyle") &&  _legend.textStyle.hasOwnProperty("fontSize")){
              //     return  _legend.textStyle.fontSize;
              // }else{
              //     return '12px';
              // }
          },
      },
      data(){
            return {
                legend_swiper:null,
                show:true
            }
      },
      mounted(){
          this.legend_swiper = new Swiper('#legend_swiper', {
              // direction : 'vertical',
              // autoHeight:true,
              // centeredSlides: true,
              observer:true,
              observeParents:true,
              // spaceBetween:35
          })
          console.log(2122,this.legend_swiper);
      },
      methods:{
          add_data(){//点击了添加数据按钮
            // this.$emit('add_data');
              this.legend_swiper.slideTo(1, 500, false);//切换到第2个slide，速度为1秒
          },
          go_back(){//返回
              this.legend_swiper.slideTo(0, 500, false);//切换到第1个slide，速度为1秒
          },
          legend_align(val){//获取当前选中图例对齐方式
              // this.$store1.state.legend
              console.log(555,val);
              this.$store.dispatch('legend_align',val);
          },
          distance(val){//获取边界距离
              this.$store.dispatch('distance',val);
          },
          legend_fontFamily(val){
              this.$store.dispatch('legend_fontFamily',val);
          },
          legend_fontSize(val){
              this.$store.dispatch('legend_fontSize',val);
          },
          legend_color(val){
              this.$store.dispatch('legend_color',val);
          }
      },
      components:{
      }
    }
</script>
<style  lang="scss">

</style>





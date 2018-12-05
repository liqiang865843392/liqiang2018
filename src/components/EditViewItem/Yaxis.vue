<template>
    <div  class="edit-y">
        <div class="swiper-container" id="yAxis_swiper" >
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="option-item">
                        <Checkbox v-model="yAxis_line_show" style="">显示坐标轴</Checkbox>
                        <Tooltip  :transfer=true content="编辑Y轴数据" placement="left-end" class="create-data" >
                            <icon name="data" scale="2" @click.native = "add_data"></icon>
                        </Tooltip>
                    </div>
                    <TextInput class="p-10" title="标题" @onchange="yAxis_name" :value="get_yAxis_name" placeholder="请输入标题单位"></TextInput>
                    <TextInput class="p-10" title="最大值" type='number' auto placeholder="" @onchange="yAxis_max" :value="get_yAxis_max"></TextInput>
                    <TextInput class="p-10" title="最小值" type='number' auto placeholder="" @onchange="yAxis_min" :value="get_yAxis_min"></TextInput>
                </div>
                <div class="swiper-slide">
                    <div style="margin-left: -18px;margin-right:-7px;margin-top: -8px;" v-show="get_is_current">
                        <Tooltip  :transfer=true content="返回" placement="left" class="go-back" >
                            <Icon type="ios-arrow-forward"  size="20" @click="go_back"/>
                        </Tooltip>
                        <TableData   @save="edit_yAxis_data" title="Y轴数据" :table_data = get_yAxis_data></TableData>
                    </div>
                </div>
            </div>
        </div>



        <!--<Checkbox v-model="true" style="">显示坐标轴</Checkbox>-->
        <!--<div class="option-item">-->
            <!--<LineSelect iconType="line-icon" :option="this.$store.state.common.select_option.line_type"></LineSelect>-->
            <!--<MySelect iconType="line-width-icon" :option="this.$store.state.common.select_option.font_size"></MySelect>-->
            <!--&lt;!&ndash;<ChooseColor></ChooseColor>&ndash;&gt;-->
        <!--</div>-->
        <!--<Checkbox v-model="true" style="">显示标题和单位</Checkbox>-->
        <!--<div class="option-item">-->
            <!--<LineSelect iconType="line-icon" :option="this.$store.state.common.select_option.line_type"></LineSelect>-->
            <!--<MySelect iconType="line-width-icon" :option="this.$store.state.common.select_option.font_size"></MySelect>-->
            <!--&lt;!&ndash;<ChooseColor></ChooseColor>&ndash;&gt;-->
        <!--</div>-->
        <!--<Checkbox v-model="true" style="">显示标签</Checkbox>-->
        <!--<div class="option-item">-->
            <!--<MySelect iconType="font-icon" :option="this.$store.state.common.select_option.fontType"></MySelect>-->
            <!--<MySelect iconType="line-width-icon" :option="this.$store.state.common.select_option.font_size"></MySelect>-->
            <!--&lt;!&ndash;<ChooseColor iconType="font-icon"></ChooseColor>&ndash;&gt;-->
        <!--</div>-->
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
              return (this.yAxis_swiper && this.yAxis_swiper.activeIndex == 1) ? true : false;
          },
          get_yAxis_data(){//获取Y轴数据传入数据显示组件
              let yAxis_data = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.yAxis.data;
              console.log(99999,yAxis_data);
              return yAxis_data && yAxis_data.length > 0 ? yAxis_data : [];
          },
          yAxis_line_show:{//轴线条的显示
              get:function(){
                  let _yAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.yAxis;
                  if(_yAxis && _yAxis.hasOwnProperty("show")){
                      return  _yAxis.show;
                  }else{
                      return false;
                  }
              },
              set:function(value) {
                  this.$store.dispatch('yAxis_line_show', value);
              }
          },
          get_yAxis_name(){//获取Y轴标题
              let _yAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.yAxis;
              if(_yAxis && _yAxis.hasOwnProperty("name")){
                  return  _yAxis.name;
              }else{
                  return '';
              }
          },
          get_yAxis_max(){//获取最大值
              let _yAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.yAxis;
              if(_yAxis && _yAxis.hasOwnProperty("max")){
                  return  _yAxis.max;
              }else{
                  return null;
              }
          },
          get_yAxis_min(){//获取最小值
              let _yAxis =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.yAxis;
              if(_yAxis && _yAxis.hasOwnProperty("min")){
                  return  _yAxis.min;
              }else{
                  return null;
              }
          }
      },
      data(){
            return {
                yAxis_swiper:null,
            }
      },
      mounted(){
          this.yAxis_swiper = new Swiper('#yAxis_swiper', {
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
              this.yAxis_swiper.slideTo(1, 500, false);
          },
          go_back(){//返回
              this.yAxis_swiper.slideTo(0, 500, false);
          },
          edit_yAxis_data(data){//修改X轴数据
              this.$store.dispatch('edit_yAxis_data',data);
          },
          yAxis_name(val){//修改Y轴标题
              this.$store.dispatch('yAxis_name', val);
          },
          yAxis_max(val){//修改最大值
              this.$store.dispatch('yAxis_max', val);
          },
          yAxis_min(val){//修改最小值
              this.$store.dispatch('yAxis_min', val);
          }
      },
      components:{
      }
    }
</script>
<style  lang="scss">

</style>





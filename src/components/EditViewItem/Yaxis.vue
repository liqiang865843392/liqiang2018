<template>
    <div  class="edit-y">
             <DataSwiper ref="data_swiper">
                 <div slot="one">
                     <div class="option-item">
                         <Checkbox v-model="yAxis_line_show" style="">显示坐标轴</Checkbox>
                         <Tooltip  :transfer=true content="编辑Y轴数据" placement="left-end" class="create-data" >
                             <icon name="data" scale="2" @click.native = "add_data"></icon>
                         </Tooltip>
                     </div>
                     <TextInput class="p-10" title="标题" @onchange="yAxis_name" :value="get_yAxis_name" placeholder="请输入标题单位"></TextInput>
                     <TextInput class="p-10" title="最大值" type='number' width="132" auto placeholder="" @onchange="yAxis_max" :value="get_yAxis_max"></TextInput>
                     <TextInput class="p-10" title="最小值" type='number' width="132" auto  placeholder="" @onchange="yAxis_min" :value="get_yAxis_min"></TextInput>
                 </div>
                 <div slot="two" v-if="swiper_show">
                     <div style="margin-left: -18px;margin-right:-7px;margin-top: -8px;">
                         <Tooltip  :transfer=true content="返回" placement="left" class="go-back" >
                             <Icon type="ios-arrow-forward"  size="20" @click="go_back"/>
                         </Tooltip>
                         <TableData   @save="edit_yAxis_data" title="Y轴数据" :table_data = get_yAxis_data></TableData>
                     </div>
                 </div>
             </DataSwiper>

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
    import DataSwiper from '@/components/common/DataSwiper'
    export default {
      props: {
      },
      created(){

      },
      computed:{
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
                swiper_show:false
            }
      },
      mounted(){

      },
      methods:{
          add_data(){//点击了编辑数据按钮
              // console.log(777,this.$refs.data_swiper);
              this.$refs.data_swiper.change_slide(1);
              this.swiper_show = true;
          },
          go_back(){//返回
              this.$refs.data_swiper.change_slide(0);
              this.swiper_show = false;//切换到第0页的时候 隐藏第1页（不然切换到开发者模式会显示）
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
          DataSwiper
      }
    }
</script>
<style  lang="scss">

</style>





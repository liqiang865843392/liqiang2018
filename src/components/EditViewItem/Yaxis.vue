<template>
    <div  class="edit-y">
        <div class="mt10">
            <Checkbox v-model="yAxis_line_show" style="">显示坐标轴</Checkbox>
            <Tooltip  :transfer=true content="添加图例数据" placement="left-end" class="create-data" >
                <icon name="data" scale="2" ></icon>
            </Tooltip>
        </div>
        <TextInput title="标题" @onchange="yAxis_name" :value="get_yAxis_name" placeholder="请输入标题单位"></TextInput>
        <TextInput title="最大值" type='number' auto placeholder="" @onchange="yAxis_max" :value="get_yAxis_max"></TextInput>
        <TextInput title="最小值" type='number' auto placeholder="" @onchange="yAxis_min" :value="get_yAxis_min"></TextInput>
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
    export default {
      props: {
      },
      created(){

      },
      computed:{
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

            }
      },
      mounted(){

      },
      methods:{
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





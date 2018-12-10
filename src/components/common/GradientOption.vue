<template>
    <!--渐变配置组件-->
    <div>
        <div  class="choose-color" style="height:30px;">
            <MyRadio  @onchange="set_color_type"  text="颜色类型"  :value="get_color_type"  :option="this.$store.state.common.select_option.color_type"></MyRadio>
            <ChooseColor  v-if="colorType == 'once' " class="color-once" tooltip="颜色" iconType="font-icon" @onchange="set_once_color" :value="get_once_color"></ChooseColor>
        </div>
        <div class="gradient-option"  v-if="colorType == 'gradient'">
            <div class="option-item" style="justify-content: flex-start!important;">
                <span class="title-label" style="width:40px;">x轴:</span>
                <span class="title-label textInput">x:</span>
                <TextInput class=""  title="" type='number'  width="50" style="margin-right:20px;" textIndent="5" :max=1  placeholder="" @onchange="set_bar_gradient_grid('x',$event)" :value="get_bar_gradient_x"></TextInput>
                <span class="title-label textInput">x2:</span>
                <TextInput class=""  title="" type='number'  width="50" :max=1  textIndent="5"  placeholder="" @onchange="set_bar_gradient_grid('x2',$event)" :value="get_bar_gradient_x2"></TextInput>
            </div>
            <div class="option-item" style="justify-content: flex-start!important;">
                <span class="title-label" style="width:40px;">y轴:</span>
                <span class="title-label textInput">y:</span>
                <TextInput class=""  title="" type='number'  width="50" style="margin-right:20px;" textIndent="5" :max=1  placeholder="" @onchange="set_bar_gradient_grid('y',$event)" :value="get_bar_gradient_y"></TextInput>
                <span class="title-label textInput">y2:</span>
                <TextInput class=""  title="" type='number'  width="50" :max=1  textIndent="5"  placeholder="" @onchange="set_bar_gradient_grid('y2',$event)" :value="get_bar_gradient_y2"></TextInput>
            </div>
            <div class="option-item" style="justify-content:space-between!important;margin-top:5px;">
                <span class="title-label" style="width:40px;color:rgba(45, 140, 240,.7) !important">渐变组</span>
                <Tooltip  :transfer=true content="添加渐变" placement="top" class="" offset="">
                    <Icon type="ios-add-circle" size="20" class="add-gradient" @click="add_gradient"/>
                </Tooltip>
            </div>
            <div class="option-item gradient-item" style="" v-for="(item,index) in get_gradient_color">
                <span class="title-label" style="">位置:&nbsp;&nbsp;</span>
                <TextInput class=""  title="" type='number'  width="50" style="margin-right:12px;" :step="0.1" textIndent="5" :max=1  placeholder="" @onchange="set_gradient_position(index,$event)" :value="item.offset"></TextInput>
                <span class="title-label" style="">颜色:&nbsp;&nbsp;</span>
                <ChooseColor class="" tooltip="颜色" iconType="font-icon" @onchange="set_gradient_color(index,$event)" :value="item.color"></ChooseColor>
                <Tooltip  :transfer=true content="删除" placement="top" class="remove" offset="">
                    <Icon type="ios-close-circle" size="20" @click="remove_gradient(index)"/>
                </Tooltip>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      props: {
          index:{//第几个series
            type:Number,
            default:0
          }
      },
      created(){

      },
      computed:{
          get_color_type(){//获取颜色类型
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series[this.index].hasOwnProperty("itemStyle")) {
                  //如果是数组 说明是渐变 反之是单色
                  if( _series[this.index].itemStyle.color instanceof Object){
                      this.colorType =  'gradient';
                      return  'gradient';
                  }else{//单色
                      this.colorType =  'once';
                      return  'once'
                  }
              }
          },
          get_once_color(){//获取单色颜色
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series[this.index].hasOwnProperty("itemStyle") && _series[this.index].itemStyle.hasOwnProperty("color") && !_series[this.index].itemStyle.color instanceof Array){
                  //如果是数组 说明是渐变 反之是单色
                  return _series[this.index].itemStyle.color;
              }else{
                  return '#fff';
              }
          },
          get_bar_gradient_x(){//获取渐变颜色x
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series[this.index].hasOwnProperty("itemStyle") && _series[this.index].itemStyle.hasOwnProperty("color") && _series[this.index].itemStyle.color.hasOwnProperty("x")){
                  return _series[this.index].itemStyle.color.x;
              }else{
                  return 0;
              }
          },
          get_bar_gradient_x2(){//获取渐变颜色x2
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series[this.index].hasOwnProperty("itemStyle") && _series[this.index].itemStyle.hasOwnProperty("color") && _series[this.index].itemStyle.color.hasOwnProperty("x2")){
                  return _series[this.index].itemStyle.color.x2;
              }else{
                  return 0;
              }
          },
          get_bar_gradient_y(){//获取渐变颜色y
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series[this.index].hasOwnProperty("itemStyle") && _series[this.index].itemStyle.hasOwnProperty("color") && _series[this.index].itemStyle.color.hasOwnProperty("y")){
                  return _series[this.index].itemStyle.color.y;
              }else{
                  return 0;
              }
          },
          get_bar_gradient_y2(){//获取渐变颜色y2
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series[this.index].hasOwnProperty("itemStyle") && _series[this.index].itemStyle.hasOwnProperty("color") && _series[this.index].itemStyle.color.hasOwnProperty("y2")){
                  return _series[this.index].itemStyle.color.y2;
              }else{
                  return 0;
              }
          },
          get_gradient_color(){//获取渐变颜色
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series[this.index].hasOwnProperty("itemStyle") && _series[this.index].itemStyle.hasOwnProperty("color") && _series[this.index].itemStyle.color.hasOwnProperty("colorStops")){
                  return _series[this.index].itemStyle.color.colorStops;
              }else{
                  return [];
              }
          }
      },
      data(){
            return {
                colorType:'once',//颜色选择类型  默认为单色
            }
      },
      mounted(){

      },
      methods:{
          set_color_type(val){//修改颜色选择类别
              this.colorType = val;
          },
          set_once_color(val){//设置单色
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_once_color',data);
          },
          set_bar_gradient_grid(type,val){//修改渐变坐标
              let data = {type:type,value:val,index:this.index};
              this.$store.dispatch('set_bar_gradient_grid',data);
          },
          add_gradient(){//添加渐变项
              this.$store.dispatch('add_bar_gradient', this.index);
          },
          set_gradient_color(g_index,val){//修改渐变色
              let data = {value:val,series_index:this.index,g_index:g_index};
              this.$store.dispatch('set_bar_gradient_color', data);
          },
          set_gradient_position(g_index,val){//修改渐变位置
              let data = {value:val,series_index:this.index,g_index:g_index};
              this.$store.dispatch('set_bar_gradient_position', data);
          },
          remove_gradient(g_index){//删除渐变
              let data = {series_index:this.index,g_index:g_index};
              this.$store.dispatch('remove_bar_gradient',data);
          }
      },
      components:{
      }
    }
</script>
<style scoped lang="scss">
    .choose-color{
        position:relative;
        .color-once{
            position:absolute;
            right: -12px;
            top: -8px;
        }
    }
    .gradient-option{
        margin-top: 15px;
        border-radius: 5px;
        padding:0 10px;
        /*border: 1px solid rgb(45, 140, 240);*/
        background-color: rgba(81, 130, 228, 0.1);
        box-shadow: 0 0 0 1px rgba(81, 130, 227, 0.15), inset 0 0 0 1px rgba(81, 130, 228, 0.43);
        .add-gradient{//添加渐变
            /*margin-right:10px;*/
        }
        .add-gradient:hover{
            cursor: pointer;
            color:rgb(45, 140, 240);
        }
        .gradient-item{//渐变项
            position: relative;
            justify-content: flex-start!important;
            padding: 0 0 10px;
            .remove{//删除渐变
                position:absolute;
                right:0;
            }
            .remove:hover{
                cursor: pointer;
                color:rgb(45, 140, 240);
            }
        }

    }
</style>





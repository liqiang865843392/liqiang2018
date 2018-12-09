<template>
    <!--柱状图option-->
    <div class="bar-option">
        <DataSwiper ref="data_swiper">
            <div slot="one">
                <div class="option-item">
                    <Checkbox  v-model="bar_label_show" style="">显示数值</Checkbox>
                    <Tooltip  :transfer=true content="编辑图例数据" placement="left-end" class="create-data" >
                        <icon name="data" scale="2" @click.native = "edit_data"></icon>
                    </Tooltip>
                </div>
                <div class="option-item">
                    <span class="title-label">数值属性</span>
                    <TextInput  width="55" iconType="line-width-icon" indent="8" tooltip="内容格式"   placeholder="内容格式" @onchange="set_bar_label_format" :value="get_bar_label_format"></TextInput>
                    <!--<MySelect tooltip="内容格式" iconType="font-icon" @onchange="" value=""  :option="this.$store.state.common.select_option.fontType"></MySelect>-->
                    <MySelect tooltip="数值位置" iconType="line-width-icon" @onchange="set_bar_label_position" :value="get_bar_label_position" :option="this.$store.state.common.select_option.location"></MySelect>
                </div>
                <div class="option-item">
                    <span class="title-label">文字属性</span>
                    <MySelect style="margin-left: -18px;" tooltip="字号" iconType="line-width-icon"  @onchange="set_bar_label_fontSize"  :value="get_bar_label_fontSize" :option="this.$store.state.common.select_option.font_size"></MySelect>
                    <ChooseColor tooltip="字体色" iconType="font-icon" @onchange="set_bar_label_color" :value="get_bar_label_color"></ChooseColor>
                </div>
                <div class="option-item">
                    <span class="title-label">柱形配置</span>
                    <MySelect tooltip="柱间距" iconType="line-width-icon" @onchange="set_bar_barGap" :value="get_bar_barGap" :option="this.$store.state.common.select_option.spacing"></MySelect>
                    <MySelect tooltip="柱组间距" iconType="font-icon" @onchange="set_bar_barCategoryGap"  :value="get_bar_barCategoryGap"  :option="this.$store.state.common.select_option.spacing"></MySelect>
                </div>
                <div class="option-item"  style="height:30px;">
                    <span class="title-label" style="float:left;line-height: 30px;" >圆角半径</span>
                    <TextInput style="float:left;width:70%;" title="" type='number'   width="100"  placeholder="" @onchange="set_bar_barBorderRadius" :value="get_bar_barBorderRadius"></TextInput>
                </div>
                <div  class="choose-color p-15" style="height:30px;">
                    <MyRadio  @onchange="set_color_type"  text="颜色类型"  :value="get_color_type"  :option="this.$store.state.common.select_option.color_type"></MyRadio>
                    <ChooseColor  v-show="colorType == 'once' " class="color-once" tooltip="颜色" iconType="font-icon" @onchange="set_once_color" :value="get_once_color"></ChooseColor>
                </div>
                <div class="gradient-option"  v-show="colorType == 'gradient'">
                    <div class="option-item" style="justify-content: flex-start!important;">
                        <span class="title-label" style="width:40px;">x轴:</span>
                        <span class="title-label textInput">x:</span>
                        <TextInput class=""  title="" type='number'  width="50" style="margin-right:20px;" textIndent="5" :max=1  placeholder="" @onchange="set_bar_gradient_x" :value="get_bar_gradient_x"></TextInput>
                        <span class="title-label textInput">x2:</span>
                        <TextInput class=""  title="" type='number'  width="50" :max=1  textIndent="5"  placeholder="" @onchange="set_bar_gradient_x2" :value="get_bar_gradient_x2"></TextInput>
                    </div>
                    <div class="option-item" style="justify-content: flex-start!important;padding:0 10px">
                        <span class="title-label" style="width:40px;">y轴:</span>
                        <span class="title-label textInput">y:</span>
                        <TextInput class=""  title="" type='number'  width="50" style="margin-right:20px;" textIndent="5" :max=1  placeholder="" @onchange="set_bar_gradient_y" :value="get_bar_gradient_y"></TextInput>
                        <span class="title-label textInput">y2:</span>
                        <TextInput class=""  title="" type='number'  width="50" :max=1  textIndent="5"  placeholder="" @onchange="set_bar_gradient_y2" :value="get_bar_gradient_y2"></TextInput>
                    </div>
                    <div class="option-item" style="margin-top:5px;">
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
            <div slot="two">
                <div style="margin-left: -18px;margin-right:-7px;margin-top: -8px;" >
                    <Tooltip  :transfer=true content="返回" placement="left" class="go-back" >
                        <Icon type="ios-arrow-forward"  size="20" @click="go_back"/>
                    </Tooltip>
                    <TableData   @save="edit_series_data" title='图形数据' :table_data = get_series_data></TableData>
                </div>
            </div>
        </DataSwiper>
    </div>
</template>
<script>
    import DataSwiper from '@/components/common/DataSwiper'
    export default {
      props: {
          index:{

          }
      },
      created(){

      },
     data(){
        return {
            colorType:'once',//颜色选择类型  默认为单色
        }
     },
      computed:{
          get_series_data(){//获取图形数据传入数据显示组件
              let series_data = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series[this.index].data;
              console.log('series_data',series_data);
              return series_data && series_data.length > 0 ? series_data : [];
          },
          bar_label_show:{//item 标签显示
              get:function(){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series  && _series[this.index].hasOwnProperty("label") && _series[this.index].label.hasOwnProperty("show")){
                      return _series[this.index].label.show;
                  }else{
                      return false;
                  }
              },
              set:function(value) {
                  let data = {value:value,index:this.index};
                  this.$store.dispatch('set_bar_label_show', data);
              }
          },
          get_bar_label_format(){//获取标签格式
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series &&  _series[this.index].hasOwnProperty("label") && _series[this.index].label.hasOwnProperty("formatter")){
                  return _series[this.index].label.formatter;
              }else{
                  return '{b}%';
              }
          },
          get_bar_label_position(){//获取标签位置
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series[this.index].hasOwnProperty("label")  &&  _series[this.index].label.hasOwnProperty("position")){
                  return _series[this.index].label.position;
              }else{
                  return 'inside';
              }
          },
          get_bar_label_fontSize(){//获取标签的字号
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series[this.index].hasOwnProperty("label")  &&  _series[this.index].label.hasOwnProperty("fontSize")){
                  return _series[this.index].label.fontSize;
              }else{
                  return '12';
              }
          },
          get_bar_label_color(){//获取标签的颜色
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series[this.index].hasOwnProperty("label")  &&  _series[this.index].label.hasOwnProperty("color")){
                  return _series[this.index].label.color;
              }else{
                  return '#fff';
              }
          },
          get_bar_barGap(){//获取柱间距
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series &&  _series[this.index].hasOwnProperty("barGap")){
                  return _series[this.index].barGap;
              }else{
                  return '30%';
              }
          },
          get_bar_barCategoryGap(){//获取柱组间距
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series &&  _series[this.index].hasOwnProperty("barCategoryGap")){
                  return _series[this.index].barCategoryGap;
              }else{
                  return '20%';
              }
          },
          get_bar_barBorderRadius(){//获取圆角
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series[this.index].hasOwnProperty("itemStyle") && _series[this.index].itemStyle.hasOwnProperty("barCategoryGap")){
                  return _series[this.index].itemStyle.barCategoryGap;
              }else{
                  return 0;
              }
          },
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
      mounted(){

      },
      methods:{
          edit_data(){//点击了编辑数据
              this.$refs.data_swiper.change_slide(1);
          },
          go_back(){//点击了返回
              this.$refs.data_swiper.change_slide(0);
          },
          edit_series_data(data){//保存修改后的数据
              let send_data = {data:data,index:this.index};
              this.$store.dispatch('edit_series_data',send_data);
          },
          set_bar_label_format(val){
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_bar_label_format', data);
          },
          set_bar_label_position(val){//改变标签的位置
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_bar_label_position', data);
          },
          set_bar_label_fontSize(val){//改变标签的字号
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_bar_label_fontSize', data);
          },
          set_bar_label_color(val){//改变标签的颜色
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_bar_label_color', data);
          },
          set_bar_barGap(val){//改变柱间距
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_bar_barGap', data);
          },
          set_bar_barCategoryGap(val){//修改柱组间距
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_bar_barCategoryGap', data);
          },
          set_bar_barBorderRadius(val){//修改圆角
              console.log(667,val);
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_bar_barBorderRadius', data);
          },
          set_color_type(val){//修改颜色选择类别
            this.colorType = val;
          },
          set_once_color(val){//设置单色
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_once_color',data);
          },
          set_bar_gradient_x(val){//修改渐变x
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_bar_gradient_x',data);
          },
          set_bar_gradient_x2(val){//修改渐变x2
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_bar_gradient_x2',data);
          },
          set_bar_gradient_y(val){//修改渐变y
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_bar_gradient_y',data);
          },
          set_bar_gradient_y2(val){//修改渐变y2
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_bar_gradient_y2',data);
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
          DataSwiper
      }
    }
</script>
<style  lang="scss">
    .bar-option{
        .option-item{
            padding-left:0!important;
            justify-content: space-between!important;
            .textInput{
                width:20px;
                margin-right:5px;
            }
        }
        .choose-color{
            position:relative;
            .color-once{
                position:absolute;
                right: -18px;
                top: 7px;
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

    }
</style>





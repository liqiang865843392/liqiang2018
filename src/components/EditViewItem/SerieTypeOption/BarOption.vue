<template>
    <!--柱状图option-->
    <div class="bar-option">
        <div class="option-item">
            <Checkbox  v-model="bar_label_show" style="">显示数值</Checkbox>
            <Tooltip  :transfer=true content="编辑图例数据" placement="left-end" class="create-data" >
                <icon name="data" scale="2" @click.native = "add_data"></icon>
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
            <TextInput style="float:left;width:70%;" title="" type='number'   placeholder="" @onchange="set_bar_barBorderRadius" :value="get_bar_barBorderRadius"></TextInput>
        </div>
        <!--<div  class="choose-color p-15" style="height:30px;">-->
            <!--<MyRadio  @onchange="set_color_type"  text="柱体颜色"  value=""  :option="this.$store.state.common.select_option.color_type"></MyRadio>-->
            <!--<ChooseColor  v-show="colorType == 'once' " class="color-once" tooltip="颜色" iconType="font-icon" @onchange="" value=""></ChooseColor>-->
        <!--</div>-->
        <!--<div class="option-item gradient-option"  v-show="colorType == 'gradient'"  style="justify-content: flex-start!important;">-->
            <!--<span class="title-label textInput">x:</span>-->
            <!--<TextInput class="textInput"  title="" type='number'  textIndent="-5" :max=1  placeholder="" @onchange="set_bar_barBorderRadius" :value="get_bar_barBorderRadius"></TextInput>-->
            <!--<span class="title-label textInput">y:</span>-->
            <!--<TextInput class="textInput"  title=""  type='number' :max=1 textIndent="-5"  placeholder="" @onchange="set_bar_barBorderRadius" :value="get_bar_barBorderRadius"></TextInput>-->
            <!--<span class="title-label textInput">x2:</span>-->
            <!--<TextInput class="textInput"  title="" type='number'  :max=1  textIndent="-5"  placeholder="" @onchange="set_bar_barBorderRadius" :value="get_bar_barBorderRadius"></TextInput>-->
            <!--<span class="title-label textInput">y2:</span>-->
            <!--<TextInput class="textInput"  title="" type='number'   :max=1  textIndent="-5" placeholder="" @onchange="set_bar_barBorderRadius" :value="get_bar_barBorderRadius"></TextInput>-->
        <!--</div>-->
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
     data(){
        return {
            colorType:'once',//颜色选择类型  默认为单色
        }
     },
      computed:{
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
          }
      },
      mounted(){

      },
      methods:{
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
          }
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
            .textInput{
                width:15%;
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
            padding-right: 0!important;
            /*border: 1px solid rgb(45, 140, 240);*/
            background-color: rgba(81, 130, 228, 0.1);
            box-shadow: 0 0 0 1px rgba(81, 130, 227, 0.15), inset 0 0 0 1px rgba(81, 130, 228, 0.43);
        }

    }
</style>





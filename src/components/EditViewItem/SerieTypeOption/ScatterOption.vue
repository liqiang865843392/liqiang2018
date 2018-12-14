<template>
    <!--散点图option-->
    <div class="scatter-option">
        <div class="option-item">
            <Checkbox  v-model="scatter_label_show" style="">显示标签</Checkbox>
        </div>
        <div class="option-item" style="">
            <span class="title-label mr7">标签属性</span>
            <MySelect  class="mr7" tooltip="数值位置" iconType="line-width-icon" @onchange="set_scatter_label_attr('position',$event)" :value="get_scatter_label_attr('position','top')" :option="this.$store.state.common.select_option.location"></MySelect>
            <ChooseColor  class="mr7" iconType="font-icon" tooltip="字体色" @onchange="set_scatter_label_attr('color',$event)"  :value="get_scatter_label_attr('color','#fff')"></ChooseColor>
            <IconRadio  icon="md-color-wand" @onchange="set_scatter_label_attr('fontWeight',$event)"  :value="get_scatter_label_fontWeight" tooltip="加粗" ></IconRadio>
        </div>
        <div class="option-item" style="">
            <span class="title-label mr7">字体属性</span>
            <MySelect class="mr7" tooltip="字体" iconType="font-icon" @onchange="set_scatter_label_attr('fontFamily',$event)"  value=""  :option="this.$store.state.common.select_option.fontType"></MySelect>
            <MySelect class="mr7" tooltip="字号" iconType="line-width-icon" @onchange="set_scatter_label_attr('fontSize',$event)"  value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
        </div>
        <div class="option-item" style="">
            <span class="title-label mr7">散点属性</span>
            <ChooseColor  class="mr7" iconType="font-icon" tooltip="颜色" @onchange="set_scatter_itemStyle_attr('color',$event)"  :value="get_scatter_itemStyle_attr('color','#fff')"></ChooseColor>
        </div>
        <AddItemOption></AddItemOption>
        <!--<div class="option-item" style="justify-content: flex-start">-->
            <!--<span class="title-label">散点属性</span>-->
            <!--<TextInput  style="margin:0 15px;" tooltip="最大散点" width="50" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>-->
            <!--<TextInput  tooltip="最小散点" iconType="font-icon"  width="50" type='number'  placeholder="" @onchange="" value=""></TextInput>-->
        <!--</div>-->
    </div>
</template>
<script>
    import AddItemOption from '@/components/common/AddItemOption'
    import DataSwiper from '@/components/common/DataSwiper'
    export default {
      props: {
          index:{
              default:0
          }
      },
      created(){

      },
      computed:{
          scatter_label_show:{//标签显示
              get:function(){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series  && _series[this.index].hasOwnProperty("label") && _series[this.index].label.hasOwnProperty("show")){
                      return _series[this.index].label.show;
                  }else{
                      return false;
                  }
              },
              set:function(value) {
                  let data = {type:'show',value:value,index:this.index};
                  this.$store.dispatch('set_scatter_label_attr', data);
              }
          },
          get_scatter_label_attr(type,_default){//获取折线标签属性  type:属性名 _default:默认值
              return function(type,_default){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series && _series[this.index].hasOwnProperty("label") &&  _series[this.index].label.hasOwnProperty(type)){
                      return _series[this.index].label[type];
                  }else{//没有值 使用默认值
                      return _default;
                  }
              }
          },
          get_scatter_label_fontWeight(){//获取折线标签是否加粗
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series  && _series[this.index].hasOwnProperty("label") && _series[this.index].label.hasOwnProperty("fontWeight")){
                  if(_series[this.index].label.fontWeight == 'normal'){
                      return false;
                  }
                  return true;
              }
          },
          get_scatter_itemStyle_attr(type,_default){//修改标签属性  type:属性名 _default:默认值
              return function(type,_default){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series && _series[this.index].hasOwnProperty("itemStyle") &&  _series[this.index].itemStyle.hasOwnProperty(type)){
                      return _series[this.index].itemStyle[type];
                  }else{//没有值 使用默认值
                      return _default;
                  }
              }
          },
      },
      data(){
            return {

            }
      },
      mounted(){

      },
      methods:{
          set_scatter_label_attr(type,val){//修改折线label的属性
              let data = {type:type,value:val,index:this.index};
              this.$store.dispatch('set_scatter_label_attr', data);
          },
          set_scatter_itemStyle_attr(type,val){//修改散点itemStyle的属性
              let data = {type:type,value:val,index:this.index};
              this.$store.dispatch('set_scatter_itemStyle_attr', data);
          }
      },
      components:{
          AddItemOption
      }
    }
</script>
<style  lang="scss">
    .scatter-option{

    }
</style>





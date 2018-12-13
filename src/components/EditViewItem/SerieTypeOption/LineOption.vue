<template>
    <!--柱状图option-->
    <div class="line-option">
        <DataSwiper ref="data_swiper">
            <div slot="one">
                <div class="option-item" style="">
                    <Checkbox  v-model="line_showSymbol" class="mr10">显示标记</Checkbox>
                    <Checkbox  v-model="line_smooth" class="mr10">平滑曲线</Checkbox>
                    <Checkbox  v-model="line_label_show" class="mr10" >显示标签</Checkbox>
                    <Tooltip  :transfer=true content="编辑图形数据" placement="left-end" class="create-data" >
                        <icon name="data" scale="2" @click.native = "edit_data"></icon>
                    </Tooltip>
                </div>
                <div class="option-item">
                    <span class="title-label mr10">标记属性</span>
                    <MySelect class="mr10" tooltip="标记图形" iconType="font-icon" @onchange="set_line_attr('symbol',$event)"  :value="get_line_attr('symbol','emptyCircle')"  :option="this.$store.state.common.select_option.symbolType"></MySelect>
                    <TextInput class="mr10"  tooltip="标记大小" iconType="font-icon" type='number'  width="50" placeholder="" @onchange="set_line_attr('symbolSize',$event)"  :value="get_line_attr('symbolSize',5)"></TextInput>
                </div>
                <div class="option-item" style="">
                    <span class="title-label mr10">标签属性</span>
                    <MySelect  class="mr10" tooltip="数值位置" iconType="line-width-icon" @onchange="set_line_label_attr('position',$event)" :value="get_line_label_attr('position','top')" :option="this.$store.state.common.select_option.location"></MySelect>
                    <ChooseColor  class="mr10" iconType="font-icon" tooltip="字体色" @onchange="set_line_label_attr('color',$event)"  :value="get_line_label_attr('color','#fff')"></ChooseColor>
                    <IconRadio  icon="md-color-wand" @onchange="set_line_label_attr('fontWeight',$event)"  :value="get_line_label_fontWeight" tooltip="加粗" ></IconRadio>
                </div>
                <div class="option-item" style="">
                    <span class="title-label mr10">字体属性</span>
                    <MySelect class="mr10" tooltip="字体" iconType="font-icon" @onchange="set_line_label_attr('fontFamily',$event)"  value=""  :option="this.$store.state.common.select_option.fontType"></MySelect>
                    <MySelect class="mr10" tooltip="字号" iconType="line-width-icon" @onchange="set_line_label_attr('fontSize',$event)"  value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
                </div>
                <div class="option-item" style="">
                    <span class="title-label mr10">线条属性</span>
                    <MySelect class="mr10" tooltip="线条粗细" iconType="line-width-icon" @onchange="set_line_lineStyle_attr('width',$event)" value="" :option="this.$store.state.common.select_option.line_width"></MySelect>
                    <!--<ChooseColor  iconType="font-icon" tooltip="线条颜色" @onchange="set_line_lineStyle_attr('color',$event)" value=""></ChooseColor>-->
                </div>
                <GradientOption class="m-12"></GradientOption>
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
    import GradientOption from '@/components/common/GradientOption'
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
          get_series_data(){//获取图形数据传入数据显示组件
              let series_data = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series[this.index].data;
              return series_data && series_data.length > 0 ? series_data : [];
          },
          line_showSymbol:{//标记显示
              get:function(){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series  && _series[this.index].hasOwnProperty("showSymbol")){
                      return _series[this.index].showSymbol;
                  }else{
                      return true;
                  }
              },
              set:function(value) {
                  let data = {type:'showSymbol',value:value,index:this.index};
                  this.$store.dispatch('set_line_attr', data);
              }
          },
          line_smooth:{//是否平滑曲线
              get:function(){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series  && _series[this.index].hasOwnProperty("smooth")){
                      return _series[this.index].smooth;
                  }else{
                      return false;
                  }
              },
              set:function(value) {
                  let data = {type:'smooth',value:value,index:this.index};
                  this.$store.dispatch('set_line_attr', data);
              }
          },
          line_label_show:{//是否显示标签
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
                  this.$store.dispatch('set_line_label_attr', data);
              }
          },
          get_line_attr(type,_default){//获取折线属性  type:属性名 _default:默认值
              return function(type,_default){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series && _series[this.index].hasOwnProperty(type)){
                      return _series[this.index][type];
                  }else{//没有值 使用默认值
                      return _default;
                  }
              }
          },
          get_line_label_attr(type,_default){//获取折线标签属性  type:属性名 _default:默认值
              return function(type,_default){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series && _series[this.index].hasOwnProperty("label") &&  _series[this.index].label.hasOwnProperty(type)){
                      return _series[this.index].label[type];
                  }else{//没有值 使用默认值
                      return _default;
                  }
              }
          },
          get_line_label_fontWeight(){//获取折线标签是否加粗
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series  && _series[this.index].hasOwnProperty("label") && _series[this.index].label.hasOwnProperty("fontWeight")){
                  if(_series[this.index].label.fontWeight == 'normal'){
                      return false;
                  }
                  return true;
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
          set_line_attr(type,val){//修改折线的属性
              let data = {type:type,value:val,index:this.index};
              this.$store.dispatch('set_line_attr',data);
          },
          set_line_label_attr(type,val){//修改折线label的属性
              console.log('val222',val);
              let data = {type:type,value:val,index:this.index};
              this.$store.dispatch('set_line_label_attr', data);
          },
          set_line_lineStyle_attr(type,val){//修改折线lineStyle的属性
              let data = {type:type,value:val,index:this.index};
              this.$store.dispatch('set_line_lineStyle_attr', data);
          }
      },
      components:{
          GradientOption,DataSwiper
      }
    }
</script>
<style  lang="scss">
    .line-option{

    }
</style>





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
                    <TextInput  width="55" iconType="line-width-icon" indent="8" tooltip="内容格式"   placeholder="内容格式" @onchange="set_bar_label_attr('formatter',$event)" :value="get_bar_label_attr('formatter','{b}')"></TextInput>
                    <!--<MySelect tooltip="内容格式" iconType="font-icon" @onchange="" value=""  :option="this.$store.state.common.select_option.fontType"></MySelect>-->
                    <MySelect tooltip="数值位置" iconType="line-width-icon" @onchange="set_bar_label_attr('position',$event)" :value="get_bar_label_attr('position','inside')" :option="this.$store.state.common.select_option.location"></MySelect>
                </div>
                <div class="option-item">
                    <span class="title-label">文字属性</span>
                    <MySelect style="margin-left: -18px;" tooltip="字号" iconType="line-width-icon"  @onchange="set_bar_label_attr('fontSize',$event)"  :value="get_bar_label_attr('fontSize',12)" :option="this.$store.state.common.select_option.font_size"></MySelect>
                    <ChooseColor tooltip="字体色" iconType="font-icon" @onchange="set_bar_label_attr('color',$event)" :value="get_bar_label_attr('color','#fff')"></ChooseColor>
                </div>
                <div class="option-item">
                    <span class="title-label">柱形配置</span>
                    <MySelect tooltip="柱间距" iconType="line-width-icon" @onchange="set_bar_attr('barGap',$event)" :value="get_bar_attr('barGap','30%')" :option="this.$store.state.common.select_option.spacing"></MySelect>
                    <MySelect tooltip="柱组间距" iconType="font-icon" @onchange="set_bar_attr('barCategoryGap',$event)"  :value="get_bar_attr('barCategoryGap','20%')"  :option="this.$store.state.common.select_option.spacing"></MySelect>
                </div>
                <div class="option-item"  style="height:30px;">
                    <span class="title-label" style="float:left;line-height: 30px;" >圆角半径</span>
                    <TextInput style="float:left;width:70%;" title="" type='number'   width="100"  placeholder="" @onchange="set_bar_itemStyle_attr('barBorderRadius',$event)" :value="get_bar_itemStyle_attr('barBorderRadius',0)"></TextInput>
                </div>
                <GradientOption :index="index" class="m-12"></GradientOption>
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
    import GradientOption from '@/components/common/GradientOption'
    export default {
      props: {
          index:{

          }
      },
      created(){

      },
     data(){
        return {

        }
     },
      computed:{
          get_series_data(){//获取图形数据传入数据显示组件
              let series_data = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series[this.index].data;
              console.log('series_data',series_data);
              return series_data && series_data.length > 0 ? series_data : [];
          },
          bar_label_show:{//标签显示
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
                  this.$store.dispatch('set_bar_label_attr', data);
              }
          },
          get_bar_label_attr(type,_default){//修改标签属性  type:属性名 _default:默认值
                return function(type,_default){
                    let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                    if(_series && _series[this.index].hasOwnProperty("label") &&  _series[this.index].label.hasOwnProperty(type)){
                        return _series[this.index].label[type];
                    }else{//没有值 使用默认值
                        return _default;
                    }
                }
          },
          get_bar_attr(type,_default){//修改柱形属性  type:属性名 _default:默认值
              return function(type,_default){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series && _series[this.index].hasOwnProperty(type)){
                      return _series[this.index][type];
                  }else{//没有值 使用默认值
                      return _default;
                  }
              }
          },
          get_bar_itemStyle_attr(type,_default){//修改柱形itemStyle属性  type:属性名 _default:默认值
              return function(type,_default){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series && _series[this.index].hasOwnProperty("itemStyle") &&  _series[this.index].itemStyle.hasOwnProperty(type)){
                      return _series[this.index].itemStyle[type];
                  }else{//没有值 使用默认值
                      return _default;
                  }
              }
          },
          //以下注释部分被闭包替换，暂时不用  如果到时候有闭包引起的性能问题 可以改为注释代码
          // get_bar_label_format(){//获取标签格式
          //     let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
          //     if(_series &&  _series[this.index].hasOwnProperty("label") && _series[this.index].label.hasOwnProperty("formatter")){
          //         return _series[this.index].label.formatter;
          //     }else{
          //         return '{b}%';
          //     }
          // },
          // get_bar_label_position(){//获取标签位置
          //     let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
          //     if(_series && _series[this.index].hasOwnProperty("label")  &&  _series[this.index].label.hasOwnProperty("position")){
          //         return _series[this.index].label.position;
          //     }else{
          //         return 'inside';
          //     }
          // },
          // get_bar_label_fontSize(){//获取标签的字号
          //     let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
          //     if(_series && _series[this.index].hasOwnProperty("label")  &&  _series[this.index].label.hasOwnProperty("fontSize")){
          //         return _series[this.index].label.fontSize;
          //     }else{
          //         return '12';
          //     }
          // },
          // get_bar_label_color(){//获取标签的颜色
          //     let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
          //     if(_series && _series[this.index].hasOwnProperty("label")  &&  _series[this.index].label.hasOwnProperty("color")){
          //         return _series[this.index].label.color;
          //     }else{
          //         return '#fff';
          //     }
          // },
          // get_bar_barGap(){//获取柱间距
          //     let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
          //     if(_series &&  _series[this.index].hasOwnProperty("barGap")){
          //         return _series[this.index].barGap;
          //     }else{
          //         return '30%';
          //     }
          // },
          // get_bar_barCategoryGap(){//获取柱组间距
          //     let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
          //     if(_series &&  _series[this.index].hasOwnProperty("barCategoryGap")){
          //         return _series[this.index].barCategoryGap;
          //     }else{
          //         return '20%';
          //     }
          // },
          // get_bar_barBorderRadius(){//获取圆角
          //     let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
          //     if(_series && _series[this.index].hasOwnProperty("itemStyle") && _series[this.index].itemStyle.hasOwnProperty("barCategoryGap")){
          //         return _series[this.index].itemStyle.barCategoryGap;
          //     }else{
          //         return 0;
          //     }
          // },
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
          set_bar_label_attr(type,val){//修改柱形中的标签属性
              let data = {type:type,value:val,index:this.index};
              this.$store.dispatch('set_bar_label_attr', data);
          },
          set_bar_attr(type,val){//修改柱形的属性
              let data = {type:type,value:val,index:this.index};
              this.$store.dispatch('set_bar_attr',data);
          },
          set_bar_itemStyle_attr(type,val){//修改柱形itemStyle属性
              let data = {type:type,value:val,index:this.index};
              this.$store.dispatch('set_bar_itemStyle_attr',data);
          },
      },
      components:{
          DataSwiper,GradientOption
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
    }
</style>





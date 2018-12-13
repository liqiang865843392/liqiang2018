<template>
    <!--饼图option-->
    <div class="pie-option">
        <DataSwiper ref="data_swiper">
            <div slot="one">
                <div class="p-10">
                    <Checkbox v-model="pie_label_show"   style="">显示标签</Checkbox>
                    <Checkbox v-model="pie_labelLine_show" style="">显示引导线</Checkbox>
                    <Tooltip  :transfer=true content="编辑图例数据" placement="left-end" class="create-data" >
                        <icon name="data" scale="2" @click.native = "edit_data"></icon>
                    </Tooltip>
                </div>
                <div class="option-item">
                    <span class="title-label mr10">圆环半径</span>
                    <MySelect  class="mr10" tooltip="内半径" iconType="font-icon" @onchange="set_pie_radius('inside',$event)"  :value="get_pie_radius('inside')"  :option="this.$store.state.common.select_option.inside_radius"></MySelect>
                    <MySelect tooltip="外半径" iconType="line-width-icon" @onchange="set_pie_radius('outer',$event)" :value="get_pie_radius('outer')" :option="this.$store.state.common.select_option.outer_radius"></MySelect>
                </div>
                <div class="option-item">
                    <span class="title-label mr10">内容格式</span>
                    <TextInput  width="55" iconType="line-width-icon" indent="8" tooltip="内容格式"   placeholder="内容格式" @onchange="set_pie_label_attr('formatter',$event)" :value="get_pie_label_attr('formatter','{b}')"></TextInput>
                </div>
                <div class="option-item">
                    <span class="title-label mr10">文字设置</span>
                    <MySelect class="mr10" tooltip="字号" iconType="line-width-icon" @onchange="set_pie_label_attr('fontSize',$event)"  :value="get_pie_label_attr('fontSize',12)" :option="this.$store.state.common.select_option.font_size"></MySelect>
                    <IconRadio  icon="md-color-wand" @onchange="set_pie_label_attr('fontWeight',$event)"  :value="get_pie_label_fontWeight" tooltip="加粗" ></IconRadio>
                    <!--<ChooseColor tooltip="字体色" iconType="font-icon" @onchange="" value="#fff"></ChooseColor>-->
                </div>
                <AddItemOption></AddItemOption>
            </div>
            <div slot="two">
                <div style="margin-left: -18px;margin-right:-7px;margin-top: -8px;" >
                    <Tooltip  :transfer=true content="返回" placement="left" class="go-back" >
                        <Icon type="ios-arrow-forward"  size="20" @click="go_back"/>
                    </Tooltip>
                    <TableData  :head_data = head_data   @save="edit_series_data"  :table_data = get_series_data></TableData>
                </div>
            </div>
        </DataSwiper>

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
          get_series_data(){//获取图形数据传入数据显示组件
              let series_data = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series[this.index].data;
              console.log('series_data',series_data);
              let arr =[];
              series_data && series_data.length>0 && series_data.forEach((item,index)=>{
                 arr.push({name:item.name,value:item.value})
              });
              return arr;
          },
          pie_label_show:{//标签显示
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
                  this.$store.dispatch('set_pie_label_attr', data);
              }
          },
          pie_labelLine_show:{//标签引导线显示
              get:function(){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series  && _series[this.index].hasOwnProperty("labelLine") && _series[this.index].labelLine.hasOwnProperty("show")){
                      return _series[this.index].labelLine.show;
                  }else{
                      return false;
                  }
              },
              set:function(value) {
                  let data = {type:'show',value:value,index:this.index};
                  this.$store.dispatch('set_pie_labelLine_attr', data);
              }
          },
          get_pie_label_attr(type,_default){//修改标签属性  type:属性名 _default:默认值
              return function(type,_default){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series && _series[this.index].hasOwnProperty("label") &&  _series[this.index].label.hasOwnProperty(type)){
                      return _series[this.index].label[type];
                  }else{//没有值 使用默认值
                      return _default;
                  }
              }
          },
          get_pie_radius(type){//获取半径属性
              return function(type){
                  let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
                  if(_series && _series[this.index].hasOwnProperty("radius")){
                      if(type == 'inside'){
                          return _series[this.index].radius[0];
                      }else if(type == 'outer'){
                          return _series[this.index].radius[1];
                      }
                  }else{//没有radius属性
                      if(type == 'inside'){
                          return 20;
                      }else if(type == 'outer'){
                          return '75%';
                      }
                  }
              }
          },
          get_pie_label_fontWeight(){//获取圆形图标签是否加粗
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
                head_data:['标题','值']
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
          set_pie_attr(type,val){//修改圆形图属性
              let data = {type:type,value:val,index:this.index};
              this.$store.dispatch('set_pie_attr',data);
          },
          set_pie_label_attr(type,val){//修改圆形label属性
              let data = {type:type,value:val,index:this.index};
              this.$store.dispatch('set_pie_label_attr', data);
          },
          set_pie_radius(type,val){//修改圆形图半径
              let data = {type:type,value:val,index:this.index};
              this.$store.dispatch('set_pie_radius',data);
          },
      },
      components:{
          AddItemOption,DataSwiper
      }
    }
</script>
<style  lang="scss">
</style>





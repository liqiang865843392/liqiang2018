<template>
    <!--图表配置组件中添加item组件-->
    <div>
        <div class="item-option">
            <div class="option-item" style="justify-content:space-between!important;margin-top:5px;">
                <span class="title-label" style="width:40px;color:rgba(45, 140, 240,.7) !important">图形组</span>
                <Tooltip  :transfer=true content="添加数据项" placement="top" class="" offset="">
                    <Icon type="ios-add-circle" size="20" class="add-item" @click="add_item"/>
                </Tooltip>
            </div>
            <div class="option-item item" style="" v-for="(item,index) in get_items">
                <span class="title-label" style="">数据:&nbsp;&nbsp;</span>
                <TextInput class=""  title=""   width="50" style="margin-right:3px;"  textIndent="5"   placeholder="" @onchange="set_item_name(index,$event)" :value="item.name"></TextInput>
                <span class="title-label" style="">值:&nbsp;&nbsp;</span>
                <TextInput class=""  title="" type='number'  width="50" style="margin-right:3px;" :step="1" textIndent="5"   placeholder="" @onchange="set_item_val(index,$event)" :value="item.value"></TextInput>
                <ChooseColor class="" tooltip="颜色" iconType="font-icon" @onchange="set_item_color(index,$event)" :value="item.itemStyle.color"></ChooseColor>
                <Tooltip  :transfer=true content="删除" placement="top" class="remove" offset="">
                    <Icon type="ios-close-circle" size="20" @click="remove_item(index)"/>
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
          get_items(){//获取items
              let _series =  this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.series;
              if(_series && _series[this.index].hasOwnProperty("data") && _series[this.index].data.length > 0){
                  return _series[this.index].data;
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
          set_once_color(val){//设置单色
              let data = {value:val,index:this.index};
              this.$store.dispatch('set_once_color',data);
          },
          add_item(){//添加item
              this.$store.dispatch('add_item', this.index);
          },
          set_item_name(item_index,val){//修改item name
              let data = {value:val,series_index:this.index,item_index:item_index};
              this.$store.dispatch('set_item_name', data);
          },
          set_item_val(item_index,val){//修改item val
              let data = {value:val,series_index:this.index,item_index:item_index};
              this.$store.dispatch('set_item_val', data);
          },
          set_item_color(item_index,val){//修改item color
              let data = {value:val,series_index:this.index,item_index:item_index};
              this.$store.dispatch('set_item_color', data);
          },
          remove_item(item_index){//删除item
              let data = {series_index:this.index,item_index:item_index};
              this.$store.dispatch('remove_item',data);
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
    .item-option{
        margin-top: 15px;
        border-radius: 5px;
        padding:0 10px;
        /*border: 1px solid rgb(45, 140, 240);*/
        background-color: rgba(81, 130, 228, 0.1);
        box-shadow: 0 0 0 1px rgba(81, 130, 227, 0.15), inset 0 0 0 1px rgba(81, 130, 228, 0.43);
        .add-item{//添加item
            /*margin-right:10px;*/
        }
        .add-item:hover{
            cursor: pointer;
            color:rgb(45, 140, 240);
        }
        .item{//item
            position: relative;
            justify-content: flex-start!important;
            padding: 0 0 10px;
            .remove{//删除item
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





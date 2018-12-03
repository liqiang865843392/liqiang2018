<template>
    <!--线段选择组件-->
    <div class="line-select">
      <i class="icon" :class="setClass"></i>
        <span class="cur-line" :class="get_line"></span>
        <Select  size="small" style="width:100px" v-model="get_value" @on-change="_onchange" placeholder="">
          <Option  v-for="(item,index) in get_option" :value="item.value" :key="index">
            <span class="line" :class="item.value"></span>
            <!--{{ item.label }}-->
        </Option>
      </Select>
    </div>
</template>
<script>
    export default {
      props: {
          value:{

          },
          iconType:{
              type:String,
          },
          text:{
              default:false
          },
          option:{
              // type:Array,
          },
          // isImg:{//菜单项是否为图片
          //     default:false
          // }
      },
      created(){
        // console.log(777,this.option);
      },
      computed:{
          get_value:{
              get:function(){
                  return  this.value;
              },
              set:function(){
                  // let color = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.legend.textStyle.color;
                  // return  color ? color : '#fff';
              }
          },
          setClass(){
              return  this.iconType;
          },
          get_option(){
              return this.option && this.option.length >0 ? this.option : [];
          },
          get_line(){//获取选择的线段class
              return this.current_value;
          }
      },
      data(){
            return {
                current_value:this.option[0].value,//当前选中值
            }
      },
      mounted(){

      },
      methods:{
          _onchange(val){
              this.$emit('onchange',val);
              this.current_value = val;
          }
      }
    }
</script>
<style scoped lang="scss">
  .line-select{
     position: relative;
    display: flex;
    align-items: center;
    .cur-line{//当前线段
        display: inline-block;
        width:40px;
        height:24px;
        position: absolute;
        left:28px;
    }
    .text{
        margin-right:5px;
        color: rgba(255,255,255,.5);
        font-weight: 700;
    }
    .icon{
      display: inline-block;
      width:16px;
      height:16px;
      margin-right:6px;
    }
    /*线段图片*/
    .line{
      display: inline-block;
      width: 100%;
      height: 12px;
      line-height: 24px;
      padding: 0 8px;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .solid{
      background: url('../../assets/images/line/line-style-solid.png') 0 center repeat-x;
    }
    .short-dash{
      background: url('../../assets/images/line/line-style-short-dash.png') 0 center repeat-x;
    }
    .dotted{
      background: url('../../assets/images/line/line-style-short-dot.png') 0 center repeat-x;
    }
    .dashed{
      background: url('../../assets/images/line/line-style-short-dash-dot.png') 0 center repeat-x;
    }
    .long-dash{
      background: url('../../assets/images/line/line-style-long-dash.png') 0 center repeat-x;
    }
    /*图标*/
    .line-icon{
      background: url('../../svg/svg-sprite3.svg') -558px -1027px no-repeat;
    }
    .line-width-icon{
      background: url('../../svg/svg-sprite3.svg') -574px -1027px no-repeat;
    }
    .font-icon{
      background: url('../../svg/svg-sprite3.svg') -1117px -416px no-repeat;
    }
  }
</style>





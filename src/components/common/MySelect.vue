<template>
    <div class="my-select">
      <span v-if="text" class="text">{{text}}</span>
        <Tooltip  v-else  :transfer=true :content="tooltip" placement="top" offset="-2">
            <i class="icon" :class="setClass" ></i>
        </Tooltip>
      <Select  size="small" v-model="get_value" @on-change="on_change">
        <Option v-for="(item,index) in get_option" :value="item.value" :key="index">
            {{ item.label }}
        </Option>
      </Select>
    </div>
</template>
<script>
    export default {
      props: {
          value:{

          },
          tooltip:{
              default:''
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
                  return  this.value ? this.value : this.option[0].value;
              },
              set:function(){
                  return  this.value ? this.value : this.option[0].value;
              }
          },
          setClass(){
              return  this.iconType;
          },
          get_option(){
              return this.option && this.option.length >0 ? this.option : [];
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
          on_change(val){
              this.$emit('onchange',val);
          }
      }
    }
</script>
<style scoped lang="scss">
  .my-select{
    display: flex;
    align-items: center;
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
    .line-style-solid{
      background: url('../../assets/images/line/line-style-solid.png') 0 center repeat-x;
    }
    .line-style-short-dash{
      background: url('../../assets/images/line/line-style-short-dash.png') 0 center repeat-x;
    }
    .line-style-short-dot{
      background: url('../../assets/images/line/line-style-short-dot.png') 0 center repeat-x;
    }
    .line-style-short-dash-dot{
      background: url('../../assets/images/line/line-style-short-dash-dot.png') 0 center repeat-x;
    }
    .line-style-long-dash{
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





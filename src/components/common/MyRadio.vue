<template>
    <div class="my-radio">
      <span v-if="text" class="text">{{text}}</span>
      <i v-else class="icon" :class="setClass"></i>
        <RadioGroup v-model="get_value" @on-change="_change">
            <Radio :label="item.value" v-for="(item,index) in get_option" :key="index">
                {{item.label}}
            </Radio>
        </RadioGroup>
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
                current_value:'',//当前选中值
            }
      },
      mounted(){

      },
      methods:{
          _change(val){
              this.$emit('legend_align',val);
          }
      }
    }
</script>
<style>
 .ivu-radio-inner{
     background-color:transparent!important;
     border: 1px solid #008eff;
 }
</style>
<style scoped lang="scss">
  .my-radio{
    display: flex;
    align-items: center;
    /*margin:12px 0;*/
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
  }
</style>





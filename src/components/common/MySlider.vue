<template>
    <div class="my-slider">
      <span v-if="text" class="text">{{text}}</span>
      <i v-else-if="iconType" class="icon" :class="setClass"></i>
      <Slider :tip-format="format" v-model="get_value" class="slider"  @on-change="on_change"></Slider>
    </div>
</template>
<script>
    export default {
      props: {
          value:{

          },
          iconType:{
              type:String,
              default:''
          },
          text:{
              default:false
          }
      },
      created(){
      },
      computed:{
          get_value:{
              get:function(){
                  return  this.value;
              },
              set:function(){
                  return  this.value;
              }
          },
          setClass(){
              return  this.iconType;
          }
      },
      data(){
            return {
            }
      },
      mounted(){

      },
      methods:{
          format(val){
              return  val + 'px';
          },
          on_change(val){
              this.$emit('distance',val);
          }
      }
    }
</script>
<style>
    .ivu-slider-wrap{
        background-color: #2167ad!important;
    }
</style>
<style scoped lang="scss">
  .my-slider{
      height:20px;
      /*margin:12px 0;*/
    display: flex;
    /*align-items: center;*/
    .text{
        margin-right:11px;
        color: rgba(255,255,255,.5);
        font-weight: 700;
    }
    .icon{
      display: inline-block;
      width:16px;
      height:16px;
      margin-right:6px;
    }
    .slider{
        width: 190px;
        float: right;
        margin-top: -10px;
    }
  }
</style>





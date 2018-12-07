<template>
        <div class="text-input">
                <label class="label-head" v-if="title">{{title}}</label>
                <Tooltip   v-if="iconType" :transfer=true :content="tooltip" placement="top" offset="-2">
                        <i class="icon" :class="setClass" ></i>
                </Tooltip>
                <InputNumber  v-if="type == 'number'" v-model="get_number_value"   :max=max  :min=min :step=step :disabled="disabled" :style="{textIndent:get_indent}"></InputNumber>
                <span v-if="auto">
                      <Checkbox   v-if="type == 'number'"  style="font-weight: normal!important;margin-left: 15px;" v-model="get_checkbox">自动</Checkbox>
                </span>
                <textarea v-if="type == 'textarea' "  v-model="get_value" :style="{width:get_width}"></textarea>
                <input  v-if="type == 'text' " :placeholder="placeholder"  maxlength="16" v-model="get_value" :style="{width:get_width,textIndent:get_indent}" @input = "_onchange"/>
        </div>
</template>
<script>
    export default {
      props: {
          value:{

          },
          width:{

          },
          indent:{

          },
          tooltip:{

          },
          auto:{ //数字选择需要自动复选框
              type:Boolean,
              default:false
          },
          step:{//数字框
              type:Number,
              default:1
          },
          min:{//数字框最小值
              type:Number,
              default:0
          },
          max:{//数字框最大值
              type:Number,
              default:999
          },
          type:{
              type:String,
              default:'text'
          },
          title:{
              type:String,
              default:''
          },
          iconType:{
              type:String,
          },
          placeholder:{
              type:String,
              default:''
          }
      },
      created(){

      },
      computed:{
          setClass(){
              return  this.iconType;
          },
          get_number_value:{
              get:function(){
                  return  !this.value ? 0 : this.value;
              },
              set:function(val){
                  this.$emit('onchange',val);
              }
          },
          get_value:{
              get:function(){
                  return  this.value == null ? '' : this.value;
              },
              set:function(){
                  // let color = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.legend.textStyle.color;
                  // return  color ? color : '#fff';
              }
          },
          get_width(){
              return  this.width ?  this.width + 'px' : '200px';
          },
          get_indent(){
              return  this.indent ?  this.indent + 'px' : '0';
          },
          get_checkbox:{
              get:function(){
                  return  this.value == null  ? true : false;
              },
              set:function(val){
                 this.disabled = val;
              }
          },
      },
      data(){
            return {
                disabled:this.value == null ? true : false
            }
      },
      mounted(){

      },
      methods:{
          _onchange(e){
              this.$emit('onchange',e.target.value);
          }
      }
    }
</script>
<style>
 .ivu-input-number{
     position: relative;
     width:52%!important;
     min-width:30px;
     height:24px!important;
     color: rgba(255,255,255,1);
     border: none!important;
     box-shadow: 0 -1px 0 0 rgba(81,130,228,.5) inset;
     background-color: transparent!important;
     outline: none!important;
     border-radius: 0 !important;
 }
 /*数字选择上下箭头*/
 .ivu-input-number-handler-wrap{
     width:19px!important;
     border-left:none!important;
     background:none!important;
 }
 .ivu-input-number-handler-down{
     border-top: 1px solid #3b4489 !important;
 }
 .ivu-input-number-handler{
     height:12px!important;
     background-color: #1b2852;
 }
 .ivu-input-number-input-wrap{
     height:24px!important;
 }
 .ivu-input-number-focused{
     /*box-shadow:none!important;*/
     box-shadow: 0 -2px 0 0 rgba(81,130,228,1) inset!important;
 }
 .ivu-input-number input{
     background-color: transparent!important;
     position: absolute;
     z-index: -1;
     top: 1px;
 }
 .ivu-input-number-input{
     height:24px!important;
     line-height: 24px!important;
 }

</style>
<style scoped lang="scss">
    .text-input{
        /*height:28px!important;*/
        /*margin-bottom:8px;*/
        .label-head{
            display: inline-block;
            width: 50px;
            height:24px;
            line-height: 24px;
            vertical-align: middle;
            font-weight: 700;
            text-align: left;
            color: rgba(255,255,255,.5);
        }
        textarea{
            height: 80px!important;
            padding:10px!important;
            color: rgba(255,255,255,1)!important;
            background: rgba(81,129,228,.06);
            box-shadow: inset 0 0 0 1px rgba(81,129,228,.6);
        }
        input{
            /*width:100%!important;*/
            height:24px;
            color: rgba(255,255,255,1);
            border: none;
            box-shadow: 0 -1px 0 0 rgba(81,130,228,.5) inset;
            background-color: transparent;
            outline: none;
        }
        input:focus{
            box-shadow: 0 -2px 0 0 rgba(81,130,228,1) inset;
        }
        .icon{
            display: inline-block;
            width:16px;
            height:16px;
            margin-right:6px;
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





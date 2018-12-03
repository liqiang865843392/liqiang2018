<template>
        <div class="color-choose">
            <ColorPicker v-model="get_value" recommend @on-change="_onchange"></ColorPicker>
            <Tooltip  :transfer=false  :content="tooltip"  placement="top" offset=-30>
                <span class="icon" :class="get_icon"></span>
            </Tooltip>
        </div>
</template>
<script>
    export default {
      props: {
          value:{
              // type:String
          },
          tooltip:{
              default:''
          },
          iconType:{
              type:String,
              default:'edit-icon'
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
                  // let color = this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option.legend.textStyle.color;
                  // return  color ? color : '#fff';
              }
          },
          get_icon(){
              return this.iconType ? this.iconType : ''
          }
      },
      data(){
            return {
                color4: '#000',
            }
      },
      mounted(){

      },
      methods:{
          _onchange(val){
              this.$emit('onchange',val)
              // console.log('val22',val);
          }
      }
    }
</script>
<style>
    /*颜色选择器*/
    .ivu-transfer-no-max-height{
        left:-135px!important;
    }
    .ivu-color-picker-picker-panel{
        width:180px!important;
    }
    .ivu-color-picker-confirm-color{
        width:90px!important;
    }
    .ivu-btn{
        margin-left:5px!important;
    }
    .ivu-color-picker-input{
        background-color: transparent!important;
        border: none!important;
    }
    .ivu-color-picker-focused{
        box-shadow:none!important;
    }
    .ivu-color-picker-color{
        position: relative;
        background-image: none!important;
    }
    .ivu-color-picker-color div{
        border-radius:0!important;
        height:3px!important;
        position: absolute;
        bottom:-5px;
    }
    .ivu-input-icon-normal+.ivu-input{
        /*padding-right: 28px!important;*/
    }
    .color-choose .ivu-tooltip-popper{
        top: -43px!important;
        left: -13px!important;
    }

</style>
<style scoped lang="scss">
    .color-choose {
        position: relative;
        .icon{
            position: absolute;
            display: inline-block;
            width: 16px;
            height: 16px;
            left: -49px;
            bottom: -2px;
            /*z-index: 99;*/
        }
        .edit-icon{
            background: url('../../svg/svg-sprite3.svg') -176px -1360px no-repeat;
        }
        .font-icon{
            background: url('../../svg/svg-sprite3.svg') -704px -1360px no-repeat;
        }
    }
</style>





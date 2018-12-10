<template>
    <div class="icon-radio" :class="{'selected':get_value}"  @click = "_clicked" >
        <Tooltip  :transfer=true :content="tooltip" placement="top" class="bold" >
            <Icon  :type="icon" size="22"/>
        </Tooltip>
    </div>
</template>
<script>
    export default {
      props: {
          icon:{

          },
          tooltip:{

          },
          value:{
              type:Boolean,
              default:false
          }
      },
      created(){

      },
      computed:{
          get_value(){
               return  this.value;
          },
      },
      data(){
            return {
            }
      },
      mounted(){

      },
      methods:{
          _clicked(){
              this.$emit('onchange',this.value ? 'bold' : 'normal');
          }
      },
      components:{
      }
    }
</script>
<style  lang="scss">
    .icon-radio{
        width:30px;
        height:30px;
        text-align: center;
        line-height: 30px;
        border-radius: 3px;
        /*box-shadow:  0 1px 2px 0 rgba(0, 0, 0, 0.3),inset 0 10px 24px 0 #202237;*/
        .icon{
            display: inline-block;
            width:16px;
            height:16px;
        }
    }
    .bold:hover{
        color:#2167ad;
    }
    .selected{
        /*background-color: #202237;*/
        color: #2167ad;
        box-shadow: inset 0 10px 24px 0 #202237;
    }
</style>





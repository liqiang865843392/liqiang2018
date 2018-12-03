<template>
    <!--弹窗组件-->
    <transition name="modal-fade">
        <div class="modal" v-if="$store.state.common.modal_show">
            <div class="modal-content" :style="{width:get_parent_width}">
                <Divider class="title">{{title ? title : '选择主题'}}</Divider>
                <!--<span class="title">选择主题</span>-->
                <Icon  class="icon" type="md-close" size="26" @click="close"/>
                <div class="content" :style="{height:get_height}">
                    <slot name="content">
                        <div class="item" :style="{backgroundImage:'url(' + item.img + ')'}" :class="{ 'active': $store.state.common.cur_template_no  === item.num }" v-for="(item,index) in $store.state.common.template_list" :key="index" @click="$store.dispatch('set_cur_template_num',item.num)"></div>
                    </slot>
                </div>
                <div class="footer" v-if="show_footer">
                    <div class="handle">
                        <Icon type="ios-loading" size=18 class="demo-spin-icon-load loading" v-show="loading_show"></Icon>
                        <span @click="cancel">取消</span>
                        <span @click="submit">确定</span>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    // const url = require("../assets/images/choose-1.png");
    export default {
      props: {
          show:{
            type:Boolean,
            default:false
          },
          show_footer:{
              type:Boolean,
              default:true
          },
          width:{

          },
          height:{

          },
          title:{
              type:String
          },
      },
      created(){

      },
      computed:{
          footer_show(){
              return this.show_footer;
          },
          get_height(){//获取传入的高度
              return this.height ? this.height + 'px' : '145px'
          },
          get_parent_width(){
              return this.width ? this.width + 'px' : '800px'
          }
      },
      data(){
            return {
                loading_show:false
            }
      },
      mounted(){

      },
      methods:{
          close(){//点击了关闭按钮
             this.$store.dispatch('cut_modal_show',false);
          },
          submit(){//点击了确认按钮
            this.$emit('submit');
            this.loading_show = true;
            setTimeout(()=>{
                this.loading_show = false;
            },1000)

          },
          cancel(){//点击了取消按钮
              this.$store.dispatch('cut_modal_show',false);
          }

      },
      components:{
      }
    }
</script>
<style>
    .ivu-divider-horizontal.ivu-divider-with-text-center:after,.ivu-divider-horizontal.ivu-divider-with-text-center:before{
        border-top:1px solid rgba(182, 182, 182, 0.1)!important;
    }
    .demo-spin-icon-load{
        -webkit-animation:ani-demo-spin 1s infinite linear;/*匀速 循环*/
        /*animation: ani-demo-spin 1s linear infinite;*/
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
</style>
<style  lang="scss">
    .modal{
        position:fixed;
        left:0;right:0;top:0;bottom:0;
        background-color:rgba(41,45,71,.9); ;
        z-index: 999;
        .modal-content{
            width:800px;
            height:300px;
            padding: 0 20px;
            position:absolute;
            left: 50%;
            top:50%;
            transform: translate(-50%,-50%);
            background-color: #191A2C;
            .title{
                width:500px;
                margin:30px auto;
                color:rgba(255, 255, 255, 0.7);
                font-weight: 700;
                font-size:16px;
            }
            .icon{
                position: absolute;
                right:15px;
                top:10px;
                cursor: pointer;
            }
            .icon:hover{
                color:rgba(255,255,255,.6);
            }
            .content{
                ::-webkit-scrollbar {display:none;}
                width:100%;
                height:155px;
                overflow: hidden;
                margin:0 auto;
                display: flex;
                justify-content: space-around;
                .item{
                    width:240px;
                    height:130px;
                    /*background:rgb(36, 39, 62);*/
                    cursor: pointer;
                    background-image: url("../../assets/images/choose-2@2x.png");
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .active{
                    background-color: rgba(81,130,228,.1);
                    box-shadow: 0 0 0 2px rgba(81,130,227,.15),inset  0 0 0 2px rgba(81,130,227,1);
                }
                .item:hover{
                    background-image: url("../../assets/images/choose-2@2x.png");
                    /*box-shadow: 0 0 0 2px rgba(81,130,227,.15), inset 0 0 0 2px #5182E4,inset 0 10px 24px 0 rgba(0,0,0,.1);*/
                    box-shadow: 0 2px 4px 0 rgba(0,0,0,.5), 0 10px 24px 0 rgba(0,0,0,.5),inset  0 0 0 2px rgba(81,130,227,1);
                }
            }
            .footer{
                height:50px;
                margin-top:15px;
                overflow: hidden;
                .handle{
                    float:right;
                    position: relative;
                    .loading{
                        position:absolute;
                        top: 7px;
                        right: 145px;
                    }
                    span{
                        display: inline-block;
                        width:60px;
                        height:32px;
                        color:rgb(81, 130, 228);
                        font-weight: 700;
                        font-size:14px;
                        line-height: 32px;
                        cursor: pointer;
                        margin:0 5px;
                        /*background-color: rgba(81, 130, 228,.2);*/
                    }
                    span:hover{
                        background-color: rgba(81, 130, 228,.2);
                    }
                    span:active{
                        background-color: rgba(81, 130, 228,.2);
                    }
                }

            }
        }
    }
</style>





<template>
    <div class="layout">
        <div class="swiper-container" id="swiper1" style="height:300px;background: #1b2852;color:#fff;">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    1111111111
                </div>
                <div class="swiper-slide">
                    222222222
                </div>
                <div class="swiper-slide">
                    3333333333333
                    <div class="swiper-container1" style="margin-top:50px;background-color: #191A2C;height:100px;">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                3-1
                            </div>
                            <div class="swiper-slide">
                                3-2
                            </div>
                            <div class="swiper-slide">
                                3-3
                            </div>
                        </div>
                        <div id="swiper-pagination1"></div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <Layout style="height:100%;">
            <Content :style="{ background: '#fff',height:contentHeight}">
                <div v-if="!this.$route.query.id" class="change_template"  @click="release">
                    <span class="change-mode" style="margin-right:10px;font-size:16px;" >
                        <Icon style="margin-top:-3px;margin-right:3px; animation:fade 3000ms infinite;" type="ios-paper-plane" size="26" color="rgba(244,233,37,.7)" v-if="!loading_show"/>
                        <Icon style="margin-top:-3px;margin-right:3px;"  type="ios-loading" size=18 class="demo-spin-icon-load loading" v-if="loading_show"></Icon>
                        <span style="display: inline-block;width:72px;">
                             <span>{{get_release_text}}</span>
                        </span>
                    </span>
                </div>
                <LayoutOne v-if="$store.state.common.template_no === 1">
                    <div class="slot" :slot="item.slot" v-for="(item,index) in this.$store.state.common.echarts_option" :key="index" >
                        <Echarts :options="item.echart_option"></Echarts>
                    </div>
                </LayoutOne>
                <LayoutTwo v-else-if="$store.state.common.template_no === 2">
                    <div class="slot" :slot="item.slot" v-for="(item,index) in this.$store.state.common.echarts_option" :key="index" >
                        <Echarts :options="item.echart_option"></Echarts>
                    </div>
                </LayoutTwo>
                <LayoutThree v-else-if="$store.state.common.template_no === 3">
                    <div class="slot" :slot="item.slot" v-for="(item,index) in this.$store.state.common.echarts_option" :key="index" >
                        <Echarts :options="item.echart_option"></Echarts>
                    </div>
                </LayoutThree>

            </Content>
            <!--<Footer class="layout-footer-center"> &copy; 北京易居未来科技有限公司</Footer>-->
        </Layout>
        <Modal title="发布成功" :show_footer=false  width="600" height="175" @submit="">
            <div slot="content">
                <p  class="title-class">成功创建分享链接</p>
                <TextInput title="" @onchange=""  width="500" :value="get_url" placeholder="" indent="10"></TextInput>
                <p  class="title-class">您也可以将分享嵌入到自己的网页中：</p>
                <TextInput title="" @onchange=""  width="500" :value="get_iframe" placeholder="" type="textarea"></TextInput>
            </div>
        </Modal>
    </div>
</template>
<script>
    import LayoutOne from '@/components/layout/layout-one';
    import LayoutTwo from '@/components/layout/layout-two';
    import LayoutThree from '@/components/layout/layout-three';
    import Echarts from '@/components/common/Echarts';

    import Swiper from 'swiper'

    export default {
      props: {
      },
      created(){
          console.log(99993,this.$route.query.id);
          let id =this.$route.query.id;
          if(id){

          }
      },
      computed:{
        get_release_text(){
            return this.loading_show ? '正在发布' : '成品发布';
        },
        get_url(){//获取发布的url
            return  window.location.href+'?id=lq865843392';
        },
        get_iframe(){
            return   `<iframe style="width: 100%; height: 100%" src="${window.location.href+'?id=lq865843392'}"></iframe>`;
        }
      },
      data(){
            return {
                icon_color_state:0,
                loading_show:false,
                contentHeight:'',//内容区域高度
            }
      },
      mounted(){
          this.contentHeight = '305px';
          setTimeout(()=>{
              var mySwiper = new Swiper('#swiper1', {
                  pagination: {
                      el: ".swiper-pagination",
                      clickable: true
                  }
              })
          },100)

          var mySwiper1 = new Swiper('.swiper-container1', {
              direction : 'vertical',
              pagination: {
                  el: "#swiper-pagination1",
                  clickable: true
              },
          })
      },
      methods:{
          release(){//发布
              this.loading_show = true;//显示加载中
              this.icon_color_state = 1;//切换图标显示颜色
              setTimeout(()=>{//模拟请求后端
                  console.log(333,this.$store.state.common.echarts_option);
                  let send_data = {
                      option: JSON.stringify(this.$store.state.common.echarts_option), //当前成品图表的option
                      template_no:this.$store.state.common.template_no //模板编号
                  };
                  // this.$post('',{option:'',template_no:''}).then((res)=>{
                  //
                  // })
                  this.$store.dispatch('cut_modal_show',true);
                  this.loading_show = false;
                  this.icon_color_state = 0;
              },1500)
          }
      },
      components:{
          LayoutOne,LayoutTwo,LayoutThree,Echarts
      }
    }
</script>
<style scoped lang="scss">
    @import '../assets/css/common.scss';
    .slot{
        height:90%;
        position:relative;
    }
    .title-class{
        text-align:left;margin-bottom: 10px;color:#5182e4;
    }
    .change_template{
        position:absolute;
        z-index: 999;
        top:20px;
        right:20px;
        color:rgba(255,255,255,.6);
        cursor: pointer;
    }
    .change_template:hover{
        color:rgba(255,255,255,1);
    }
    .layout{
        height:100%;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        .header{
            position: fixed;
            width: 100%;
        }
    }
    .menu{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .layout-logo{
            width: 100px;
            height: 30px;
            background: #5b6270;
            border-radius: 3px;
            float: left;
            position: relative;
            /*top: 15px;*/
            left: 20px;
        }
        .layout-nav{
            width: 420px;
            margin: 0 auto;
            margin-right: 20px;
            .menu-item{
                /*width:32px;*/
                /*height:32px;*/
                /*background-image: url("../assets/images/change.png");*/
                /*background-size:cover;*/
                float:right;
                cursor: pointer;
            }
            .menu-item:hover{
                color:rgba(255,255,255,.6);
            }
        }
    }
    .layout-footer-center{
        height:80px;
        line-height: 80px;
        text-align: center;
    }
</style>






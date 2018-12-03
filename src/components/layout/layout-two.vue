<template>
  <transition name="fade1">
    <div class="layout-two">
      <Row type="flex" align="middle" class="header">
        <Col span="24">
          <Poptip content="content" placement="right" trigger="hover">
            <span>{{$store.state.common.main_title[1]}}</span>
            <div  slot="content">
              <TextInput placeholder="请填写标题" indent="10"  :value="$store.state.common.main_title[1]" style="margin-bottom:0" @onchange="set_title"></TextInput>
            </div>
          </Poptip>
        </Col>
        <div class="date">
          <DateFormat v-if="this.$route.fullPath == '/preview'"></DateFormat>
          <span v-if="this.$route.fullPath == '/main'">2018-11-28 10:28:58</span>
        </div>
      </Row>
      <section class="content">
        <Row type="flex" justify="space-between" class="row-1">
          <Col>
            <div class="title">{{$store.state.common.all_title[1][0]}}</div>
            <div class="body">
              <slot name="one"></slot>
            </div>
          </Col>
          <Col>
            <span></span>
            <div class="title">{{$store.state.common.all_title[1][1]}}</div>
            <!--<div style="background-color: black;height:570px;">-->
            <div class="body">
              <slot name="two"></slot>
            </div>
          </Col>
        </Row>
        <Row  type="flex" justify="space-between" class="row-2">
          <Col>
            <span></span>
            <div class="title">{{$store.state.common.all_title[1][2]}}</div>
            <!--<div style="height:270px;background-color: black">-->
            <div class="body">
              <slot name="three"></slot>
            </div>
          </Col>
          <Col>
            <span></span>
            <div class="title">{{$store.state.common.all_title[1][3]}}</div>
            <!--<div style="height:270px;background-color: black">-->
            <div  class="body">
              <slot name="four"></slot>
            </div>
          </Col>
          <Col>
            <span></span>
            <div class="title">{{$store.state.common.all_title[1][4]}}</div>
            <!--<div style="height:270px;background-color: black">-->
            <div  class="body">
              <slot name="five"></slot>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  </transition>
</template>
<script>
    import Echarts from '@/components/common/Echarts'
    import EditView from '@/components/EditView'
    export default {
        data () {
            return {
                isCollapsed: false,
                value1: false,//抽屉显示  //后面用vuex控制
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.value1 = !this.value1;
                this.$refs.side1.toggleCollapse();
            },
            set_title(val){//修改标题
                this.$store.dispatch('set_main_title',{index:1,val:val});//参数为模板编号（表示修改哪个模板的标题）
            }
        },
        components:{
            EditView,Echarts
        }
    }
</script>
<style scoped lang="scss">
  .layout-two{
    height:100%;
    background-image: url('../../assets/images/laout-one/theme2-bg@2x.png');
    background-size: cover;
    .header{
      position:relative;
      height:60px;
      color:#fff;
      font-size:24px;
      background-image: url('../../assets/images/laout-one/theme2-1@2x.png');
      background-size: cover;
      .date{
        position:absolute;
        left:20px;
        color:#00B6FF;
        font-size:18px;
      }
    }
    .content{
      padding:20px 10px;
      height:90%;
      .title{
        height:30px;
        line-height: 30px;
        padding-left:15px;
        background-size: cover;
        text-align: left;
        color:#00B6FF;
        font-size:20px;
      }
      .row-1{
        height:55%;
        .ivu-col{
          height:calc(100% - 40px);
        }
        .body{
          height:100%;
        }
        .ivu-col:first-child{
          width:64%;
          .title{
            height:40px;
            line-height: 40px;
            padding-left:30px;
            background-image: url('../../assets/images/laout-one/theme2-2@2x.png');
            background-size: 100% 100%;
            text-align: left;
            color:#00B6FF;
            font-size:20px;
          }
          section{
            /*margin:15px 20px;*/
            /*height:520px;*/
            /*height:90%;*/
            /*border: 1px solid #FFFFFF;*/
          }
        }
        .ivu-col:last-child{
          width:34%;
          position: relative;
          background-image: url('../../assets/images/laout-one/theme2-3@2x.png');
          background-size: 100% 100%;
          span{
            position: absolute;
            display: inline-block;
            width:4px;
            height:30px;
            left:0;
            background:rgb(0,182,255);
          }

        }

      }
      .row-2{
        height:40%;
        margin-top:2%;
        padding:0 10px;
        .body{
          height:calc(100% - 30px);
        }
        .ivu-col{
          height:100%;
          /*height:300px;*/
          width:32%;
          position: relative;
          background-image: url('../../assets/images/laout-one/theme2-4@2x.png');
          background-size: 100% 100%;
          span{
            position: absolute;
            display: inline-block;
            width:4px;
            height:30px;
            left:0;
            background:rgb(0,182,255);
          }
        }
      }
    }
  }
</style>

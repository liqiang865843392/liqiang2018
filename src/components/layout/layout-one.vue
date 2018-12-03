<template>
  <transition name="fade1">
    <div class="layout-one">
      <Row type="flex" align="middle" class="header">
        <Col span="24">
          <Poptip content="content" placement="right" trigger="hover">
            <span>{{$store.state.common.main_title[0]}}</span>
            <div  slot="content">
              <TextInput placeholder="请填写标题" indent="10"  :value="$store.state.common.main_title[0]" style="margin-bottom:0" @onchange="set_title"></TextInput>
            </div>
          </Poptip>
        </Col>
        <div class="date">
          <DateFormat v-if="this.$route.path == '/preview'"></DateFormat>
          <span v-if="this.$route.path == '/main'">2018-11-28 10:28:58</span>
        </div>
      </Row>
      <section class="content">
        <Row type="flex" justify="space-between" class="row-1">
          <Col>
            <div class="title">{{$store.state.common.all_title[0][0]}}</div>
            <!--<div style="background-color: black;height:570px;">-->
            <div class="body">
              <slot name="one"></slot>
            </div>
          </Col>
          <Col>
            <div class="title">{{$store.state.common.all_title[0][1]}}</div>
            <div class="body">
              <slot name="two"></slot>
            </div>
          </Col>
          <Col>
            <div class="title">{{$store.state.common.all_title[0][2]}}</div>
            <!--<div style="background-color: black;height:570px;">-->
            <div class="body">
              <slot name="three"></slot>
            </div>
          </Col>
        </Row>
        <Row  type="flex" justify="space-between" class="row-2">
          <Col>
            <div class="title">{{$store.state.common.all_title[0][3]}}</div>
            <!--<div style="height:270px;background-color: black">-->
            <div class="body">
              <slot name="four"></slot>
            </div>
          </Col>
          <Col>
            <div class="title">{{$store.state.common.all_title[0][4]}}</div>
            <!--<div style="height:270px;background-color: black">-->
            <div  class="body">
              <slot name="five"></slot>
            </div>
          </Col>
          <Col>
            <div class="title">{{$store.state.common.all_title[0][5]}}</div>
            <!--<div style="height:270px;background-color: black">-->
            <div  class="body">
              <slot name="six"></slot>
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
                this.$store.dispatch('set_main_title',{index:0,val:val});//参数为模板编号（表示修改哪个模板的标题）
            }
        },
        components:{
            EditView,Echarts
        }
    }
</script>
<style scoped lang="scss">
  .layout-one{
    height:100%;
    background-image: url('../../assets/images/laout-two/theme1-bg@2x.png');
    /*background-size: cover;*/
    background-size: 100% 100%;
    .header{
      position:relative;
      height:60px;
      color:#fff;
      font-size:24px;
      background-image: url('../../assets/images/laout-two/head@2x.png');
      /*background-size: cover;*/
      background-size: 100% 100%;
      .date{
        position:absolute;
        left:20px;
        top:15px;
        text-align:left;
        color:#6AC859;
        font-size:18px;
      }
    }
    .content{
      padding:25px 10px 35px;
      height:calc(100% - 60px);
      .title{
        height:70px;
        line-height: 70px;
        text-align: center;
        color:#6AC859;
        font-size:18px;
      }
      .body{
        /*margin:15px 0;*/
        height:calc(100% - 70px);
      }
      .row-1{
        height:68%;
        .ivu-col{
          /*height:100%;*/
          background-size: 100% 100%;
        }
        .ivu-col:nth-child(1){
          width:23%;
          background-image: url('../../assets/images/laout-two/theme1-2@2x.png');

        }
        .ivu-col:nth-child(2){
          width:50%;
          position: relative;
          background-image: url('../../assets/images/laout-two/theme1-3@2x.png');
          background-size: 100% 100%;
        }
        .ivu-col:nth-child(3){
          width:23%;
          position: relative;
          background-image: url('../../assets/images/laout-two/theme1-2@2x.png');
          background-size: 100% 100%;
        }
      }
      .row-2{
        height:30%;
        margin-top:2%;
        .ivu-col{
          position: relative;
          background-size: 100% 100%;
        }
        .ivu-col:nth-child(1){
          width:23%;
          background-image: url('../../assets/images/laout-two/theme1-4@2x.png');
        }
        .ivu-col:nth-child(2){
          width:50%;
          background-image: url('../../assets/images/laout-two/theme1-5@2x.png');
        }
        .ivu-col:nth-child(3){
          width:23%;
          background-image: url('../../assets/images/laout-two/theme1-4@2x.png');
        }
      }
    }
  }
</style>

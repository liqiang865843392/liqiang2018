<template>
  <transition name="fade1">
     <div class="layout-three">
    <Row type="flex" align="middle" class="header">
      <div class="title">
        <Poptip content="content" placement="right" trigger="hover">
          <span>{{$store.state.common.main_title[2]}}</span>
          <div  slot="content">
            <TextInput placeholder="请填写标题" indent="10"  :value="$store.state.common.main_title[2]" style="margin-bottom:0" @onchange="set_title"></TextInput>
          </div>
        </Poptip>
      </div>
      <div class="date">
        <DateFormat v-if="this.$route.fullPath == '/preview'"></DateFormat>
        <span v-if="this.$route.fullPath == '/main'">2018-11-28 10:28:58</span>
      </div>
    </Row>
      <Row  :gutter="24" class="content">
        <Col span="13" class="left">
          <Col span="24" class="left-one">
            <div class="title">{{$store.state.common.all_title[2][0]}}</div>
            <div  class="body">
              <slot name="one"></slot>
            </div>
          </Col>
          <Col span="24" class="left-two">
            <div class="title">{{$store.state.common.all_title[2][1]}}</div>
            <div  class="body">
              <slot name="two"></slot>
            </div>
          </Col>
        </Col>
        <Col span="11" class="right">
          <Col span="24" class="right-top">
            <div class="title">{{$store.state.common.all_title[2][2]}}</div>
            <div class="body">
              <slot name="three"></slot>
            </div>
          </Col>
          <Col span="24" class="right-bottom">
            <Col span="13" class="right-bottom-one">
              <div class="title">{{$store.state.common.all_title[2][3]}}</div>
              <div class="body">
                <slot name="four"></slot>
              </div>
            </Col>
            <Col span="10" class="right-bottom-two">
              <div class="title">{{$store.state.common.all_title[2][4]}}</div>
              <div class="body">
                <slot name="five"></slot>
              </div>
            </Col>
          </Col>
        </Col>
      </Row>
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
                this.$store.dispatch('set_main_title',{index:2,val:val});//参数为模板编号（表示修改哪个模板的标题）
            }
        },
        components:{
            EditView,Echarts
        }
    }
</script>

<style scoped lang="scss">
  .layout-three{
    height:100%;
    padding:10px;
    background-image: url('../../assets/images/layout-three/theme3-bg@2x.png');
    background-size: cover;
    .header{
      position:relative;
      height:60px;
      color:#fff;
      font-size:24px;
      background-size: cover;
      margin-bottom: 10px;
      .title{
        margin: 0 auto;
        width:25%;
        height:49px;
        background-image: url('../../assets/images/layout-three/theme3-1@2x.png');
        background-size: 100% 100%;
        line-height:49px;
        font-size:20px;
      }
      .date{
        position:absolute;
        left:20px;
        color:#FF1313;
        font-size:18px;
      }
    }
    .content{
        height:100%;
        padding: 0 20px;
        .ivu-col{
          height:90%;
          background-size: 100% 100%;
          .title{
            margin: 0 auto;
            height:25px;
            line-height:25px;
            font-size:16px;
            color:#FF1313;
          }
          .body{
            height:calc(100% - 30px);
            /*padding:10px;*/
          }
        }
        .left{
          .left-one{
            height:25%;
            background-image: url('../../assets/images/layout-three/theme3-2@2x.png');
            margin-bottom:3%;
          }
          .left-two{
            .body{
              height:calc(100% - 60px);
            }
            .title{
              height:60px;
              line-height:60px;
            }
            height:71.4%;
            background-image: url('../../assets/images/layout-three/theme3-4@2x.png');
          }
        }
        .right{
          .right-top{
            height:50%;
            margin-bottom: 3%;
            background-image: url('../../assets/images/layout-three/theme3-3@2x.png');
          }
          .right-bottom{
            height:47%;
            .right-bottom-one{
              height:100%;
              margin-right:4%;
              background-image: url('../../assets/images/layout-three/theme3-5@2x.png');
            }
            .right-bottom-two{
              height:100%;
              background-image: url('../../assets/images/layout-three/theme3-6@2x.png');
            }
          }

        }
    }
  }
</style>

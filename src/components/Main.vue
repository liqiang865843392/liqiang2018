<template>
  <div class="layout">
    <Layout style="height:100%;">
      <!--<Header class="header">-->
        <!--<Menu mode="horizontal" theme="dark" active-name="1" class="menu">-->
          <!--<div class="layout-logo"></div>-->
          <!--<div class="layout-nav">-->
            <!--<div class="menu-item"  @click="show_modal">-->
              <!--<Icon type="ios-analytics" size="20" style="margin-top:-2px"/>-->
              <!--&lt;!&ndash;<Icon type="md-cube" size="20" style="margin-top:-2px"/>&ndash;&gt;-->
                <!--切换模板-->
            <!--</div>-->
          <!--</div>-->
        <!--</Menu>-->
      <!--</Header>-->
      <Content :style="{ background: '#fff',height:contentHeight}">
        <div class="change_template"  @click="show_modal">
          <Icon type="ios-analytics" size="20" style="margin-top:-2px"/>
          <!--<Icon type="md-cube" size="20" style="margin-top:-2px"/>-->
          切换模板
        </div>
          <LayoutOne v-if="$store.state.common.template_no === 1">
            <div class="slot" :slot="item.slot" v-for="(item,index) in this.$store.state.common.echarts_option" :key="index" >
              <Tool :cur_chart_index ="item.index"></Tool>
              <Echarts :options="item.echart_option"></Echarts>
            </div>
          </LayoutOne>
          <LayoutTwo v-else-if="$store.state.common.template_no === 2">
            <div class="slot" :slot="item.slot" v-for="(item,index) in this.$store.state.common.echarts_option" :key="index" >
              <Tool :cur_chart_index ="item.index"></Tool>
              <Echarts :options="item.echart_option"></Echarts>
            </div>
          </LayoutTwo>
          <LayoutThree v-else-if="$store.state.common.template_no === 3">
            <div class="slot" :slot="item.slot" v-for="(item,index) in this.$store.state.common.echarts_option" :key="index" >
              <Tool :cur_chart_index ="item.index"></Tool>
              <Echarts :options="item.echart_option"></Echarts>
            </div>
          </LayoutThree>
      </Content>
      <!--<Footer class="layout-footer-center"> &copy; 北京易居未来科技有限公司</Footer>-->
    </Layout>
    <Modal @submit="cut_template"></Modal>
  </div>
</template>
<script>
    import LayoutOne from '@/components/layout/layout-one';
    import LayoutTwo from '@/components/layout/layout-two';
    import LayoutThree from '@/components/layout/layout-three';
    import Echarts from '@/components/common/Echarts';
    import Tool from '@/components/common/Tool';//导入小工具按钮组件

    export default {
        created(){

        },
        data () {
            return {
                contentHeight:'',//内容区域高度
                // template_no:1,
                // isCollapsed: false,
                // echart_data:this.$store.state.common.echarts_option,//从vuex中获取
            }
        },
        mounted(){
            this.contentHeight = '305px';
            // console.log(666,);
        },
        methods:{
            show_modal(){//显示选择模板组件
                this.$store.dispatch('cut_modal_show',true);
            },
            cut_template(){//切换图表模板
                this.$store.dispatch('cut_template');
            },
        },
        components:{
            LayoutOne,LayoutTwo,LayoutThree,Echarts,Tool
        }
    }
</script>

<style scoped lang="scss">
  @import '../assets/css/common.scss';
  .slot{
    height:90%;
    position:relative;
    .tools{
      opacity: 0;
      transition: all .5s;
    }
  }
  .slot:hover .tools{ //移入控制工具组的显示
    opacity: 1;
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

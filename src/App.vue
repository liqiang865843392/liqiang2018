<template>
  <div id="app" :style="{height:screenHeight}">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Main from './components/Main'

export default {
  name: 'app',
  data () {
    return {
        screenHeight:'',//浏览器高度
    }
},
  mounted(){
      this.set_screen_height();
      window.onresize = () => {
          this.set_screen_height();
      }
  },
  methods:{
      set_screen_height(){//设置屏幕高度
          let height =  window.innerHeight;
          if(height) this.screenHeight = window.innerHeight + 'px';
      }
  },
  components: {
      Main
  }
}
</script>
<style>

</style>
<style>
  @import './assets/css/common.scss';
*{
    margin:0;
    padding:0;
  }
 .m-12{
   margin:12px 0;
 }
 .p10{
   padding:10px;
 }
 .p-10{
   padding:10px 0;
 }
 .p-15{
   padding: 15px 0;
 }
 .mt10{
   margin-bottom:10px;
 }
 .mr10{
   margin-right:10px;
 }
  /*修改swiper样式*/
  .swiper-container{
     overflow: inherit!important;
 }
  /*swiper禁止滑动class去掉手型*/
  .swiper-no-swiping{
    cursor:default!important;
  }
  /*图标icon*/
  .ivu-input-icon{
    z-index:0!important;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*height:800px;*/
  background-color: #191A2C;
  /*margin-top: 60px;*/
}
/*切换模板动画*/
.fade1-enter-active, .fade1-leave-active {
  transition: opacity 1.5s;
}
.fade1-enter, .fade1-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.5s;
}
.modal-fade-enter, .modal-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

::-webkit-scrollbar {/*滚动条*/
    width:16px;
  }
::-webkit-scrollbar-track {/*滚动槽*/
  background: rgb(31,31,47);
}
::-webkit-scrollbar-thumb { /*滚动条滑块*/
  background: rgb(44,44,60);
}

.ivu-checkbox-wrapper{
  color:rgba(255,255,255,.5)!important;
  font-weight: 700!important;
}
.ivu-checkbox-inner{
  border: 1px solid #5182E4!important;
  background-color: rgba(81,129,228,.1)!important;
  border-radius:0!important;
  margin-right:5px!important;
}
/*下拉菜单*/
.ivu-select{
  width:60px!important;
  border-bottom: 1px solid rgba(81,130,228,.5)!important;
}
.ivu-select-selection{
  background-color: transparent!important;
  border:none!important;
  box-shadow:none!important;
}
.ivu-select-dropdown{
  min-width:80px!important;
  color:#fff!important;
}
.ivu-select-dropdown{
  background-color: #2E324D!important;
  box-shadow: 0 0 6px 0 rgba(0,0,0,.1), 0 12px 24px 0 rgba(0,0,0,.3)!important;
}
.ivu-select-item{
 display: flex;
 color:#fff!important;
}
.ivu-select-item:hover{
  background-color: rgba(81,130,228,.1)!important;
}
.ivu-select-item-focus{
    background-color: rgba(81,130,228,.1)!important;
  }
.ivu-select-selected-value{
  color:#fff!important;
}
.ivu-select-placeholder{
  padding-left:0!important;
}
.ivu-select-arrow{
  right:0!important;
}
/*提示框title*/
  .ivu-tooltip-inner{
    background-color: rgba(43, 45, 70,.9)!important;
  }
  .ivu-tooltip-popper[x-placement^=top] .ivu-tooltip-arrow{
    border-top-color: rgba(43, 45, 70,.9)!important;
  }
  .ivu-tooltip-popper[x-placement^=left] .ivu-tooltip-arrow{
    border-left-color: rgba(43, 45, 70,.9)!important;
  }
  .ivu-tooltip-arrow{
  }
  textarea{
    background: rgba(81,129,228,.06)!important;
    box-shadow: inset 0 0 0 1px rgba(81,129,228,.6)!important;
    border:none!important;
  }
  textarea.ivu-input{
    height:100%!important;
    padding:10px!important;
    max-width: 95%!important;
  }
  textarea.ivu-input::-webkit-input-placeholder{
    color: rgba(87, 97, 123, 0.5);
  }
  .ivu-carousel-item{
     position: relative!important;
  }
  /*表格样式*/
  .ivu-table{
    background-color: #282c46!important;
  }
  table{
    width: 100%!important;
  }
  .ivu-table:after{
    background-color:transparent!important;
  }
  .ivu-table-wrapper{
    border:none!important;
  }
  .ivu-table td {
    background-color: #282c46!important;
    border-bottom:1px solid #5182e4!important;
  }
  .ivu-table th{
    text-indent: 3px;
    background-color: #282c46!important;
    border-bottom:1px solid #5182e4!important;
  }
  /*提示框样式*/
  .ivu-poptip-body{
    padding: 2px 6px!important;
  }
  .ivu-poptip-inner{
    background-color: #191A2C!important;
  }
  .ivu-poptip-popper[x-placement^=right] .ivu-poptip-arrow:after{
    border-right-color:#191A2C!important;
    left:0!important;
  }
  /*按钮样式*/
  .ivu-btn{
    border:none!important;
  }
  .ivu-btn-small{
    padding: 0 5px!important;
  }
  /*message样式*/
  .ivu-message-notice-content{
    background: #191a2c!important;
    color:#e82929!important;
  }
</style>


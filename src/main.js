import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store1'
import './plugins/iview.js'
import './plugins/custom_module.js'
import './directive'//引入指令文件
import Icon from 'vue-svg-icon/Icon.vue' //使用svg图标用到的插件
import 'swiper/dist/css/swiper.min.css'
Vue.component('icon',Icon); //注册
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
    if(to.path === '/main'){
        store.dispatch('set_save_thumb_state');
    }
    next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
import common_store from './common_store.js';//引入某个store对象
import title_store from './title_store.js';//引入某个store对象
import legend_store from './legend_store.js';//引入某个store对象
import xAxis_store from './xAxis_store.js';//引入某个store对象
import yAxis_store from './yAxis_store.js';//引入某个store对象
import developer_store from './developer_store.js';//引入某个store对象

export default new vuex.Store({
  modules: {
      common: common_store,
      legend: legend_store,
      xAxis:  xAxis_store,
      yAxis:  yAxis_store,
      title:  title_store,
      developer:  developer_store,
  }
})

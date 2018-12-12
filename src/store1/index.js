import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
import common_store from './common_store.js';//引入公用store
import title_store from './title_store.js';//引入标题store
import legend_store from './legend_store.js';//引入图例store
import xAxis_store from './xAxis_store.js';//引入x轴store
import yAxis_store from './yAxis_store.js';//引入y轴store
import developer_store from './developer_store.js';//引入开发者模式(编辑器)store

import bar_store from './series/bar_store.js';//引入柱状图store
import line_store from './series/line_store.js';//引入柱状图store
import pie_store from './series/pie_store.js';//引入饼状图store

export default new vuex.Store({
  modules: {
      common: common_store,
      legend: legend_store,
      xAxis:  xAxis_store,
      yAxis:  yAxis_store,
      title:  title_store,
      developer:  developer_store,
      bar_store:  bar_store,
      line_store:  line_store,
      pie_store:  pie_store,
  }
})

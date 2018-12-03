import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {bar_option,area_option,bar_option_1,pie_option,line_option,scatter_option,radar_option,gauge_option,funnel_option,map_option} from '@/util/echarts_option.js';
export default new Vuex.Store({
  state: {
      all_echarts:{
          bar_option:bar_option,
          area_option:area_option,
          bar_option_1:bar_option_1,
          pie_option:pie_option,
          line_option:line_option,
          scatter_option:scatter_option,
          radar_option:radar_option,
          gauge_option:gauge_option,
          funnel_option:funnel_option,
          map_option:map_option,
      },
      //全局的 当前的eachrts数据配置项
      echarts_option:[
          {
              slot:'one', //插槽位置
              echart_option: bar_option,  //图表配置
              index:1
          },
          {
              slot:'two',
              echart_option: pie_option,
              index:2
          },
          {
              slot:'three',
              echart_option: bar_option,
              index:3
          },
          {
              slot:'four',
              echart_option: bar_option,
              index:4
          },
          {
              slot:'five',
              echart_option: bar_option,
              index:5
          },
      ],
      // //当前正在编辑的item图表配置
      // cur_option: echarts_option[cur_chart_index].echart_option,
      //当前正在编辑的模板编号(默认为第1个模板)
      template_no:0,
      //当前正在编辑的图表index
      cur_chart_index:0,
      //图表是否需要init(用于事件控制图表的自适应)
      init_status:false,
      //当前模板所有图表缩略图数据
      thumbs:[],
      //保证只有第一次进入首页才会执行save_thumb
      save_thumb_state:0,
      //配置项的属性
      options:{
          legend_show:true
      }
  },
  mutations: {
      //切换模板
      cut_template(state,num){//num:代表当前模板编号
          switch (num){
              case 1 :
                  state.echarts_option = [
                      {
                          slot:'one', //插槽位置
                          echart_option: gauge_option  //图表配置
                      },
                      {
                          slot:'two',
                          echart_option: area_option
                      },
                      {
                          slot:'three',
                          echart_option: bar_option_1
                      },
                      {
                          slot:'four',
                          echart_option: bar_option
                      },
                      {
                          slot:'five',
                          echart_option: bar_option_1
                      },
                ];
                break;
              case 2 :
                  state.echarts_option = [
                      {
                          slot:'one', //插槽位置
                          echart_option: line_option  //图表配置
                      },
                      {
                          slot:'two',
                          echart_option: line_option
                      },
                      {
                          slot:'three',
                          echart_option: bar_option
                      },
                      {
                          slot:'four',
                          echart_option: area_option
                      },
                      {
                          slot:'five',
                          echart_option: bar_option
                      },
                  ];
                  break;
              case 3 :
                  state.echarts_option = [
                      {
                          slot:'one', //插槽位置
                          echart_option: scatter_option  //图表配置
                      },
                      {
                          slot:'two',
                          echart_option: radar_option
                      },
                      {
                          slot:'three',
                          echart_option: area_option
                      },
                      {
                          slot:'four',
                          echart_option: bar_option
                      },
                      {
                          slot:'five',
                          echart_option: area_option
                      },
                  ];
                  break;
          }
          state.template_no = num;//设置当前模板编号
      },
      //编辑图表
      edit_chart(state,cur_chart_index){//传入当前图表的index
          console.log(6669,cur_chart_index );
          // state.echarts_option[cur_chart_index].echart_option.series[0].areaStyle.normal.color='red'
          state.cur_chart_index = cur_chart_index;
          // state.echarts_option[cur_chart_index].echart_option.series[0].areaStyle.normal.color='red'
      },
      //echart 是否需要 init
      chart_init(state,status){
          state.init_status = status;
          console.log(77889,status)
      },
      //切换图表类型后变换视图
      change_chart(state,option_name){
            // console.log('option_name',option_name);
            // console.log('111',state.all_echarts[option_name]);
            state.echarts_option[state.cur_chart_index].echart_option = state.all_echarts[option_name];
      },
      //将当前生成的echarts图片存入store
      save_thumb(state,imgData){
          if(state.save_thumb_state === 1){//只有第一次进入首页才会push图片
              state.thumbs.push(imgData);
          }
          console.log('首页');
      },
      //修改缩略图
      update_thumb(state,imgData){
          console.log('编辑页面');
          // console.log('编辑页面', imgData);
          console.log('state.cur_chart_index',state.cur_chart_index);
          state.thumbs.forEach((item,index)=>{
              if(index == state.cur_chart_index){//修改当前正在修改的图表的缩略图
                  state.thumbs.splice(index,1,imgData);
                  // console.log('thumbs', state.thumbs);
                  // state.thumbs[index] = imgData;
              }
          });
      },
      //修改状态  第一次进入首页save_thumb_state+1,save_thumb_state=1的时候才会调用save图片，目的是让只有第一次首页才会存图片
      set_save_thumb_state(state){
          ++state.save_thumb_state;
      },
      //点击了缩略图,切换当前图表
      change_current_chart(state,index){
        state.cur_chart_index = index;
      },
      //-------------------以下配置项为图表配置-------------------------------------
      legend_show(state,val){ //图例显示
         let option = state.echarts_option[state.cur_chart_index].echart_option;
          option.legend.show = val;
          state.echarts_option[state.cur_chart_index].echart_option = Object.assign({},option)
      },
      legend_align(state,val){ //图例对齐方式
          let option = state.echarts_option[state.cur_chart_index].echart_option;
          option.legend.orient = val;
          if(val == 'horizontal'){//横向
              option.legend.top = '2%';
              option.legend.left = 'center';
              option.legend.right = 'auto';
          }else{//纵向
              option.legend.top = 'center';
              option.legend.left = 'auto';
              option.legend.right = '0';
          }
          // state.echarts_option[state.cur_chart_index].echart_option = Object.assign({},option)
      },

      legend_fontFamily(state,val){//图例的字体配置
            console.log(2235,val);
      }
  },
  actions: {
      cut_template(context){//更新全局echarts数据
          context.commit('cut_template');
      },
      distance(context,val){//图例边界距离
          let option = context.state.echarts_option[context.state.cur_chart_index].echart_option;
          if(option.legend.orient == 'horizontal'){//如果当前是横向的就向下移动
              option.legend.top = val;
          }else{//纵向，向左边移动
              option.legend.right = val;
          }
          context.state.echarts_option[context.state.cur_chart_index].echart_option = Object.assign({},option)
      },
  }
})

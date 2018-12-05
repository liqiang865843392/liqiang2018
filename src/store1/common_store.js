import {bar_option,area_option,bar_option_1,pie_option,line_option,scatter_option,radar_option,gauge_option,funnel_option,map_option} from '@/util/echarts_option.js';
import {line_type,font_size,fontType,text_direction,algin_type,line_width,inside_radius,outer_radius,spacing,location,symbolType,funnel_algin,funnel_data_sort,funnel_label_location,gauge_angle} from '@/util/select_data.js';//导入选择菜单数据
export default{
  state:{
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
      select_option:{//这里放入全部下拉框数据
          line_type : line_type,//线条类型
          line_width:line_width,//线条粗细
          font_size : font_size,//字体大小
          fontType:fontType,//字体数据
          text_direction:text_direction,//文字对齐方式
          algin_type:algin_type,//图例对齐方式
          inside_radius:inside_radius,//饼状图内半径
          outer_radius:outer_radius,//饼状图外半径
          spacing:spacing,//间距数据 10%-100%
          location:location,//数据位置
          symbolType:symbolType,//标记图形类型
          funnel_algin:funnel_algin,//漏斗图中的对齐方式
          funnel_data_sort:funnel_data_sort,//漏斗图中的数据排序
          funnel_label_location:funnel_label_location,//漏斗图中的标签位置
          gauge_angle:gauge_angle//仪表盘中的角度
      },
      //所有模板的主标题数据
      main_title:['模板1主标题','模板2主标题','模板3主标题'],
      //所有模板的子标题数据
      all_title:[
          ["模块标题1","主模块标题","模块标题3","模块标题4","模块标题5","模块标题6"],//模板1的标题组
          ["主模块标题","模块标题2","模块标题3","模块标题4","模块标题5"],//模板2的标题组
          ["模块标题1","主模块标题","模块标题3","模块标题4","模块标题5"],//模板3的标题组
      ],
      //全局的 当前的eachrts数据配置项
      echarts_option:[
          {
              slot:'one', //插槽位置
              echart_option: scatter_option,  //图表配置
              index:0
          },
          {
              slot:'two',
              echart_option: map_option,
              index:1
          },
          {
              slot:'three',
              echart_option: funnel_option,
              index:2
          },
          {
              slot:'four',
              echart_option: line_option,
              index:3
          },
          {
              slot:'five',
              echart_option: bar_option,
              index:4
          },
          {
              slot:'six',
              echart_option: pie_option,
              index:5
          },
      ],
      // //当前正在编辑的item图表配置
      // cur_option: echarts_option[cur_chart_index].echart_option,
      //模板列表
      template_list:[
          {
              num:1, //模板编号
              name:'', //模板名称
              img: require("../assets/images/choose-1.png") //模板图片路径
          },
          {
              num:2,
              name:'',
              img:require("../assets/images/choose-2@2x.png")
          },
          {
              num:3,
              name:'',
              img:require("../assets/images/choose-3@2x.png")
          },
      ],
      //选择模板时的当前模板（设置此属性是为了点击确认按钮后才切换模板）
      cur_template_no:1,
      //当前正在编辑的模板编号(默认为第1个模板)
      template_no:1,
      //当前主题色
      theme_color:'#6AC859',
      //全局模态框显示状态
      modal_show:false,
      //当前正在编辑的图表index
      cur_chart_index:0,
      //当前正在编辑的图表类型
      cur_chart_type:'',
      //图表是否需要init(用于事件控制图表的自适应)
      init_status:false,
      //当前模板所有图表缩略图数据
      thumbs:[],
      // 用于只有在切换图表的时候才clear图表重绘（配置图表的时候不进行重绘）
      clear_status:false
  },
  getters:{

  },
  mutations:{//官方不推荐异步操作放在这里
      //设置最终选择的模板编号
      set_template_num(state){
         state.template_no = state.cur_template_no;
         state.thumbs = [];//重新选择了切换模板后清空之前的缩略图
         console.log('清空了数组');
      },
      //切换模板
      cut_template(state){
          switch (state.template_no){
              case 1 :
                  state.theme_color = '#6AC859';
                  state.echarts_option = [
                      {
                          slot:'one', //插槽位置
                          echart_option: scatter_option,  //图表配置
                          index:0
                      },
                      {
                          slot:'two',
                          echart_option: map_option,
                          index:1,
                      },
                      {
                          slot:'three',
                          echart_option: funnel_option,
                          index:2
                      },
                      {
                          slot:'four',
                          echart_option: line_option,
                          index:3
                      },
                      {
                          slot:'five',
                          echart_option: bar_option,
                          index:4
                      },
                      {
                          slot:'six',
                          echart_option: pie_option,
                          index:5
                      }
                  ];
                  break;
              case 2 :
                  state.theme_color = '#00B6FF';//设置模板2的主题色
                  let new_options2 = JSON.parse(JSON.stringify(state.all_echarts));
                  new_options2.map_option.geo.itemStyle.normal.areaColor = 'rgba(0, 150, 255, .3)';
                  new_options2.map_option.geo.itemStyle.emphasis.areaColor = 'rgba(0, 150, 255, .6)';
                  new_options2.map_option.series[0].itemStyle.normal.color = 'rgba(76,221,255,.5)';
                  new_options2.map_option.series[1].itemStyle.normal.color = 'rgba(76,150,255,1)';
                  state.echarts_option = [
                      {
                          slot:'one', //插槽位置
                          echart_option:  new_options2.map_option,  //图表配置
                          index:0
                      },
                      {
                          slot:'two',
                          echart_option: line_option,
                          index:1
                      },
                      {
                          slot:'three',
                          echart_option: radar_option,
                          index:2
                      },
                      {
                          slot:'four',
                          echart_option: area_option,
                          index:3
                      },
                      {
                          slot:'five',
                          echart_option: gauge_option,
                          index:4
                      },
                  ];
                  break;
              case 3 :
                  state.theme_color = '#FF1313';
                  let new_options3 = JSON.parse(JSON.stringify(state.all_echarts));

                  //配置模板3的散点图样式
                  new_options3.scatter_option.series[0].itemStyle.color='rgba(255,0,0,.9)';
                  new_options3.scatter_option.series[1].itemStyle.color='rgba(255,0,0,.5)';
                  new_options3.scatter_option.series[0].symbolSize = function (scatter_data) {
                      return Math.sqrt(scatter_data[2]) / 500;
                  };
                  new_options3.scatter_option.series[1].symbolSize = function (scatter_data) {
                      return Math.sqrt(scatter_data[2]) / 500;
                  };
                  //配置模板3的地图样式
                  new_options3.map_option.geo.itemStyle.normal.areaColor = 'rgba(255,0,0,.3)';
                  new_options3.map_option.geo.itemStyle.emphasis.areaColor = 'rgba(255,0,0,.6)';
                  new_options3.map_option.series[0].itemStyle.normal.color = 'rgba(255,0,0,.5)';
                  new_options3.map_option.series[1].itemStyle.normal.color = 'rgba(245,192,1,.6)';
                  //配置模板3的柱状图样式
                  // console.log(666,bar_option3.series[0]);
                  new_options3.bar_option.series[0].itemStyle.normal.color.colorStops[0].color = '#FF2A2AFF';
                  new_options3.bar_option.series[0].itemStyle.normal.color.colorStops[1].color = '#FF1313FF';
                  new_options3.bar_option.series[1].itemStyle.normal.color.colorStops[0].color = '#FFC600FF';
                  new_options3.bar_option.series[1].itemStyle.normal.color.colorStops[1].color = '#FF9400FF';
                  new_options3.bar_option.series[2].itemStyle.normal.color.colorStops[0].color = '#C500B4FF';
                  new_options3.bar_option.series[2].itemStyle.normal.color.colorStops[1].color = '#94007DFF';
                  //配置模板3的面积图样式
                  delete new_options3.area_option.series[1];
                  new_options3.area_option.series[0].lineStyle.width = 5;
                  let area_option3_color = {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 1,
                          y2: 0,
                          colorStops: [{
                              offset: 0,
                              color: 'rgba(255, 247, 19, 1)' // 0% 处的颜色
                          }, {
                              offset: 1,
                              color: 'rgba(255, 19, 19, 1)' // 100% 处的颜色
                          }],
                          globalCoord: false // 缺省为 false
                      };
                  new_options3.area_option.series[0].lineStyle.color =  area_option3_color;
                  new_options3.area_option.series[0].areaStyle.normal.color =  area_option3_color;
                  new_options3.area_option.series[0].itemStyle.normal.color =  area_option3_color;
                  //配置模板3雷达图样式
                  new_options3.radar_option.series[0].areaStyle.normal.color = 'rgba(255, 247, 19, 1)';
                  new_options3.radar_option.series[0].lineStyle.normal.color = 'rgba(255, 247, 19, .5)';
                  new_options3.radar_option.series[0].symbolSize = 0;
                  new_options3.radar_option.radar[0].splitLine.lineStyle.color = 'rgba(255, 19, 19, 1)';
                  new_options3.radar_option.radar[0].splitArea.areaStyle.color = 'rgba(255, 19, 19, 1)';
                  state.echarts_option = [
                      {
                          slot:'one', //插槽位置
                          echart_option: new_options3.radar_option,  //图表配置
                          index:0
                      },
                      {
                          slot:'two',
                          echart_option: new_options3.map_option,
                          index:1
                      },
                      {
                          slot:'three',
                          echart_option: new_options3.scatter_option,
                          index:2
                      },
                      {
                          slot:'four',
                          echart_option: new_options3.bar_option,
                          index:3
                      },
                      {
                          slot:'five',
                          echart_option: new_options3.radar_option,
                          index:4
                      },
                  ];
                  break;
          }
          setTimeout(()=>{
              state.modal_show = false;
          },1000)
      },
  },
  actions:{
      //修改模态框显示状态
      cut_modal_show(context,state){
          context.state.modal_show = state;
      },
      //设置当前模板编号 这个函数主要是为了选择后加边框的样式
      set_cur_template_num(context,num){
          context.state.cur_template_no = num;
      },
      cut_template(context){//切换模板
          context.commit('set_template_num');
          context.commit('cut_template');
      },
      set_main_title(context,data){//修改标题 接收标题index 和 标题text
          context.state.main_title.splice(data.index,1,data.val);
          // console.log(22, context.state.main_title);

      },
      //点击了编辑图表
      edit_chart(context,cur_chart_data){//传入当前图表的数据
          console.log(6669,cur_chart_data);
          context.state.cur_chart_index = cur_chart_data.chart_index; //设置当前图表的index
          context.dispatch('set_cur_chart_type',cur_chart_data.type);//设置当前图表的类型
      },
      //设置当前图表类型（用于根据图表类型动态显示配置项）
      set_cur_chart_type(context,type){
          context.state.cur_chart_type = type; //设置当前图表的类型
      },
      //echart 是否需要 init
      chart_init(context,status){
          context.state.init_status = status;
          console.log(77889,status)
      },
      //切换图表类型后变换视图
      change_chart(context,option_name){
          // console.log('option_name',option_name);
          // console.log('clear_status',context.state.clear_status);
          context.state.clear_status = true;
          context.state.echarts_option[context.state.cur_chart_index].echart_option = context.state.all_echarts[option_name];
          setTimeout(()=>{
              context.state.clear_status = false;
          },100)
      },
      //将当前生成的echarts图片存入store
      save_thumb(context,imgData){
              context.state.thumbs.push(imgData);
      },
      //修改缩略图
      update_thumb(context,imgData){
          console.log('编辑页面');
          // console.log('编辑页面', imgData);
          // console.log('state.cur_chart_index',state.cur_chart_index);
          context.state.thumbs.forEach((item,index)=>{
              if(index == context.state.cur_chart_index){//修改当前正在修改的图表的缩略图
                  context.state.thumbs.splice(index,1,imgData);
                  // console.log('thumbs', context.state.thumbs);
                  // state.thumbs[index] = imgData;
              }
          });
      },
      //进入了首页 也需要清空缩略图
      set_save_thumb_state(context){
          console.log('清空数组');
          context.state.thumbs = [];
      },
      //点击了缩略图,切换当前图表
      change_current_chart(context,index){
          context.state.clear_status = true;//点击了缩略图需要clear图表
          context.state.cur_chart_index = index;
          setTimeout(()=>{
              context.state.clear_status = false;
          },100)
      },
  }
}

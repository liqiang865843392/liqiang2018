export default{
  state:{
      options:{
          // option:this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option,
          legend_show:true
      }
  },
  getters:{

  },
  mutations:{

  },
  actions:{

      legend_show(context,val){ //图例显示
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.legend.show = val;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
      },

      legend_align(context,val){ //图例对齐方式
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
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
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
      },

      distance(context,val){//图例边界距离
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          if(option.legend.orient == 'horizontal'){//如果当前是横向的就向下移动
              option.legend.top = val;
          }else{//纵向，向左边移动
              option.legend.right = val;
          }
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
      },

      legend_fontFamily(context,val){//图例的字体配置
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.legend.textStyle.fontFamily = val;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
      },

      legend_fontSize(context,val){//图例的字体大小
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.legend.textStyle.fontSize = val;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
      },

      legend_color(context,val){//图例的字体颜色
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.legend.textStyle.color = val;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
      },

      edit_legend_data(context,legend_data){//图例数据修改
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          if(option.series && option.series.length <= 1 && option.series[0].hasOwnProperty('data') &&  typeof(option.series[0].data[0]) == 'object'){ //series长度为1并且 data[0]的类型的对象 说明该图表的series 数据为特殊结构 一般饼图和漏斗图是这样
              let data = option.series[0];
              data.hasOwnProperty('data') && legend_data.forEach((item,index)=>{
                  data.data[index].name = item;
              });
          }else{//说明是标准数据格式图表
              legend_data.forEach((item,index)=>{
                  if(option.series[index] && option.series[index].hasOwnProperty('name')){
                      option.series[index].name = item;
                  }
              });
          }
          option.legend.data = legend_data;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
      }

  }
}

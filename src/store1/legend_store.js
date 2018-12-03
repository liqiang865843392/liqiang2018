export default{
  state:{
      options:{
          // option:this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option,
          legend_show:true
      }
  },
  getters:{

  },
  mutations:{//官方不推荐异步操作放在这里

  },
  actions:{//官方推荐异步操作放在这里

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

  }
}

export default{
  state:{
  },
  getters:{

  },
  mutations:{//官方不推荐异步操作放在这里

  },
  actions:{//官方推荐异步操作放在这里

      xAxis_line_show(context,val){ //X轴线显示
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.xAxis.show = val;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
      },
      xAxis_label_show(context,val){ //X轴label显示
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.xAxis.axisLabel.show = val;
          option.xAxis.axisTick.show = val;//顺便设置刻度
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
      },
      xAxis_line_type(context,val){//线条类型
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.xAxis.axisLine.lineStyle.type=val;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
      },
      change_line_width(context,val){//轴线的粗细
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.xAxis.axisLine.lineStyle.width=val;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
      },
      xAxis_line_color(context,val){//线条颜色
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.xAxis.axisLine.lineStyle.color = val;
          option.xAxis.axisTick.lineStyle.color = val;//顺便设置刻度颜色
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
      },
      xAxis_label_color(context,val){//文字颜色
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.xAxis.axisLabel.color = val;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
      },
      xAxis_fontFamily(context,val){//修改字体
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.xAxis.axisLabel.fontFamily = val;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
      },
      xAxis_fontSize(context,val){//修改字体大小
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.xAxis.axisLabel.fontSize = val;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
      },
      xAxis_label_direction(context,val){//修改字体大小
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          option.xAxis.axisLabel.rotate = val;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
      },

  }
}

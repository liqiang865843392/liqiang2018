export default{
  state:{
     cur_code:'' //开发者模式当前编辑的代码
  },
  getters:{

  },
  mutations:{

  },
  actions:{
      set_code(context,cur_option){
          context.state.cur_code = JSON.parse(cur_option);
          // console.log(8887,context.state.cur_code);
      },
      developer_run(context,code){//开发者模式提交代码
          console.log('code1',code);
          let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
          // option = context.state.cur_code;
          this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = code;
      },
  }
}

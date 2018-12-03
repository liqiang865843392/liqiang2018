export default{
  state:{

  },
  getters:{

  },
  mutations:{//官方不推荐异步操作放在这里

  },
  actions:{//官方推荐异步操作放在这里
    set_title(context,title){//修改当前标题
        let template_index = this.state.common.template_no;//当前模板编号
        let chart_index = this.state.common.cur_chart_index;//当前chart编号
        this.state.common.all_title[template_index - 1 ][chart_index] = title;//之所谓需要-1 是因为之前模板的num加了1 - -
    }

  }
}

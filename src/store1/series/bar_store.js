export default{
    state:{

    },
    getters:{

    },
    mutations:{

    },
    actions:{
        bar_label_show(context,data){ //柱形图标签显示
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            console.log('data666',data);
            option.series[data.index].itemStyle.normal.label.show = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
        },

    }
}

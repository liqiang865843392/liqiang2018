export default{
    state:{

    },
    getters:{

    },
    mutations:{

    },
    actions:{
        set_bar_label_show(context,data){ //柱形图标签显示
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].label.show = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
        },
        set_bar_label_format(context,data){//修改标签内容格式
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].label.formatter = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
        },
        set_bar_label_position(context,data){//改变标签的位置
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].label.position = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_bar_label_fontSize(context,data){//改变标签的字号
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].label.fontSize = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_bar_label_color(context,data){//改变标签的颜色
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].label.color = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_bar_barGap(context,data){//改变柱形间距
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].barGap = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_bar_barCategoryGap(context,data){//修改柱组间距
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].barCategoryGap = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_bar_barBorderRadius(context,data){//修改圆角
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].itemStyle.barBorderRadius = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        }

    }
}

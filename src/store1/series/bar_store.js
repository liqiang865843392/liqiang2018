export default{
    state:{

    },
    getters:{

    },
    mutations:{

    },
    actions:{
        set_bar_label_attr(context,data){//设置柱形标签样式
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            let _type = data.type;//传入的要设置的属性
            if(option.series && option.series[data.index].hasOwnProperty("label")){
                option.series[data.index].label[_type] = data.value;
            }else{//不包含label属性
                option.series[data.index].label={_type:data.value};
            }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
        },
        set_bar_attr(context,data){//设置柱形属性
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            let _type = data.type;//传入的要设置的属性
            if(option.series && option.series[data.index]){
                option.series[data.index][_type] = data.value;
            }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
        },
        set_bar_itemStyle_attr(context,data){//设置柱形itemStyle属性
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            let _type = data.type;//传入的要设置的属性
            if(option.series && option.series[data.index].hasOwnProperty("itemStyle")){
                option.series[data.index].itemStyle[_type] = data.value;
            }else{//不包含itemStyle属性
                option.series[data.index].itemStyle={_type:data.value};
            }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
        },
    }
}

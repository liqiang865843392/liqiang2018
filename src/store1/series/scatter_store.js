export default{
    state:{

    },
    getters:{

    },
    mutations:{

    },
    actions:{
         set_scatter_label_attr(context,data){//设置圆形图label属性
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            let _type = data.type;//传入的要设置的属性
            if(option.series && option.series[data.index].hasOwnProperty("label")){
                //判断是否是fontWeight(因为加粗组件用是特殊组件)
                if(_type == 'fontWeight'){
                    data.value === true ? option.series[data.index].label[_type] = 'bold' : option.series[data.index].label[_type] = 'normal';
                }else{
                    option.series[data.index].label[_type] = data.value;
                }
            }else{//不包含label属性
                option.series[data.index].label={_type:data.value};
            }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
        },
        set_scatter_itemStyle_attr(context,data){//设置散点item属性
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            let _type = data.type;//传入的要设置的属性
            if(option.series && option.series[data.index].hasOwnProperty("itemStyle")){
                option.series[data.index].itemStyle[_type] = data.value;
            }else{//不包含itemStyle属性
                option.series[data.index].itemStyle={_type:data.value};
            }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
        }
    }
}

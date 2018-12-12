export default{
    state:{

    },
    getters:{

    },
    mutations:{

    },
    actions:{
        set_pie_label_attr(context,data){//设置圆形图label属性
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
        set_pie_labelLine_attr(context,data) {//设置圆形图labelLine属性
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            let _type = data.type;//传入的要设置的属性
            if(option.series && option.series[data.index].hasOwnProperty("labelLine")){
                option.series[data.index].labelLine[_type] = data.value;
            }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
        },
        set_pie_attr(context,data){//修改圆形图属性
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            let _type = data.type;//传入的要设置的属性
            if(option.series && option.series[data.index]){
                option.series[data.index][_type] = data.value;
            }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
        },
        set_pie_radius(context,data){//修改圆形图内半径
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            let _type = data.type;
            if(option.series && option.series[data.index].hasOwnProperty("radius")){
                if(_type == 'inside'){
                    option.series[data.index].radius[0] = data.value;
                }else if(_type == 'outer'){
                    option.series[data.index].radius[1] = data.value;
                }
            }else{//没有radius
                if(_type == 'inside'){
                    option.series[data.index].radius[0]={_type:data.value};
                }else if(_type == 'outer'){
                    option.series[data.index].radius[1]={_type:data.value};
                }
            }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
        },

    }
}

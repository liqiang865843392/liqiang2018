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
        set_once_color(context,data){//设置单色
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            if(option.series && option.series[data.index].hasOwnProperty("itemStyle")){
                option.series[data.index].itemStyle.color = data.value;
            }else{//没有itemStyle
                option.series[data.index].itemStyle = {};
                option.series[data.index].itemStyle.color = data.value;
            }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_bar_gradient_grid(context,data){//设置渐变坐标
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            let _type =  data.type;//获取传入的type
            if(option.series && option.series[data.index].hasOwnProperty("itemStyle")){
                if(option.series[data.index].itemStyle.hasOwnProperty("color")){
                    option.series[data.index].itemStyle.color[_type] = data.value;
                }else{//没有color
                    option.series[data.index].itemStyle.color={_type:data.value};
                }
            }else{//没有itemStyle
                console.log('_type',_type);
                option.series[data.index].itemStyle = {color:{}};
                option.series[data.index].itemStyle.color[_type] = data.value;
            }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        add_bar_gradient(context,index){//添加渐变项
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            if(option.series && option.series[index].hasOwnProperty("itemStyle") && option.series[index].itemStyle.hasOwnProperty("color") && option.series[index].itemStyle.color.hasOwnProperty("colorStops")){
                console.log('11111', option.series[index].itemStyle.color.colorStops);
                if(option.series[index].itemStyle.color.colorStops instanceof Array){
                    option.series[index].itemStyle.color.colorStops.push({ offset: 0, color: '#fff'});
                }
            }else{//当前series中不包含 colorStops 数组
                console.log('当前series中不包含 colorStops 数组');
                if(!option.series[index].hasOwnProperty("itemStyle")){//没有itemStyle
                    option.series[index].itemStyle={};
                }else if(!option.series[index].itemStyle.hasOwnProperty("color")) {
                    option.series[index].itemStyle.color = {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops:[]
                    };
                }else{//包含了color
                    option.series[index].itemStyle.color = {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops:[]
                    };
                }
                option.series[index].itemStyle.color.colorStops.push({ offset: 0, color: '#fff'});
                console.log(222222,  option.series[index].itemStyle.color.colorStops);
            }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_bar_gradient_color(context,data){//修改渐变项中的颜色
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.series_index].itemStyle.color.colorStops[data.g_index].color= data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_bar_gradient_position(context,data){//修改渐变项中的颜色
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.series_index].itemStyle.color.colorStops[data.g_index].offset= data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        remove_bar_gradient(context,data){//删除渐变项
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.series_index].itemStyle.color.colorStops.splice(data.g_index,1);
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        edit_series_data(context,data){//保存数据
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            if(option.series && option.series[data.index].hasOwnProperty('data')){
                option.series[data.index].data = data.data;
            }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option)
        }
    }
}

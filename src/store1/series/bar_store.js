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
        },
        set_once_color(context,data){//设置单色
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].itemStyle.color = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_bar_gradient_x(context,data){//设置渐变x
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].itemStyle.color.x = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_bar_gradient_x2(context,data){//设置渐变x2
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].itemStyle.color.x2 = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_bar_gradient_y(context,data){//设置渐变y
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].itemStyle.color.y = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_bar_gradient_y2(context,data){//设置渐变y2
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.index].itemStyle.color.y2 = data.value;
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

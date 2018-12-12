export default{
    state:{

    },
    getters:{

    },
    mutations:{

    },
    actions:{
        //以下方法为GradientOption.组件中
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
        set_gradient_grid(context,data){//设置渐变坐标
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
        add_gradient(context,index){//添加渐变项
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
        set_gradient_color(context,data){//修改渐变项中的颜色
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.series_index].itemStyle.color.colorStops[data.g_index].color= data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_gradient_position(context,data){//修改渐变项中的颜色
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.series_index].itemStyle.color.colorStops[data.g_index].offset= data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        remove_gradient(context,data){//删除渐变项
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
        },

        //以下方法为AddItemOption.vue 组件中
        set_item_name(context,data){//修改name
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            //先要修改legend中的相应数据
            option.legend.data && option.legend.data.forEach((item,index)=>{
                if(option.series[data.series_index].data[data.item_index].name == item){
                    option.legend.data[index] = data.value;
                }
            });
            option.series[data.series_index].data[data.item_index].name = data.value;

            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_item_val(context,data){//修改value
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.series_index].data[data.item_index].value = data.value;
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        set_item_color(context,data){//修改value
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            if(option.series[data.series_index].data[data.item_index].hasOwnProperty('itemStyle')){
                option.series[data.series_index].data[data.item_index].itemStyle.color = data.value;
                this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
            }
        },
        remove_item(context,data){//删除item方法
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            option.series[data.series_index].data.splice(data.item_index,1);
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
        add_item(context,index){//添加item
            let option = this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option;
            if(option.series[index].data instanceof Array){
                    let name =  parseInt(Math.random()*10000);
                    option.series[index].data.push(
                            {
                                name: name,
                                value: 999,
                                itemStyle:{
                                    color:'#4cddff'
                                }
                            }
                        );
                    //同时需要在legend里面push
                    option.legend.data.push(name)
                }
            this.state.common.echarts_option[this.state.common.cur_chart_index].echart_option = Object.assign({},option);
        },
    }
}

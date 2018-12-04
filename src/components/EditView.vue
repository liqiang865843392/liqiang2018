<template>
    <div class="edit-page">
        <div class="header">
            <!--<div  class="box">我是方按钮</div>-->
            <div class="back">
                <router-link class="back-btn" to="/main"></router-link>
                <!--<span class="back-btn" @click=""></span>-->
                <span class="spin"></span>
                <span>编辑图表</span>
            </div>
            <span class="change-mode" style="margin-right:100px" @click="_preview"><Icon style="margin-top:-3px;margin-right:2px; animation:fade 3000ms infinite;" type="ios-eye" size="22" color="rgba(244,233,37,.7)"/>预览发布</span>
            <span class="change-mode" @click="change_mode"><Icon type="md-flash" size="16" color="rgba(244,233,37,.7)"/>{{mode  ? '开发者模式' : '标准模式'}}</span>
        </div>
        <div class="left-view">
            <ChartThum></ChartThum>
        </div>
        <!--,animation: right_arrow ? 'move3 0.3s ease-out' : 'move4 0.3s ease-out'-->
        <div class="main-view" ref="main" :style="{width:main_width,marginLeft:left_arrow ? '0' : '220px',animation: get_animation,marginRight:right_arrow ? '0' : '320px'}">
                <span class="drag-btn left-close"  @click="toggle_Arrows('left')">
                  <Icon type="ios-arrow-back" size="14" color="#fff" :style="{transform:get_left_Arrows}"/>
                </span>
            <span class="drag-btn right-close" @click="toggle_Arrows('right')">
                    <Icon type="ios-arrow-back" size="14" color="#fff" :style="{transform:get_right_Arrows}"/>
                </span>
            <div class="chart-box">
                <Spin fix size="large" v-if="loading"></Spin>
                <Echarts :options="this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option" :status=true></Echarts>
            </div>
        </div>
        <div class="right-view"  ref="carousel">
            <!--<Carousel v-model="get_mode" dots="none" arrow="never">-->
            <div class="swiper-container swiper-no-swiping" id="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide normal-mode">
                        <div class="demo-carousel" style="padding:10px 0">
                            <Collapse v-model="cur_panel">
                                <Panel name="1">
                                    图表标题
                                    <div slot="content" class="title">
                                        <Title @onchange="get_title" ></Title>
                                    </div>
                                </Panel>
                                <Panel name="2">
                                    图表类型
                                    <div slot="content" class="chart-type">
                                        <Tooltip  :transfer=true :content="item.title" placement="top" class="item"  :class="{ 'active': cur_chart === item.type }" v-for="(item,index) in chart_list" :key="index" @click.native="select_chart(item,index)">
                                            <i class="chart-type-icon" :class="item.icon"></i>
                                        </Tooltip>
                                    </div>
                                </Panel>
                                <Panel name="3">
                                    图例组件
                                    <div slot="content">
                                        <Legend @add_data="add_legend_data"></Legend>
                                    </div>
                                </Panel>
                                <Panel name="4">
                                    坐标X轴
                                    <div slot="content">
                                        <Xaxis></Xaxis>
                                    </div>
                                </Panel>
                                <Panel name="5">
                                    坐标Y轴
                                    <div slot="content">
                                        <Yaxis></Yaxis>
                                    </div>
                                </Panel>
                                <Panel name="6">
                                    图表样式
                                    <div slot="content">
                                        <Series></Series>
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                    </div>
                    <div class="swiper-slide developer-mode">
                        <div class="demo-carousel">
                            <Icon class="out" @click="change_mode" type="md-arrow-forward" size="20" title="返回" color="rgba(255, 255, 255, 0.3)"/>
                            <!--<Input  type="textarea"  placeholder="请贴入option对象内容,如 option = { 内容 }"  :style="{height:carousel_height}"/>-->
                            <CodeEdit></CodeEdit>
                        </div>
                    </div>
                 </div>
            </div>


                <!--<CarouselItem class="developer-mode">-->
                    <!--<Icon type="ios-flask"  size="100" style="position: absolute;z-index:-1;left:50%;top:50%;transform: translate(-50%,-50%);opacity: 0.2"/>-->

                <!--</CarouselItem>-->
                <!--<CarouselItem class="normal-mode">-->
                <!--</CarouselItem>-->
            <!--</Carousel>-->
        </div>
        <Modal title="添加数据">
            <TableData slot="content"></TableData>
        </Modal>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import ChartThum from '@/components/ChartThum.vue';
    import Echarts from '@/components/common/Echarts';
    //引入每个修改组件
    import Title from '@/components/EditViewItem/Title';
    import Legend from '@/components/EditViewItem/Legend';
    import Xaxis from '@/components/EditViewItem/Xaxis';
    import Yaxis from '@/components/EditViewItem/Yaxis';
    import Series from '@/components/EditViewItem/Series';

    export default {
        name: "EditView",
        props:['show'],
        created(){
            this.$store.dispatch('chart_init');
            // console.log(778,this.$store1.state.echarts_option[this.$store1.state.cur_chart_index])
        },
        data () {
            return {
                mode:true,//编辑模式 true： 普通  false：开发者
                mode_swiper:null,
                // carousel_height:'',//开发者模式div高度
                cur_arrow:'left',//当前点中方向按钮
                left_arrow:false,//控制左边箭头方向
                right_arrow:false,//控制右边箭头方向
                main_width:'',//中心区域的宽度
                cur_chart:this.$store.state.common.cur_chart_type,//当前选中图表类型
                loading:true,
                cur_panel:[1,2,3,4,5,6],//当前展开折叠面板
                chart_list:[//图表类型列表
                    {
                        type:'table',
                        icon:'i-table',
                        title:'表格',
                        option_name:''
                    },
                    {
                        type:'bar',
                        icon:'i-bar',
                        title:'柱状图',
                        option_name:'bar_option'
                    },
                    {
                        type:'line',
                        icon:'i-line',
                        title:'折线图',
                        option_name:'line_option'
                    },
                    {
                        type:'pie',
                        icon:'i-pie',
                        title:'饼状图',
                        option_name:'pie_option'
                    },
                    {
                        type:'area',
                        icon:'i-area',
                        title:'面积图',
                        option_name:'area_option'
                    },
                    {
                        type:'scatter',
                        icon:'i-scatter',
                        title:'散点图',
                        option_name:'scatter_option'
                    },
                    {
                        type:'radar',
                        icon:'i-radar',
                        title:'雷达图',
                        option_name:'radar_option'
                    },
                    {
                        type:'gauge',
                        icon:'i-gauge',
                        title:'仪表盘',
                        option_name:'gauge_option'
                    },
                    {
                        type:'funnel',
                        icon:'i-funnel',
                        title:'漏斗图',
                        option_name:'funnel_option'
                    },
                    {
                        type:'map',
                        icon:'i-map',
                        title:'地图',
                        option_name:'map_option'
                    },
                ],
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                edit_option:{
                    show_x:''
                },
            }
        },
        computed:{
            // get_mode(){
            // },
            get_main_width(){
                return this.main_width ? this.main_width : '666px';
            },
            get_left_Arrows(){
                // transform: rotateZ(180deg);
                return  this.left_arrow ? 'translate(-50%,-50%) rotate(180deg)': '';
            },
            get_right_Arrows(){
                return  this.right_arrow ? 'translate(-50%,-50%) rotate(180deg)': '';
            },
            get_animation(){
                if(this.cur_arrow == 'left' && this.left_arrow ){
                    return 'move 0.3s ease-out';
                }else if(this.cur_arrow == 'left' && !this.left_arrow ){
                    return   'move1 0.3s ease-out';
                }else if( this.cur_arrow == 'right' && this.right_arrow){
                    return 'move3 0.3s ease-out';
                }else if(this.cur_arrow == 'right' && !this.right_arrow){
                    return 'move4 0.3s ease-out';
                }
            },
        },
        mounted(){
            setTimeout(()=>{ //loading 默认显示1.5秒  因为要等待echart加载完成
                this.loading=false;
            },1500);
            window.onbeforeunload = function(event) {
                return "您编辑的信息尚未保存，您确定要离开吗？"//这里内容不会显示在提示框，为了增加语义化。
            };

            this.mode_swiper = new Swiper('#swiper', {
                    centeredSlides: true,
             })

            // console.log(222,this.$refs.carousel.offsetHeight);
            // this.carousel_height = this.$refs.carousel.offsetHeight + 'px';
        },
        methods:{
            change_mode(){//切换模式
                if(this.mode){
                    this.mode_swiper.slideTo(1, 600, false);
                    this.mode= false;
                }else{
                    this.mode_swiper.slideTo(0, 600, false);
                    this.mode= true;
                }
                // document.body.scrollTop
            },
            _preview(){//进入预览模式
                //生成用户唯一id
                this.$router.push({'path':'/preview'});
            },
            toggle_Arrows(type){//点击了收缩按钮
                if(type == 'left'){
                    this.cur_arrow='left';
                    this.left_arrow =  !this.left_arrow;//修改箭头方向
                }else{
                    this.cur_arrow='right';
                    this.right_arrow =  !this.right_arrow;
                }
                //loading 1秒
                this.loading=true;
                setTimeout(()=>{
                    this.loading=false;
                },1500);
                this.$store.dispatch('chart_init',(new Date()).getTime());//手动让图表init
            },
            get_title(title){//设置了标题
                this.$store.dispatch('set_title',title);//手动让图表init
            },
            select_chart(item,index){//选中了图表类型
                this.cur_chart = item.type;//设置当前图表类型（控制样式）
                this.$store.dispatch('change_chart',item.option_name);//选择图表类型后修改视图中的图表
                // setTimeout(()=>{
                //     console.log(2223,this.$store.state.echarts_option[this.$store.state.cur_chart_index].echart_option.legend.orient);
                // },2000);
            },
            add_legend_data(){//点击了添加图例数据
                this.$store.dispatch('cut_modal_show',true);//显示模态框
            },
        },
        components:{
            ChartThum,Echarts,Title,Legend,Xaxis,Yaxis,Series
        }
    }
</script>

<style>
    @keyframes move {
        0% {
            margin-left: 220px;
        }
        100% {
            margin-left: 0;
        }
    }
    @keyframes move1 {
        0% {
            margin-left: 0;
        }
        100% {
            margin-left: 220px;
        }
    }
    @keyframes move3 {
        0% {
            margin-right: 320px;
        }
        100% {
            margin-right: 0;
        }
    }
    @keyframes move4 {
        0% {
            margin-right: 0;
        }
        100% {
            margin-right: 320px;
        }
    }

    @keyframes fade {
        from { opacity: 1.0; }
        50% { opacity: 0.4; }
        to { opacity: 1.0; }
    }

    .left-true{
        margin-left:0;
        animation:move 0.3s ease-out;
    }
    .left-false{
        margin-left:220px;
        animation:move1 0.3s ease-out;
    }
</style>
<style  lang="scss">
    .edit-page{
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background: #191A2C;
        box-sizing: border-box;
        .svg-icon2{
            fill:#06c; //还可以设置图标的种颜色哦
        }
        .header{
            position:fixed;
            top:0;
            z-index: 2000;
            width:100%;
            height:64px;
            background-color:#191A2C ;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.3), 0 10px 24px 0 rgba(0,0,0,.3), inset 0 -1px 0 0 rgba(81,130,227,.06);
            .box {
                width: 106px;
                height: 35px;
                font-size: 14px;
                background: #66b1ff;
                color: #fff;
                border-radius: 4px;
                cursor: pointer;
                line-height: 35px;
                margin: 0 auto;
            }
            .change-mode{
                position: absolute;
                top: 50%;
                right: 0;
                /*text-align: left;*/
                transform: translate(-50%,-50%);
                color: rgba(255,255,255,.7);
                cursor: pointer;
            }
            .back{
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size:24px;
                width:200px;
                margin-left:20px;
                height:100%;
                color:rgba(255,255,255,.7);
                .back-btn{
                    display: inline-block;
                    width:32px;height:32px;
                    cursor: pointer;
                    background: url('../svg/svg-sprite2.svg') -1314px -1306px no-repeat;
                }
                .spin{
                    width: 2px;
                    height: 6px;
                    background-color:rgba(81,130,228,.2);
                }
            }
        }
        .left-view{
            position: fixed;
            top: 64px;
            bottom: 0;
            overflow-x: hidden;
            overflow-y: auto;
            width: 220px;
            /*width:15%;*/
            padding: 12px;
            background: #191A2C;
        }
        .main-view{
            position: relative;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.3), 0 10px 24px 0 rgba(0,0,0,.3);
            background-color: #202237;
            overflow-x: auto;
            min-width: 450px;
            height: calc(100% - 64px);
            margin: 64px 320px 0 220px;
            padding:60px;
            z-index: 999;
            .drag-btn{
                position: absolute;
                top: 50%;
                margin-top: -18px;
                display: block;
                width: 12px;
                height: 36px;
                cursor: pointer;
                opacity: .7;
                .ivu-icon{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
            }
            .left-close{//关闭左侧的按钮
                background-size: 1716px 348px;
                margin-left: -60px;
                background-position: -210px -178px;
                background-image: url('../assets/images/sprite.dark_55bbeef.png');
            }
            .right-close{//关闭右侧的按钮
                transform: rotate(180deg);
                right: 0;
                background-size: 1716px 348px;
                background-position: -210px -178px;
                background-image: url('../assets/images/sprite.dark_55bbeef.png');
            }
            .chart-box{
                position: relative;
                width:100%;
                height: 100%;
            }
        }
        .right-view{
            width: 320px;
            /*width:20%;*/
            /*padding: 16px 0;*/
            position: fixed;
            z-index: 101;
            top: 64px;
            right: 0;
            bottom: 0;
            text-align: left;
            overflow-x: hidden;
            overflow-y: auto;
            .developer-mode{//开发者模式页面
                .head{
                    display: flex;
                    align-items:center;
                    position: relative;
                    /*padding:15px 0 5px 5px;*/
                    .icon{
                        margin-right:8px;width: 30px;background-color:#202237;padding-top: 10px;padding-bottom: 2px;margin-bottom: 1px;text-align: center;
                    }
                    .title{
                        font-size:14px;
                        color: rgba(255, 255, 255, 0.7)!important;
                        font-weight: bold;
                        margin-top: 8px;
                    }
                    .run{
                        position: absolute;
                        right: 40px;
                        top: 10px;
                        cursor: pointer;
                    }
                }
                .out{
                    position:absolute;
                    right:10px;
                    top: 10px;
                    z-index: 999;
                    cursor:pointer;
                }
            }
            .normal-mode{
                .legend,.edit-x,.edit-y{
                    position: relative;
                    .option-item{
                        padding:10px 0;
                        padding-left:16px;
                        display: flex;
                        align-items: center;
                        /*justify-content: space-around;*/
                        justify-content: flex-start;

                    }
                    .create-data{
                        position:absolute;
                        right:1px;
                        top:-2px;
                        cursor: pointer;
                    }
                    .create-data:hover,go-back:hover{
                        color:#2167ad;
                    }
                    .go-back{
                        position:absolute;
                        right: -8px;
                        top: -30px;
                        cursor: pointer;
                    }
                }
                .ivu-collapse-item{
                    box-shadow: inset 0 -1px 0 0 rgba(81,130,228,.2);
                    .ivu-collapse-content{
                        padding:0 36px 15px;
                        padding-right:15px;
                        .ivu-collapse-content-box{
                            padding: 0;
                            .title{
                                height:36px;
                                input{
                                    width:100%!important;
                                    height:24px;
                                    color: rgba(255,255,255,1);
                                    border: none;
                                    box-shadow: 0 -1px 0 0 rgba(81,130,228,.5) inset;
                                    background-color: transparent;
                                    outline: none;
                                }
                                input:focus{
                                    box-shadow: 0 -2px 0 0 rgba(81,130,228,1) inset;
                                }
                            }
                            .chart-type{
                                width:290px;
                                .item{
                                    display: inline-block;
                                    width: 40px;
                                    height: 40px;
                                    margin: 0 4px 4px 0;
                                    cursor: pointer;
                                    padding: 4px;
                                    .chart-type-icon{
                                        display: inline-block;
                                        width: 32px;
                                        height: 32px;
                                    }
                                    .i-table{
                                        background: url('../svg/svg-sprite2.svg') -866px -1306px no-repeat;
                                    }
                                    .i-bar{
                                        background: url('../svg/svg-sprite2.svg') -802px -1306px no-repeat;
                                    }
                                    .i-pie{
                                        background: url('../svg/svg-sprite2.svg') -546px -1306px no-repeat;
                                    }
                                    .i-line{
                                        background: url('../svg/svg-sprite2.svg') -610px -1306px no-repeat;
                                    }
                                    .i-area{
                                        background: url('../svg/svg-sprite2.svg') -1341px -552px no-repeat;
                                    }
                                    .i-scatter{
                                        background: url('../svg/svg-sprite2.svg') -832px -871px no-repeat;
                                    }
                                    .i-radar{
                                        background: url('../svg/svg-sprite2.svg') -666px -531px no-repeat;
                                    }
                                    .i-gauge{
                                        background: url('../svg/svg-sprite2.svg') -1254px -1238px no-repeat;
                                    }
                                    .i-funnel{
                                        background: url('../svg/svg-sprite2.svg') -1341px -716px no-repeat;
                                    }
                                    .i-map{
                                        background: url('../svg/svg-sprite2.svg') -1189px -1238px no-repeat;
                                    }

                                }
                                .active{
                                    background-color: rgba(81,130,228,.1);
                                    box-shadow: 0 0 0 2px rgba(81,130,227,.15), inset 0 0 0 2px #5182E4;
                                }
                                .item:hover{
                                    background-color: rgba(81,130,228,.1);
                                }

                            }
                        }
                    }
                }
            }
        }
    }
</style>
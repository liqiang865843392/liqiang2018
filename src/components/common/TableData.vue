<template>
    <!--<table>-->
    <!--<tr>-->
    <div class="edit-data">
        <span>图例数据：</span>
        <!--<td v-for="(item,index) in legend_data">-->
        <div class="item-content">
            <Tag  class="tag" v-for="(item,index) in legend_data" :name="item.value"  closable @on-close="handleClose(legend_data,index)" >
                <input  v-model="item.value" :readonly="item.readonly" @click="_edit(legend_data,item)" />
            </Tag>
            <Button class="add" icon="ios-add" type="dashed" size="small" @click="handleAdd(legend_data)">添加标签</Button>
        </div>

    </div>

    <!--</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>X轴数据</td>-->
    <!--<td v-for="(item,index) in xAxis_data">-->
    <!--<input  v-model="item.value" :readonly="item.readonly"  @click="_edit(xAxis_data,item)" />-->
    <!--</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>Y轴数据</td>-->
    <!--<td v-for="(item,index) in yAxis_data">-->
    <!--<input  v-model="item.value" :readonly="item.readonly"  @click="_edit(xAxis_data,item)" />-->
    <!--</td>-->
    <!--</tr>-->
    <!--</table>-->
</template>
<script>
    export default {
        props: {

        },
        created(){

        },
        data(){
            return {
                legend_data: [
                    {
                        value: 'legend_a',
                        readonly:true
                    },
                    {
                        value: 'legend_b',
                        readonly:true
                    },
                    {
                        value: 'legend_c',
                        readonly:true
                    },
                    {
                        value: 'legend_d',
                        readonly:true
                    },
                    {
                        value: 'legend_e',
                        readonly:true
                    },
                ],
                xAxis_data:[
                    {
                        value: 'xAxis_a',
                        readonly:true
                    },
                    {
                        value: 'xAxis_b',
                        readonly:true
                    },
                    {
                        value: 'xAxis_c',
                        readonly:true
                    },
                    {
                        value: 'xAxis_d',
                        readonly:true
                    },
                    {
                        value: 'xAxis_e',
                        readonly:true
                    },
                ],
                yAxis_data:[
                    {
                        value: 'yAxis_a',
                        readonly:true
                    },
                    {
                        value: 'yAxis_b',
                        readonly:true
                    },
                    {
                        value: 'yAxis_c',
                        readonly:true
                    },
                    {
                        value: 'yAxis_d',
                        readonly:true
                    },
                    {
                        value: 'yAxis_e',
                        readonly:true
                    },
                ]
            }
        },
        computed:{

        },
        methods:{
            _edit(data,item){
                // data.forEach((item,index)=>{//默认只允许1个菜单项可以编辑
                //     // item.readonly=true;
                // });
                item.readonly = false;
            },
            handleAdd (data) {//添加数据项
                if (data.length) {
                    data.push({
                        value: '',
                        readonly:true
                    });
                } else {
                    data.push(0);
                }
            },
            handleClose(data,index){//传入要删除的index
                data.splice(index, 1);
                console.log(111112222);
            }
        }
    }
</script>
<style>
    .ivu-tag{
        padding:0 3px!important;
        background: transparent!important;
        border:1px solid #5182e4!important;
    }
    .ivu-tag .ivu-icon-ios-close{
        color:#5182e4!important;
    }
    .ivu-btn-dashed{
        background-color: #5182e4!important;
        color:#fff!important;
        border:none!important;
    }
</style>
<style scoped  lang="scss">
    .edit-data{
        width:100%;
        display: flex;
        /*justify-content:flex-start;*/
        /*flex-wrap: wrap;*/
        span{
            display: inline-block;
            width:80px;
            height:28px;
            line-height:28px;
            color:#5182e4;
            /*font-weight: bold;*/
            font-size:16px;
            margin-right:10px;
        }
        .item-content{
            width:88%;
            /*height:auto;*/
            display: flex;
            /*justify-content:flex-start;*/
            flex-wrap: wrap;
            /*align-items: flex-start;*/
            .tag{
                /*float: left;*/
                /*display: block;*/
                input{
                    width: 50px;
                    height:22px;
                    background-color: transparent;
                    border:none;
                    outline:none;
                    color:rgba(81,130,228,1);
                }
            }
            .add{
                height:25px;
            }
        }

    }
    /*table{*/
    /*tr{*/
    /*display: flex!important;*/
    /*justify-content:flex-start;*/
    /*align-items:center;*/
    /*height: 50px !important;*/
    /*border-bottom: 1px dashed rgba(81,130,228,.3) ;*/
    /*td{*/
    /*margin:5px 8px;*/
    /*width:50px!important;*/
    /*.tag{*/
    /*input{*/
    /*width: 50px;*/
    /*background-color: transparent;*/
    /*border:1px solid rgba(81,130,228,.3);*/
    /*outline:none;*/
    /*color:rgba(81,130,228,1)*/
    /*}*/
    /*}*/
    /*!*input:focus{*!*/
    /*!*box-shadow:0 0 0 1px rgba(81, 130, 228, 1);*!*/
    /*!*}*!*/
    /*}*/
    /*td:first-child{*/
    /*color:#5182e4;*/
    /*}*/
    /*}*/
    /*}*/
</style>





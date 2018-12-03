<template>
    <div class="edit-data">
        <table>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Address</td>
            </tr>
            <tr v-for="(item,index) in legend_data" :key="index">
                <td>{{item.value}}</td>
                <td>{{item.value}}</td>
                <td>{{item.value}}</td>
            </tr>
            <!--<tr>-->
                <!--<td>Jim Green</td>-->
                <!--<td>24</td>-->
                <!--<td>London No</td>-->
            <!--</tr>-->
            <!--<tr>-->
                <!--<td>Joe Black</td>-->
                <!--<td>30</td>-->
                <!--<td>Sydney No.</td>-->
            <!--</tr>-->
            <!--<tr>-->
                <!--<td>Jon Snow</td>-->
                <!--<td>26</td>-->
                <!--<td>Ottawa No</td>-->
            <!--</tr>-->
            <!--<tr>-->
                <!--<td>Jon Snow</td>-->
                <!--<td>26</td>-->
                <!--<td>Ottawa No</td>-->
            <!--</tr>-->
        </table>
    </div>


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
                        is_input:false
                    },
                    {
                        value: 'legend_b',
                        is_input:false
                    },
                    {
                        value: 'legend_c',
                        is_input:false
                    },
                    {
                        value: 'legend_d',
                        is_input:false
                    },
                    {
                        value: 'legend_e',
                        is_input:false
                    },
                ],
            }
        },
        computed:{
            get_table_data(){
                return  this.table_data ? this.table_data : [];
            }
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
        margin-top:8px;
        table{
            border: 1px solid rgba(81,129,228,.1);
            width:100%;text-align:center;border-collapse:collapse;
            tr:first-child{
                height: 20px;
                white-space: nowrap;
                overflow: hidden;
                background-color:rgba(81,129,228,.1);
                color:rgba(81,129,228,.9);
            }
            tr{
                td,th{
                    border-right: 1px solid rgba(81,129,228,.1);
                    height: 20px;
                    box-sizing: border-box;
                    text-align: center;
                    text-overflow: ellipsis;
                    vertical-align: middle;
                    border-bottom: 1px solid rgba(81,129,228,.1);
                }
            }
            tr:hover{
                background-color:rgba(81,129,228,0.03);
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





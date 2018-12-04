<template>
    <div class="edit-data">
        <table>
            <tr>
                <td v-if="title">{{title}}</td>
                <td v-else v-for="(item,index) in get_thead_data">{{item}}</td>
            </tr>
            <tr v-if="this.cur_table_data.length <= 0">
                <td>该图表暂无图例配置项</td>
            </tr>
            <tr class="tbody" v-for="(item,index) in get_table_data" :key="index">
                <td @dblclick="_edit(item,index)">
                    <!--<Input v-if="item.is_input" @on-blur="onblur(index,$event)"/>-->
                    <input  type="text" v-focus :value=item.name  v-if="item.is_input" @blur = "onblur(item,$event)">
                    <span v-else>{{item.name}}</span>
                </td>
            </tr>

        </table>
    </div>


</template>
<script>
    export default {
        props: {
            title:{//固定表头标题

            },
            head_data:{ //表头数据

            },
            table_data:{ //表格数据

            },
        },
        created(){
        },
        data(){
            return {
                cur_table_data:[],//用于存放props中的cur_table_data
            }
        },
        computed:{
            get_thead_data(){//获取当前图表数据的表头
                    return this.head_data && this.head_data.length > 0 ?  this.head_data : [];
            },
            get_table_data(){
                this._handle_data();
                return  this.cur_table_data && this.cur_table_data.length > 0 ? this.cur_table_data : [];
            }
        },
        methods:{
            _edit(item,index){//双击了单元格
                console.log(5255,item);
                item.is_input = true;
                // this.cur_table_data.splice(index,1,)
            },
            onblur(item,e){//input 失去焦点 保存数据
                // console.log(77777,e);
                item.is_input=false;
                item.name = e.target.value;
                this._handle_data('rest');//还原数据并发送store保存
                console.log('cur_table_data',this.cur_table_data);
                // console.log(88888,index);
            },
            _handle_data(type='handle'){//数据处理函数(每一次传入props数据都需要在每一个item里添加一个是否显示input的标识)
                let _data = [];
                if(type == 'handle'){//处理数据 (用于修改数据：动态显示input)
                    this.cur_table_data =  this.table_data;
                    this.table_data.forEach((item,index)=>{
                        _data.push({name:item,is_input:false});
                    });
                    this.cur_table_data = _data;
                }else if(type == 'rest'){//还原数据 (用于保存)
                    this.cur_table_data.forEach((item,index)=>{
                        _data.push(item.name);
                    });
                    this.$store.dispatch('edit_legend_data',_data);
                    console.log('_data1',_data);
                }
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
                    height: 22px;
                    box-sizing: border-box;
                    text-align: center;
                    text-overflow: ellipsis;
                    vertical-align: middle;
                    line-height: 22px;
                    border-bottom: 1px solid rgba(81,129,228,.1);
                }
            }
            .tbody{
                input{
                    background-color: transparent!important;
                    border:none;
                    width:100%;
                    text-align: center;
                    font-size:12px;
                    color:rgba(255,255,255,.7);
                }
            }
            .tbody:hover{
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





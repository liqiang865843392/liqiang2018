<template>
        <!--编辑页面图表缩略图组件-->
        <div class="chart-thumb">
            <div v-waves v-for="(item,index) in this.$store.state.common.thumbs" :key="index"  :style="{backgroundImage:'url(' + item + ')'}" class="thumb" :class="{'thumb-active':cur_chart_index === index}" @click="_change_chart(index)">
                <!--<img style="width:100%;height:180px;" :src="item" alt="">-->
            </div>
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
                cur_chart_index : this.$store.state.common.cur_chart_index
            }
        },
      computed:{
      },
      mounted(){

      },
      methods:{
          _change_chart(index){
              this.cur_chart_index = index;
              this.$store.dispatch('change_current_chart',index);//这里的index实际上就是当前选中图表的index
                // console.log();
          }
      }
    }
</script>

<style scoped lang="scss">
    .chart-thumb{
        .thumb{
            margin:12px 0;
            padding:10px;
            width:180px;
            height:180px;
            background-color: rgba(81, 130, 228, 0.1);
            box-shadow: 0 0 0 1px rgba(81, 130, 227, 0.15), inset 0 0 0 1px rgba(81, 130, 228, 0.43);
            cursor: pointer;
            background-size:93%;
            background-repeat: no-repeat;
            background-position: center;
        }
        .thumb:hover{
            box-shadow: 0 0 0 1px rgba(81, 130, 227, 0.15), inset 0 0 0 2px rgb(81, 130, 228);
        }
        .thumb-active{
            box-shadow: 0 0 0 1px rgba(81, 130, 227, 0.15), inset 0 0 0 2px rgb(81, 130, 228);
        }
    }
</style>





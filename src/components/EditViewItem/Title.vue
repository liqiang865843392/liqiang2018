<template>
    <input  :value="get_title" placeholder="未命名图表"  style="width: 200px" @input = "_onchange" />
</template>
<script>
    export default {
      props: {
      },
      created(){

      },
      computed:{
          get_title(){
              let template_index = this.$store.state.common.template_no;//当前模板编号
              let chart_index = this.$store.state.common.cur_chart_index;//当前chart编号
              return this.$store.state.common.all_title[template_index - 1 ][chart_index];//之所谓需要-1 是因为之前模板的num加了1 - -
          }
      },
      data(){
            return {

            }
      },
      mounted(){

      },
      methods:{
          _onchange(e){
              this.$emit('onchange',e.target.value);
          }
      },
      components:{
      }
    }
</script>
<style  lang="scss">

</style>





<template>
    <!--饼图option-->
    <div class="pie-option">
        <Checkbox  style="">显示标签</Checkbox>
        <Checkbox  style="">显示引导线</Checkbox>
        <div class="option-item">
            <span class="title-label">圆环半径</span>
            <MySelect tooltip="内半径" iconType="font-icon" @onchange="" value=""  :option="this.$store.state.common.select_option.inside_radius"></MySelect>
            <MySelect tooltip="外半径" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.outer_radius"></MySelect>
        </div>
        <div class="option-item" style="padding:0;">
            <span class="title-label">文字设置</span>
            <MySelect style="margin-left: -20px;" tooltip="字号" iconType="line-width-icon"  value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
            <ChooseColor tooltip="字体色" iconType="font-icon" @onchange="pie_text_color" value="#fff"></ChooseColor>
        </div>

    </div>
</template>
<script>
    export default {
      props: {
      },
      created(){

      },
      computed:{
          get_pie_text_color(){

          }
      },
      data(){
            return {

            }
      },
      mounted(){

      },
      methods:{
          pie_text_color(){

          }
      },
      components:{
      }
    }
</script>
<style  lang="scss">
</style>





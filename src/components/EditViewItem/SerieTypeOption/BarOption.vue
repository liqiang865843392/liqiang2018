<template>
    <!--柱状图option-->
    <div class="bar-option">
        <div class="option-item">
            <span class="title-label">柱形配置</span>
            <MySelect tooltip="柱组间距" iconType="font-icon" @onchange="" value=""  :option="this.$store.state.common.select_option.spacing"></MySelect>
            <MySelect tooltip="柱间距" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.spacing"></MySelect>
        </div>
        <div style="height:30px;">
            <span class="title-label" style="float:left;line-height: 30px;" >圆角半径</span>
            <TextInput style="float:left;width:70%;" title="" type='number'   placeholder="" @onchange="" value=""></TextInput>
        </div>
        <Checkbox  style="">显示标签</Checkbox>
        <div class="option-item">
            <span class="title-label">标签属性</span>
            <MySelect tooltip="内容格式" iconType="font-icon" @onchange="" value=""  :option="this.$store.state.common.select_option.fontType"></MySelect>
            <MySelect tooltip="数值位置" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.location"></MySelect>
        </div>
        <div class="option-item" style="padding:0;">
            <span class="title-label">文字设置</span>
            <MySelect tooltip="字号" iconType="line-width-icon"  value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
            <ChooseColor tooltip="字体色" iconType="font-icon" @onchange="" value="#fff"></ChooseColor>
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

      },
      data(){
            return {

            }
      },
      mounted(){

      },
      methods:{

      },
      components:{
      }
    }
</script>
<style  lang="scss">
    .bar-option{

    }
</style>





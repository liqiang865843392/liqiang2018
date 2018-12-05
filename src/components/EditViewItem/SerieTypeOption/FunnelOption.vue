<template>
    <!--漏斗图option-->
    <div class="funnel-option">
        <div class="option-item">
            <span class="title-label">图形布置</span>
            <MySelect tooltip="对齐方式" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.funnel_algin"></MySelect>
            <MySelect tooltip="数据排序" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.funnel_data_sort"></MySelect>
        </div>
        <Checkbox style="">显示标签</Checkbox>
        <div class="option-item" style="justify-content: flex-start">
            <span class="title-label">标签属性</span>
            <TextInput  style="margin-left:13px;"  tooltip="内容格式" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>
            <MySelect tooltip="标签位置" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.funnel_label_location"></MySelect>
        </div>
        <div class="option-item">
            <span class="title-label">标签字体</span>
            <IconRadio style="margin-left:-5px;" icon="md-color-wand"  tooltip="加粗" ></IconRadio>
            <MySelect tooltip="字号" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
            <ChooseColor iconType="font-icon" tooltip="字体色" @onchange="" value=""></ChooseColor>
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
    .funnel-option{

    }
</style>





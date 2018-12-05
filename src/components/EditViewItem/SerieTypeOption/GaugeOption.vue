<template>
    <!--仪表盘option-->
    <div class="gauge-option">
        <span class="title-label">表盘属性</span>
        <div class="option-item">
            <TextInput  tooltip="最大值" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>
            <TextInput  tooltip="最小值" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>
            <TextInput  tooltip="分割段数" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>
        </div>
        <div class="option-item">
            <MySelect tooltip="半径" iconType="font-icon" @onchange="" value=""  :option="this.$store.state.common.select_option.symbolType"></MySelect>
            <MySelect tooltip="起始角度" iconType="font-icon" @onchange="" value=""  :option="this.$store.state.common.select_option.gauge_angle"></MySelect>
            <MySelect tooltip="结束角度" iconType="font-icon" @onchange="" value=""  :option="this.$store.state.common.select_option.gauge_angle"></MySelect>
        </div>
        <div class="option-item">
            <Checkbox style="">显示标题</Checkbox>
        </div>
        <div class="option-item">
            <span class="title-label">标题属性</span>
            <IconRadio style="margin-left:-5px;" icon="md-color-wand"  tooltip="加粗" ></IconRadio>
            <MySelect tooltip="字号" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
            <ChooseColor iconType="font-icon" tooltip="字体色" @onchange="" value=""></ChooseColor>
        </div>
        <div class="option-item" style="justify-content: flex-start">
            <span class="title-label">轴线属性</span>
            <TextInput  style="margin-left:13px;"  tooltip="线宽" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>
            <TextInput  tooltip="分段数" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>
        </div>
        <div class="option-item" style="justify-content: flex-start">
            <span class="title-label">颜色段组</span>
            <MySelect  style="margin-left:13px" tooltip="线段序列" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
            <ChooseColor iconType="font-icon" tooltip="线段颜色" @onchange="" value=""></ChooseColor>
        </div>
        <div class="option-item">
            <span class="title-label">刻度标签</span>
            <IconRadio icon="ios-eye" tooltip="显示标签"></IconRadio>
            <TextInput  tooltip="刻度数" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>
            <MySelect tooltip="文本格式" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
        </div>
        <div class="option-item">
            <span class="title-label">标签字体</span>
            <IconRadio icon="md-color-wand"  tooltip="加粗" ></IconRadio>
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
    .bar-option{

    }
</style>





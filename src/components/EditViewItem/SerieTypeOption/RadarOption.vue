<template>
    <!--radar-option-->
    <div class="radar-option">
        <span class="title-label" style="color:#2d8cf0!important;">雷达坐标系</span>
        <div class="option-item">
            <MySelect tooltip="内外半径" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.inside_radius"></MySelect>
            <MySelect tooltip="类型" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.symbolType"></MySelect>
            <TextInput  tooltip="分隔段数" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>
        </div>
        <div class="option-item" style="line-height: 8px;">
            <span class="title-label">标签属性</span>
            <IconRadio icon="md-color-wand"  tooltip="加粗" ></IconRadio>
            <MySelect iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
            <ChooseColor iconType="font-icon" tooltip="字体色" @onchange="" value=""></ChooseColor>
        </div>
        <div class="option-item">
            <span class="title-label">轴线属性</span>
            <MySelect tooltip="线条色" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.line_width"></MySelect>
            <ChooseColor @onchange="" tooltip="线条色" value=""></ChooseColor>
        </div>
        <span class="title-label" style="color:#2d8cf0!important;">雷达图</span>
        <div class="option-item" style="justify-content: flex-start">
            <span class="title-label">填充样式</span>
            <ChooseColor style="margin-left:10px;" @onchange="" tooltip="颜色" value=""></ChooseColor>
            <TextInput  tooltip="透明度" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>
        </div>
        <div class="option-item">
            <span class="title-label">标签属性</span>
            <IconRadio icon="ios-eye" tooltip="是否显示"></IconRadio>
            <MySelect tooltip="数值位置" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.location"></MySelect>
            <ChooseColor @onchange="" tooltip="字体颜色" value=""></ChooseColor>
        </div>
        <div class="option-item" style="line-height: 8px;">
            <span class="title-label">字体属性</span>
            <IconRadio icon="md-color-wand"  tooltip="加粗" ></IconRadio>
            <MySelect iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
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
    .radar-option{

    }
</style>





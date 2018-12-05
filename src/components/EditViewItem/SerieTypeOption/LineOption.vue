<template>
    <!--柱状图option-->
    <div class="line-option">
        <div class="option-item">
            <Checkbox  style="">显示标记</Checkbox>
            <Checkbox  style="">平滑曲线</Checkbox>
            <Checkbox  style="">显示标签</Checkbox>
            <Tooltip  :transfer=true content="编辑图形数据" placement="left-end" class="create-data" >
                <icon name="data" scale="2" @click.native = "add_data"></icon>
            </Tooltip>
        </div>
        <div class="option-item">
            <span class="title-label">标记属性</span>
            <MySelect tooltip="标记图形" iconType="font-icon" @onchange="" value=""  :option="this.$store.state.common.select_option.symbolType"></MySelect>
            <TextInput  tooltip="标记大小" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>
        </div>
        <div class="option-item" style="width: 220px;">
            <span class="title-label">标签属性</span>
            <MySelect tooltip="数值位置" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.location"></MySelect>
            <ChooseColor iconType="font-icon" tooltip="字体色" @onchange="" value=""></ChooseColor>
        </div>
        <div class="option-item" style="width: 220px;">
            <span class="title-label">线条属性</span>
            <MySelect tooltip="线条粗细" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.line_width"></MySelect>
            <ChooseColor  iconType="font-icon" tooltip="线条颜色" @onchange="" value=""></ChooseColor>
        </div>
        <div class="option-item" style="padding-bottom: 0;">
            <span class="title-label">字体属性</span>
            <MySelect tooltip="字体" iconType="font-icon" @onchange="" value=""  :option="this.$store.state.common.select_option.fontType"></MySelect>
            <MySelect tooltip="字号" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
        </div>
        <div class="option-item" style="padding-top: 7px;padding-left:70px;justify-content: flex-start">
            <MySelect tooltip="字体粗细" iconType="line-width-icon" @onchange="" value="" :option="this.$store.state.common.select_option.font_size"></MySelect>
            <ChooseColor style="margin-left:12px;" iconType="font-icon" tooltip="字体颜色" @onchange="" value=""></ChooseColor>
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
    .line-option{

    }
</style>





<template>
    <!--散点图option-->
    <div class="scatter-option">
        <div class="option-item">
            <Checkbox  style="">显示标签</Checkbox>
        </div>
        <div class="option-item" style="justify-content: flex-start">
            <span class="title-label">散点属性</span>
            <TextInput  style="margin:0 16px;" tooltip="最大散点" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>
            <TextInput  tooltip="最小散点" iconType="font-icon" type='number'  placeholder="" @onchange="" value=""></TextInput>
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
    .scatter-option{

    }
</style>





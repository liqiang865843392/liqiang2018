<template>
        <div class="code-edit">
            <div class="head">
                <Icon type="md-bulb" size="22" color="#5182E4" class="icon"/>
                <span class="title">开发者模式</span>
                <Button type="primary" size="small"  class="run" @click="run" :loading="code_loading">运行代码</Button>
                <!--<span class="out" @click="CarouselIndex = 1">退出 </span>-->
                <!--<Icon type="md-bulb" size="24" color="#5182E4" style="margin-right:8px;"/>-->
            </div>
            <codemirror ref="myCm" :value="get_code" :options="cmOptions"></codemirror>
        </div>
</template>
<script>
    import { codemirror } from 'vue-codemirror';
    import 'codemirror/lib/codemirror.css';
    import 'codemirror/theme/base16-dark.css';
    // import 'codemirror/theme/base16-dark.css';
    import 'codemirror/mode/javascript/javascript';

    import 'codemirror/addon/fold/foldgutter.css';
    import 'codemirror/addon/fold/foldcode.js';
    import 'codemirror/addon/fold/foldgutter.js';
    import 'codemirror/addon/fold/brace-fold.js';
    import 'codemirror/addon/fold/comment-fold.js';

    export default {
      props: {
          iconType:{
              type:String,
              default:'edit-icon'
          }
      },
      created(){
          // console.log(JSON.stringify(this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option))
      },
      computed:{
        get_code:{
            get:function(){
                return JSON.stringify(this.$store.state.common.echarts_option[this.$store.state.common.cur_chart_index].echart_option,null,2);
            },
            set:function(code){
                // console.log('code',JSON.parse(JSON.stringify(code,null,2)));
                // this.$store.dispatch('set_code',JSON.parse(JSON.stringify(code)));
            }
        },
        codemirror() {
              return this.$refs.myCm.codemirror
          }
      },
      data(){
            return {
                code: '',
                code_loading: false,
                cmOptions: {
                    tabSize: 4,
                    mode: 'javascript',
                    theme: 'base16-dark',
                    // theme: 'blackboard',
                    lineNumbers: true,
                    line: true,
                    lineWrapping: true,    //代码折叠
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    matchBrackets: true,    //括号匹配
                }
            }
      },
      mounted(){
      },
      methods:{
          run(){//开发者模式提交代码
              this.code_loading = true;
              setTimeout(()=>{
                  this.code_loading = false;
              },800)
              // console.log('this is current codemirror object',  eval('(' + this.codemirror.getValue() + ')'))
              this.$store.dispatch('developer_run', eval('(' + this.codemirror.getValue() + ')'));//运行当前代码

          }
      },
      components:{
          codemirror
      }
    }
</script>
<style  lang="scss">
    .code-edit{
        ::-webkit-scrollbar {
            width: 0;   /* 滚动条宽度为0 */
            height: 0; /* 滚动条高度为0 */
            display: none; /* 滚动条隐藏 */
        }
        .vue-codemirror{
            height:1200px;
            .CodeMirror{
                height:100%;
            }
        }
    }
</style>





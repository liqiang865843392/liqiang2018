<template>
    <div class="section-cont" :id="id">
                <nav id="gooey-round" class="navimenu">
                    <input type="checkbox" class="menu-open" name="menu-open3" :id="id2">
                    <label class="open-button" :for="id2"
                           style="width: 30px; height: 30px; background-color: rgb(50,55,109); line-height: 30px;">
                    </label>
                    <a href="#" class="gooey-menu-item item"><i class="fa fa-train"></i> </a>
                    <a href="#" class="gooey-menu-item item"><i class="fa fa-train"></i> </a>
                    <a href="#" class="gooey-menu-item item"><i class="fa fa-train"></i> </a>
                </nav>
    </div>
</template>
<script>
    import  '@/util/meun/gooey.min.js'
    import '../../util/meun/gooey.min.css'
    import jQuery from "jquery"
    export default {
      props: {
      },
      created(){
      },
      computed:{

      },
      data(){
            return {
                id:Math.floor(Math.random()*10000),
                id2:Math.floor(Math.random()*1000),
                myGooey:null
            }
      },
      mounted(){
          // this.myGooey = new gooey("#gooey-round", {
          //     bgColor: "#68d099",
          //     contentColor: "white",
          //     style: "circle",
          //     horizontal: {
          //         menuItemPosition: "spaced"
          //     },
          //     vertical: {
          //         menuItemPosition: "spaced",
          //         direction: "up"
          //     },
          //     circle: {
          //         radius: 85
          //     },
          //     margin: "small",
          //     size: 80,
          //     bounce: true,
          //     bounceLength: "small",
          //     transitionStep: 100,
          //     hover: "#5dbb89"
          // })
          console.log(777,jQuery);

          jQuery(`#${this.id}`).gooeymenu({
              bgColor: "rgba(57,71,148,.9)",
              contentColor: "white",
              style: "circle",
              horizontal: {
                  menuItemPosition: "Glue"
              },
              vertical: {
                  menuItemPosition: "Glue",
                  direction: "up"
              },
              circle: {
                  radius: 37
              },
              margin: "medium",
              size: 32,
              // bounce: true,
              // bounceLength: "small",
              transitionStep: 100,
              hover: "rgb(50,55,99)",
          });
      },
      methods:{

      },
      components:{
      }
    }
</script>
<style  lang="scss">
    .section-cont{
        width:0;
        height:0;
        position:absolute;
        left: 243px;
        top: 134px;
        z-index: 99999;
        padding:0!important;
        min-width:0!important;
        min-height:0!important;
        .navimenu{
            padding:0!important;
            min-width:0!important;
            min-height:0!important;
        }
        .gooeySVG{
            width:0;
            height:0;
        }
        .item1{
            width: 30px; height: 30px;
            color: white;
            background-color: rgb(104, 208, 153);
            line-height: 30px;
            transition-timing-function: cubic-bezier(0.8, 0.84, 0.44, 1.3);
            transform: translate3d(26.2664px, -80.8398px, 0px);
            transition-duration: 100ms;
        }
    }

</style>





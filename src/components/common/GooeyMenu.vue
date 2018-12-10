<template>
    <div class="section-cont" id="round" style="margin:200px 500px">
        <div class="row">
            <div class="col-md-5 col-xs-12 col-sm-6 round-example">
                <nav id="gooey-round" class="navimenu" style="filter: url(&quot;#goo-shadow2&quot;);">
                    <input type="checkbox" class="menu-open" name="menu-open3" id="menu-open3">
                    <label class="open-button" for="menu-open3"
                           style="width: 80px; height: 80px; background-color: rgb(104, 208, 153); line-height: 80px;">
                            <span class="burger burger-1"
                                  style="font-size: 0.8em; width: 40px; height: 3px; left: 20px;"></span>
                        <span class="burger burger-2"
                              style="font-size: 0.8em; width: 40px; height: 3px; left: 20px;"></span>
                        <span class="burger burger-3"
                              style="font-size: 0.8em; width: 40px; height: 3px; left: 20px;"></span>
                    </label>

                    <a href="#"
                       class="gooey-menu-item"
                       style="width: 80px; height: 80px; color: white; background-color: rgb(104, 208, 153); line-height: 80px; transition-timing-function: cubic-bezier(0.8, 0.84, 0.44, 1.3); transform: translate3d(26.2664px, -80.8398px, 0px); transition-duration: 100ms;">
                        <i class="fa fa-train"></i> </a>
                    <a href="#"
                       class="gooey-menu-item"
                       style="width: 80px; height: 80px; color: white; background-color: rgb(104, 208, 153); line-height: 80px; transition-timing-function: cubic-bezier(0.8, 0.84, 0.44, 1.3); transform: translate3d(-68.7664px, -49.9617px, 0px); transition-duration: 200ms;">
                        <i class="fa fa-bicycle"></i> </a>
                    <a href="#"
                       class="gooey-menu-item"
                       style="width: 80px; height: 80px; color: white; background-color: rgb(104, 208, 153); line-height: 80px; transition-timing-function: cubic-bezier(0.8, 0.84, 0.44, 1.3); transform: translate3d(-68.7664px, 49.9617px, 0px); transition-duration: 300ms;">
                        <i class="fa fa-rocket"></i> </a>
                    <a href="#"
                       class="gooey-menu-item"
                       style="width: 80px; height: 80px; color: white; background-color: rgb(104, 208, 153); line-height: 80px; transition-timing-function: cubic-bezier(0.8, 0.84, 0.44, 1.3); transform: translate3d(26.2664px, 80.8398px, 0px); transition-duration: 400ms;">
                        <i class="fa fa-automobile"></i> </a>
                    <a href="#"
                       class="gooey-menu-item"
                       style="width: 80px; height: 80px; color: white; background-color: rgb(104, 208, 153); line-height: 80px; transition-timing-function: cubic-bezier(0.8, 0.84, 0.44, 1.3); transform: translate3d(85px, 0px, 0px); transition-duration: 500ms;">
                        <i class="fa fa-plane"></i> </a>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
    import  '@/util/meun/gooey.min.js'
    import '../../util/meun/gooey.min.css'
    import $ from "jquery"
    export default {
      props: {
      },
      created(){
      },
      computed:{

      },
      data(){
            return {
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
          console.log(777,$("#round"));

          // $("#gooey-round").gooeymenu({
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
          // });
      },
      methods:{

      },
      components:{
      }
    }
</script>
<style  lang="scss">

</style>





<template>
    <div  :id="id"  class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <slot name="one"></slot>
            </div>
            <div class="swiper-slide">
                <slot name="two"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    export default {
      props: {
          slideNum:{
              type:Number,
              default:1
          }
      },
      created(){

      },
      computed:{

      },
      data(){
            return {
                id:Math.floor(Math.random()*10000),
                mySwiper:null,
            }
      },
      mounted(){
          this.mySwiper = new Swiper(`#${this.id}`, {
              // direction : 'vertical',
              autoHeight:true,
              centeredSlides: true,
              observer:true,
              observeParents:true,
              spaceBetween:43
          })
      },
      methods:{
          change_slide(num){//改变当前页
              this.mySwiper.slideTo(num, 500, false);
          },
      },
      components:{
      }
    }
</script>
<style  lang="scss">

</style>





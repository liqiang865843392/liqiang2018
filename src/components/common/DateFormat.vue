<template>
  <div class="date-format">
    <!--<span class="time"></span>-->
    <!--{{week}}-->
    <span class="date">{{year}}-{{month}}-{{day}}   {{hour}}:{{minute}}:{{second}}</span>
  </div>
</template>
<script>
    export default {
      props:{

      },
      created(){
      },
      computed:{
        hour(){
          return this.h < 10 ? '0'+ this.h : this.h;
        },
        minute(){
          return this.m < 10 ? '0'+ this.m : this.m;
        },
        second(){
              return this.s < 10 ? '0'+ this.s : this.s;
        }
      },
      data(){
          return {
              year:'',
              month:'',
              day:'',
              week:'',
              h:'',
              m:'',
              s:'',
              timer:null,//定时器
          }
      },
      mounted(){
        this._getDate();
        this.timer = setInterval(()=>{//每隔一分钟请求一次
          this._getDate();
        },1000)
      },
      destroyed(){
          clearInterval(this.timer);
      },
      methods:{
          _getDate(){
            let date = new Date();
            let weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
            var mynum=date.getDay();//返回值存储在变量mynum中
            this.year = date.getFullYear();    //获取当前年份
            this.month = date.getMonth()+1;      //获取当前月份
            this.day = date.getDate();          //获取当前日
            this.week = weekday[mynum];          //获取当前星期几
            this.h = date.getHours();          //获取小时
            this.m = date.getMinutes();        //获取分钟
            this.s = date.getSeconds();        //获取秒
          }
      }
    }
</script>
<style scoped lang="scss">
  .date-format{
    /*width:278px;*/
    /*height:84px;*/
    /*font-size:16px;*/
    background-size: cover;
    font-family:'张海山锐谐体';
    .time{
      /*position:absolute;*/
      left:40px;
      top: 10px;
      /*font-size:35px;*/
    }
    .date{
      /*position:absolute;*/
      /*left: 29px;*/
      /*bottom: 10px;*/
    }
  }
</style>




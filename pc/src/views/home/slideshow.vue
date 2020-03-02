<template>
  <div class="swiper">
   <div class="B_c" @click="news_img()">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="NewImg in newImg" :key="NewImg.id"><img :src="NewImg" alt=""></div>
          <!-- <div class="swiper-slide"><img src="../assets/imges/sp_2.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../assets/imges/sp_3.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../assets/imges/sp_4.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../assets/imges/sp_5.jpg" alt=""></div> -->
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
import HttpRequest, {baseURL} from '@/utils/utils'
import Swiper from 'swiper';
export default {
  data () {
    return {
      newImg:''
    }
  },
  methods: {
    news_img(){
        HttpRequest.get(baseURL + '/auto_2020/data/index').then(res => {
           this.newImg = res.news_first_img
        })
      }
  },
  created(){
    this.news_img()
  },
  mounted(){
     var mySwiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            clickable :true
          },
          speed:1000,
          autoplay:{
            disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
            delay: 3000, // 自动切换的时间间隔（单位ms）
          },
          loop:true,
      })
  }
}
</script>

<style lang="stylus" scoped>
.B_c{
        height: 200px;
        width:350px;
        background-color: black;
        float: right;
        // margin:0 0 0 85px;
        position absolute;
        top:-10px;
        left:-40px;
        position: relative;
        img{
          height: 260px;
          width: 450px;
        }
        .swiper-pagination{
          position: absolute;
          left: 250px;
          top:380px;
          span{
            width: 15px;
            height: 15px;
          }
        }
      }
</style>

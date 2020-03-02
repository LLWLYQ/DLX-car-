<template>
  <div class="home-box">
    <!-- 开始位置 -->
    <div class="MgT20 recommend Mg15">
      <div class="baseW-tit flexBox">
        <h1>展会介绍</h1>
        <span> | </span>
        <p>The exhibition to introduce</p>
      </div>
      <div class="recommend-txt">
        <p v-html="result.content"></p>
      </div>
    </div>
    <!-- 演讲嘉宾 -->
    <div class="MgT20 guests Mg15" style="border:1px solid #f2f4f9">
      <div class="baseW-tit flexBox" style="margin-bottom:20px">
        <h1>新闻中心</h1>
        <span> | </span>
        <p>Press center</p>
        <router-link to="/news" class="more">更多 + </router-link>
      </div>
      <div class="guests-list  center " style="margin-bottom:20px;height:180px;z-index:10;border-bottom:1px solid #f2f4f9;">
          <div style="height:60px;width:90%;margin:auto;" v-for="NewList in newList" :key="NewList.id" class="newslist">
            <router-link :to="{name:'details', query: {newsID:NewList.id}}">
              <p>{{NewList.title}}</p>
            </router-link>
          </div>
      </div>
      <div class="baseW-tit flexBox">
        <h1>往届参会嘉宾</h1>
        <span> | </span>
        <p>Previous participants</p>
        <router-link to="/guest" class="more">更多 + </router-link>
      </div>
      <guest-box :data="result.member"></guest-box>
    </div>
    <!-- 组织架构 -->
    <div class="MgT20 OCbox Mg15">
      <div class="chart">
        <div class="baseW-tit flexBox">
          <h1>组织架构</h1>
          <span> | </span>
          <p>Organzization</p>
        </div>
        <div class="chart-list">
          <div class="chart-item" v-for="item in result.chart" :key="item.id">
            <span>{{item.title}} : </span>
            <p>{{item.content}}</p>
          </div>
        </div>
      </div>
      <div class="conf">
        <div class="baseW-tit flexBox">
          <h1>会议论坛</h1>
          <span> | </span>
          <p>Conference</p>
        </div>
        <div class="conf-box">
          <p>2020中国智能汽车技术大会</p>
          <p>2020中国新能源汽车技术峰会</p>
          <p>EMC国际电磁兼容及测试技术峰会</p>
        </div>
      </div>
    </div>
    <!-- 赞助单位 -->
    <!-- <div class="Sponsors MgT20 Mg15">
      <div class="baseW-tit flexBox">
        <h1>赞助单位</h1>
        <span> | </span>
        <p>Sponsors</p>
      </div>
      <div class="Sponsors-swiper">
        <swiper :options="SponsorsOption" ref="mySwiper" class="Swiper">
          <swiper-slide class="Sponsors-item" v-for="item in 5" :key="item">
            <img src="" alt="">
          </swiper-slide>
        </swiper>
      </div>
    </div> -->
    <!-- 往届回顾 -->
    <div class="Previous MgT20 Mg15">
      <div class="baseW-tit flexBox">
        <h1>往届回顾</h1>
        <span> | </span>
        <p>Previous reviews</p>
      </div>
      <div class="Previous-swiper">
        <swiper :options="PreviousOption" ref="mySwiper" class="Swiper">
          <!-- slides -->
          <swiper-slide class="Previous-item" v-for="(item, index) in result.review" :key="index">
            <img v-lazy="item" alt="">
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- 参会企业 -->
    <div class="company-auth MgT20 Mg15">
      <div class="baseW-tit flexBox">
        <h1>参会企业</h1>
        <span> | </span>
        <p>Attending enterprises</p>
      </div>
      <div class="company-img MgT20">
        <img v-lazy="result.attending_enterproses" alt="">
      </div>
    </div>
    <!-- 媒体合作 -->
    <div class="MediaPartners MgT20 Mg15">
      <div class="baseW-tit flexBox">
        <h1>媒体合作</h1>
        <span> | </span>
        <p>Media Partners</p>
      </div>
      <div class="media-list MgT30 flexBox">
        <router-link to="" v-for="item in result.meida" :key="item">
          <img v-lazy="item" alt="">
        </router-link>
      </div>
    </div>
    <div style="height: 140px"></div>
  </div>
</template>

<script>
import GuestBox from '@/base/guest-box/guest-box'
import HttpRequest, {baseURL} from '@/utils/utils'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      result: "",
      // newsID:'',
      newList:'',
      SponsorsOption: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      PreviousOption: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  },
  mounted () {
    this.getResult()
  },
  methods: {
     newsList () {
       HttpRequest.get(baseURL + '/auto_2020/data/index').then(res => {
            console.log(res)
            this.newList = res.news
            res.news.map((item) =>{
            // this.newsID  = item.id
            console.log(this.newList)
         })
      })
    },
    getResult () {
      HttpRequest.get(baseURL + '/auto_2020/data/index').then(res => {
        this.result = res
      })
    },
  },
  created(){
    this.newsList()
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide,
    GuestBox
  }
};
</script>


<style lang="stylus">
  @import '~swiper/dist/css/swiper.css'

  .newslist a:hover{
    color:#0ba2db;
  }
  // 简介
  .recommend {
    .recommend-txt {
      margin: 15px 0;
      align-self: flex-start;
      font-size: 12px;
      color: #7d7d7d;
      line-height: 25px;
      text-indent: 30px;
      p {
        margin-bottom: 10px;
      }
    }
  }

  // 演讲嘉宾
  .guests

  // 组织
  .OCbox
    .chart
      .chart-list
        padding 15px
        border 1px solid #dedede
        .chart-item
          display flex
          justify-content flex-start
          align-items flex-start
          font-size 1rem /* 16/16 */
          margin-bottom 40px
          span
            display block
            width 75px
            text-align right
            line-height 30px
            color #00a0ea
            margin-right 10px
          p
            flex 1
            line-height 30px
    .conf
      margin-top 20px
      .conf-box
        padding: 25px
        border: 1px solid #dedede;
        box-sizing border-box
        p
          font-size: 1rem /* 16/16 */;
          margin-bottom: 20px;
          color: #727171;
  .Sponsors
    .Sponsors-swiper
      margin-top 15px
      position relative
      .Sponsors-item
        height 30px
        img
          width 100%
          height 100%
          background #4e8d9f
  .Previous
      .Previous-swiper
        margin-top 30px
        position relative
        .Previous-item
          height 90px
          img
            width 100%
            height 100%
            background #4e8d9f
  .company-auth
    .company-img
      img
        width 100%
        border-left 1px solid #dedede
  .MediaPartners
    .media-list
      flex-flow wrap
      a
        width 5.625rem /* 90/16 */
        height 2.1875rem /* 35/16 */
        margin-right 10px
        margin-bottom 10px
        &:nth-child(4n)
          margin-right 0
        img
          width 100%
</style>


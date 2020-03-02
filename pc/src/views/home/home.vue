<template>
  <div class="home-box">
    <!-- 开始位置 -->
    <div class="flexBox between MgT50 recommend">
      <div class="recommend-img">
        <img v-lazy="result.image" alt="">
      </div>
      <div class="recommend-txt">
        <p v-html="result.content"></p>
      </div>
      <div class="recommend-btn">
        <router-link to="/company_zanzhu" class="linkBtn">
          <i class="icon edit"></i>
          <div class="txt">
            <h2>我要赞助</h2>
            <p>I want to sponsor</p>
          </div>
        </router-link>
        <router-link to="/company_login" class="linkBtn">
          <i class="icon people"></i>
          <div class="txt">
            <h2>我要参展</h2>
            <p>I want to show</p>
          </div>
        </router-link>
        <router-link to="/guest_login" class="linkBtn">
          <i class="icon user"></i>
          <div class="txt">
            <h2>我要参观</h2>
            <p>I want to sponsor</p>
          </div>
        </router-link>
        <div class="timeOut">
          <h1 class="tit">
            <span>倒计时</span>
          </h1>
          <p>{{result.end_time}}</p>
        </div>
      </div>
    </div>
    <!-- 演讲嘉宾 -->
    <div class="MgT50 guests">
      <div class="baseW-tit flexBox" >
        <h1>新闻中心</h1>
        <span> | </span>
        <p>Press center</p>
        <router-link to="/news" class="more">更多 + </router-link>
      </div>
      <div class="guests-list  center " style="margin-bottom:30px;height:100px;z-index:10;padding:10px 0 0px 0;">
        <!-- <slideshow ></slideshow> -->
          <div style="height:30px;margin-left:20px;" v-for="NewList in newList" :key="NewList.id" class="newslist">
            <router-link :to="{name:'details', query: {newsID:NewList.id}}">
              <div style="font-size:14px;">{{NewList.title}}</div>
              <!-- <p style="text-indent:15px">{{NewList.content}}</p> -->
            </router-link>
          </div>
      </div>
      <div class="baseW-tit flexBox">
        <h1>往届参会嘉宾</h1>
        <span> | </span>
        <p>Previous participants</p>
        <router-link to="/guest" class="more">更多 + </router-link>
      </div>
      <div class="guests-list flexBox center">
        <div v-for="item in result.member" :key="item.id" class="guests-item">
          <div class="avatar">
            <img v-lazy="item.img" alt="">
          </div>
          <div class="info">
            <h1 class="name">姓名: {{item.name}}</h1>
            <p>{{item.desc}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 组织架构 -->
    <div class="MgT50 OCbox flexBox">
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
          <a href="http://20auto-testing.861718.com/home" target="_blank">2020中国智能汽车技术大会</a>
          <a href="http://2020new_energy.861718.com" target="_blank">2020中国新能源汽车技术峰会</a>
          <a href="http://2020emc.861718.com"  target="_blank">EMC国际电磁兼容及测试技术峰会</a>
        </div>
      </div>
    </div>
    <!-- 赞助单位 -->
    <!-- <div class="Sponsors MgT50">
      <div class="baseW-tit flexBox">
        <h1>赞助单位</h1>
        <span> | </span>
        <p>Sponsors</p>
      </div>
      <div class="Sponsors-swiper">
        <swiper :options="SponsorsOption" ref="mySwiper" class="Swiper">
          <swiper-slide class="Sponsors-item" v-for="(item, index) in result.sponsors" :key="index">
            <img v-lazy="item" alt="">
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev Sponsors-prev" slot="button-prev"></div>
        <div class="swiper-button-next Sponsors-next" slot="button-next"></div>
      </div>
    </div> -->
    <!-- 往届回顾 -->
    <div class="Previous MgT50">
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
        <div class="swiper-button-prev Previous-prev" slot="button-prev"></div>
        <div class="swiper-button-next Previous-next" slot="button-next"></div>
      </div>
    </div>
    <!-- 参会企业 -->
    <div class="company-auth MgT50">
      <div class="baseW-tit flexBox">
        <h1>参会企业</h1>
        <span> | </span>
        <p>Attending enterprises</p>
      </div>
      <div class="company-img MgT30">
        <img v-lazy="result.attending_enterproses" alt="">
      </div>
    </div>
    <!-- 媒体合作 -->
    <div class="MediaPartners MgT50">
      <div class="baseW-tit flexBox">
        <h1>媒体合作</h1>
        <span> | </span>
        <p>Media Partners</p>
      </div>
      <div class="media-list MgT30 flexBox">
        <router-link to="" v-for="(item, index) in result.meida" :key="index">
          <img v-lazy="item" alt="">
        </router-link>
      </div>
    </div>
    <div style="height: 280px"></div>
  </div>
</template>

<script>
import HttpRequest, {baseURL} from '@/utils/utils'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import slideshow from '../home/slideshow'

export default {
  data () {
    return {
      result: "",
      // newsID:'',
      newList:'',
      SponsorsOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.Sponsors-next',
          prevEl: '.Sponsors-prev',
        }
      },
      PreviousOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.Previous-next',
          prevEl: '.Previous-prev',
        }
      }
    }
  },
  mounted () {
    this.getResult()
  },
  methods: {
    newsList () {
       HttpRequest.get(baseURL + '/auto_2020/data/index').then(res => {
            console.log(res.banner_pc)
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
    slideshow
  }
};
</script>


<style lang="stylus">
  @import '~swiper/dist/css/swiper.css'
  // 简介
  .newslist:hover{
    color:#0ba2db;
    // text-decoration:underline;
  }
  .newslist div:hover{
    color:#0ba2db;
  }
  .recommend {
    width: 100%;
    height: 300px;
    overflow: hidden;

    .recommend-img {
      flex: 0 0 500px;
      height: 100%;

      img {
        width: 100%;
      }
    }

    .recommend-txt {
      flex: 1;
      margin: 0 15px;
      align-self: flex-start;
      font-size: 14px;
      color: #7d7d7d;
      line-height: 25px;
      text-indent: 30px;

      p {
        margin-bottom: 10px;
      }
    }

    .recommend-btn {
      flex: 0 0 150px;
      align-self: flex-start;
      border: 1px solid #d7d7d7;
      box-sizing: border-box;

      .linkBtn {
        // display: flex;
        text-align :center;
        justify-content: flex-start;
        align-items: center;
        height: 50px;
        background: url('http://lib.albers.top/activity/car/icon_bg.png') left center no-repeat;
        margin: 15px;

        .icon {
          flex: 0 0 50px;
          display: block;
          height: 100%;
          background-position: center center;
          background-repeat: no-repeat;

          &.edit {
            background-image: url('http://lib.albers.top/activity/car/icon_edit.png');
          }

          &.user {
            background-image: url('http://lib.albers.top/activity/car/icon_user.png');
          }

          &.people {
            background-image: url('http://lib.albers.top/activity/car/icon_people.png');
          }
        }

        .txt {
          // margin-left: 15px

          h2 {
            font-size: 16px;
            color: #656565;
          }

          p {
            font-size: 12px;
            color: #bdbbbd;
          }
        }
      }

      .timeOut {
        h1 {
          font-size: 14px;
          color: #c4c4c4;
          text-align: center;
          position: relative;
          margin-bottom: 13px;

          span {
            background: #fff;
            padding: 0 15px 0 15px;
          }

          &::after {
            content: '';
            width: 100%;
            height: 1px;
            background: #cccccc;
            position: absolute;
            left: 0;
            top: 50%;
            z-index: -1;
          }
        }

        p {
          font-size: 25px;
          font-weight: bold;
          color: #fff;
          text-align: center;
          width: 100%;
          height: 53px;
          line-height: 53px;
          background: url('http://lib.861718.com/activity/car/blue_bg.png') left center no-repeat;
        }
      }
    }
  }

  // 演讲嘉宾
  .guests
    .guests-list
      padding: 30px 0;
      border: 1px solid #ccc;
    .guests-item
      flex: 0 0 170px;
      & + .guests-item
        margin-left: 50px;
      .avatar
        width: 170px;
        height: 170px;
        border: 1px solid #0ba2db;
        border-radius: 100%;
        box-sizing: border-box;
        margin-bottom: 20px;
        overflow: hidden;
        img
          width: 140px;
          border: 1px solid #ccc;
          border-radius: 100%;
          margin: 14px auto;
      .info
        h1.name
          font-size: 18px;
          font-weight: normal;
          color: #686868;
          text-align: center;
          margin-bottom: 15px;
        p
          font-size: 14px;
          text-align: center;
          width 170px;
          height 21px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
  // 组织
  .OCbox
    .chart
      flex: 0 0 650px;
      align-self: flex-start;
      .chart-list
        padding 15px
        border 1px solid #dedede
        .chart-item
          display flex
          justify-content flex-start
          align-items flex-start
          font-size 16px
          margin-bottom 40px
          span
            display block
            width 115px
            text-align right
            line-height 30px
            color #00a0ea
            margin-right 10px
          p
            flex 1
            line-height 30px
    .conf
      flex: 1;
      align-self: flex-start;
      margin-left: 30px;
      .conf-box
        height 562px
        padding: 25px;
        border: 1px solid #dedede;
        box-sizing border-box
        a
          display block;
          font-size: 18px;
          margin-bottom: 20px;
          color: #727171;
  .Sponsors
    .Sponsors-swiper
      margin-top 30px
      position relative
      .Sponsors-item
        height 110px
        img
          width 100%
          height 100%
          background #4e8d9f
  .Previous
      .Previous-swiper
        margin-top 30px
        position relative
        .Previous-item
          height 180px
          img
            width 100%
            height 100%
            background #4e8d9f
  .swiper-button-prev
    left -35px
  .swiper-button-next
    right -35px
  .company-auth
    .company-img
      img
        width 100%
        border-left 1px solid #dedede
  .MediaPartners
    .media-list
      flex-flow wrap
      a
        margin-right 13px
        margin-bottom 13px
        &:nth-child(7n)
          margin-right 0
</style>


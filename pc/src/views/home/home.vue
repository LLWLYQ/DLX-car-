<template>
  <div class="home-box">
    <!-- 会议介绍 -->
    <div class="info" id="one">
      <div class="base-tit MgT30">
        <h1>会议介绍</h1>
      </div>
      <div class="MgT30 info-box" v-html="result.introduce"></div>
    </div>
    <!-- 大会亮点 -->
    <div class="light MgT30" >
      <h1>大会亮点</h1>
      <div class="btn-box">
        <a class="top" @click="changeLightBox(0)" :class="currentLightIndex === 0 ? 'cur': '' ">专业演讲</a>
        <a class="left" @click="changeLightBox(1)" :class="currentLightIndex === 1 ? 'cur': '' ">专家云集</a>
        <a class="right" @click="changeLightBox(2)" :class="currentLightIndex === 2 ? 'cur': '' ">产业链互动</a>
      </div>
      <p v-if="currentLightIndex === 0">（议题方向：1、汽车电磁兼容技术现状与发展趋势； 2、汽车整车电磁兼容开发及测试技术； 3、新能源汽车电子及充电装置EMC检测技术； 4、电动汽车电磁兼容的新挑战——人体电磁防护； 5、电动汽车BMS（电池管理系统）EMS测试技术； 6、PCB的EMC设计技术； 7、新能源汽车高压电驱动系统电磁兼容关键技术； 8、复杂电磁环境车辆适应性研究； 9、电动汽车EMC分析与优化； 10、汽车电子EMC设计仿真测试一体化解决方案； 11、新能源汽车测试多功能暗室设计方案）</p>
      <p v-if="currentLightIndex === 1">（诚邀知名研究机构权威专家、国内外著名企业的高端代表及政府领导莅临会议，重量级嘉宾、技术专家、企业高层发布演讲或参与讨论）</p>
      <p v-if="currentLightIndex === 2">（大会邀请知名企业厂家展示新产品新技术，及电磁兼容产业链上中下游高层人士参会。）</p>
    </div>
    <!-- 嘉宾 -->
    <div class="guests" id="two">
      <div class="base-tit MgT30">
        <h1>会议嘉宾</h1>
        <router-link to="/guest">更多 >> </router-link>
      </div>
      <guests :data="result.guest" />
    </div>
    <!-- 会议流程 -->
    <div class="flow" id="three">
      <div class="base-tit MgT30">
        <h1>会议流程</h1>
      </div>
      <h1 class="block">主题方向</h1>
      <div class="flexBox">
        <p class="flowItem">汽车电磁兼容技术现状与发展趋势</p>
        <p class="flowItem">汽车整车电磁兼容开发及测试技术</p>
        <p class="flowItem">新能源汽车电子及充电装置EMC检测技术</p>
        <p class="flowItem">电动汽车电磁兼容的新挑战——人体电磁防护</p>
        <p class="flowItem">电动汽车BMS（电池管理系统）EMS测试技术</p>
        <p class="flowItem">PCB的EMC设计技术</p>
        <p class="flowItem">新能源汽车高压电驱动系统电磁兼容关键技术</p>
        <p class="flowItem">复杂电磁环境车辆适应性研究</p>
        <p class="flowItem">电动汽车EMC分析与优化</p>
        <p class="flowItem">汽车电子EMC设计仿真测试一体化解决方案</p>
        <p class="flowItem">新能源汽车测试多功能暗室设计方案</p>
      </div>
      <div class="MgT50 flowTable" v-html="result.huiyi_flow"></div>
    </div>
    <!-- 参会对象 -->
    <div class="object" id="four">
      <div class="base-tit">
        <h1>参会对象</h1>
      </div>
      <div class="object-box">
        <img :src="result.huiyi_obj" alt="">
      </div>
    </div>
    <!-- 展示范围 -->
    <div class="scope MgT70" id="five">
      <div class="base-tit">
        <h1>展示范围</h1>
      </div>
      <h1 class="tit MgT30">一切用于通信、汽车、电子、电器、仪器仪表、电力等领域的电磁兼容设备、测试仪器、材料及元件等</h1>
      <div class="Scope-swiper" @mouseout="changeSocpeMore" >
        <swiper :options="ScopeOption" ref="mySwiper" class="Swiper">
            <!-- slides -->
            <swiper-slide
              class=""
              v-for="(item, index) in result.fanwei"
              :key="index"
            >
            <div class="Scope-item" @mouseover="changeSocpeMore(index)">
              <img class="banner" :src="item.img" alt="">
              <div class="Scope-default">
                <img src="http://lib.albers.top/activity/emc/swiper-icon.png" alt="">
                <p>{{item.title}}</p>
              </div>
              <transition name="slideTop">
                <div class="Scope-more" v-if="currentSocpeIndex === index">
                  <h1>{{item.title}}</h1>
                  <p v-html="item.inc"></p>
                </div>
              </transition>
            </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev scope-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next scope-next swiper-button-white" slot="button-next"></div>
      </div>
    </div>
    <!-- 往届精彩 -->
    <div class="previous MgT50" id="six">
      <div class="base-tit">
        <h1>往届精彩</h1>
      </div>
      <div class="Previous-swiper" >
        <swiper :options="PreviousOption" ref="mySwiper" class="Swiper">
            <!-- slides -->
            <swiper-slide
              class=""
              v-for="(item, index) in result.wangjie"
              :key="index"
            >
              <img :src="item" alt="">
            </swiper-slide>
        </swiper>
        <div class="swiper-button-prev previous-prev " slot="button-prev"></div>
        <div class="swiper-button-next previous-next " slot="button-next"></div>
      </div>
    </div>
    <!-- 组织架构 -->
    <div class="chart MgT70" id="seven">
      <div class="base-tit">
        <h1>组织架构</h1>
      </div>
      <div class="chart-box MgT30">
        <div class="chart-item" v-for="(item, index) in result.jiagou">
          <span>{{item.title}}：</span>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
    <!-- 位置指引 -->
    <div class="map" id="eight">
      <div class="base-tit">
        <h1>位置指引</h1>
      </div>
      <div class="map-img MgT30">
        <img :src="result.guide" alt="" width="100%">
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="contact MgT70" id="nine">
      <div class="base-tit">
        <h1>联系我们</h1>
      </div>
      <div class="contact-box flexBox MgT30">
        <div class="contact-item" v-for="(item, index) in result.contact">
          <h1>{{item.title}}</h1>
          <p>联系人：{{item.contact}}</p>
          <p>电话：{{item.tel}}</p>
          <p>手机：{{item.mobile}}</p>
          <p>邮箱：{{item.mail}}</p>
        </div>
      </div>
    </div>
    <!-- 同期展会 -->
    <div class="Synchro MgT70" id="ten" v-if="result.exhibit">
      <div class="base-tit">
        <h1>同期展会</h1>
      </div>
      <a href="http://www.861718.com/emc_2018/" target="_blank"></a></a> {{result.exhibit.title || ''}}</a>
      <a href="http://20auto-testing.861718.com" target="_blank">
        <img :src="result.exhibit.banner || ''" alt="">
      </a>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import HttpRequest, {baseURL} from '@/util/utils'

import Guests from '@/common/guest/guest'
export default {
  data : () => ({
    result: '',
    currentSocpeIndex: -1,
    currentLightIndex: 0,
    ScopeOption: {
        slidesPerView: 4,
        // spaceBetween: 20,
        navigation: {
          nextEl: '.scope-next',
          prevEl: '.scope-prev',
        }
      },
    PreviousOption: {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.previous-next',
        prevEl: '.previous-prev',
      }
    }
  }),
  mounted () {
    this.getResult()
  },
  methods: {
    getResult () {
      HttpRequest.get(baseURL + '/index/accept/act').then(res => {
        this.result = res
        console.log(this.result)
      })
    },
    changeSocpeMore (index) {
      this.currentSocpeIndex = index
      thid.cirrentSocpeIndex == index--
    },
    changeSocpeMoreOut () {
      this.currentSocpeIndex = -1
    },
    changeLightBox (index) {
      this.currentLightIndex = index
    }
  },
  components: {
    Guests,
    swiper,
    swiperSlide
  }
}
</script>


<style lang="stylus">
@import '~swiper/dist/css/swiper.css'
  .info-box
    font-size 16px
    text-indent 37px
    line-height 25px
  .light
    width 100%
    height 630px
    background url('http://lib.861718.com/activity/emc/emc_bg.png') left top no-repeat
    background-size cover
    h1
      font-size 36px
      font-weight normal
      color #bc8932
      text-align center
      padding-top 30px
    .btn-box
      width 800px
      height 300px
      position relative
      margin 40px auto 30px
      a
        position absolute
        font-size 22px
        cursor pointer
        &.top
          display block
          width 100%
          text-align center
        &.left
          left 20px
          bottom 50%
        &.right
          right 20px
          bottom 50%
        &.cur
          color #bc8932
    p
      font-size 16px
      color #333
      padding 0 90px 0
      line-height 30px
      margin auto
      box-sizing border-box
  .guests
    margin-top 70px
  .flow
    h1.block
      font-size 16px
      width 110px
      padding 10px 17px
      border 1px solid #bb954e
      box-sizing border-box
      margin 30px 0 10px
    .flexBox
      flex-flow wrap
      .flowItem
        font-size 16px
        padding 10px 17px
        border 1px solid #bb954e
        margin-right 16px
        box-sizing border-box
        margin-top 12px
    .flowTable
      table
        width 100%
        border 1px solid #978c77
        background linear-gradient(#e0ceae 30%, #fff 70%)
      tr
        text-align center
        height 50px
  .object
    margin-top 50px
    .object-box img
      width 100%
      margin-top 30px
  .scope
    h1.tit
      width 100%
      height 100px
      font-size 18px
      font-weight normal
      background linear-gradient(#c09d5b 30%, #fff 70%)
      border-radius 10px
      padding 10px 40px
      box-sizing border-box
    .Scope-swiper
      position relative
      .Scope-item
        position relative
        height 415px
        img.banner
          position absolute
          left 0
          top 0
          width 100%
          height 100%
          z-index -1
        .Scope-default
          z-index 10
          background: rgba(0,0,0,.3);
          height: 100%;
          img
            margin 0 auto
            padding-top 130px
          p
            font-size 16px
            color #fff
            text-align center
            &::before
              content ""
              display block
              width 20px
              height 2px
              background #fff
              margin 10px auto 20px
        .Scope-more
          position absolute
          top 0
          width 100%
          height 100%
          background rgba(156, 110, 26, .8)
          h1
            font-size 16px
            color #fff
            text-align center
            padding-top 25px
          p
            font-size 14px
            color #fff
            padding 10px 20px
  .Previous-swiper
    position relative
    .swiper-container
      margin 30px 60px 0
      .swiper-slide
        height 165px
        img
          width 100%
          height 100%
          background #ddcaa6
  .chart
    .chart-item
      font-size 18px
      display flex
      justify-content flex-start
      align-items flex-start
      margin-bottom 40px
      span
        display block
        color #bb954e
      p
        flex 1
        margin-left 20px
        line-height 30px
  .contact
    .contact-item
      flex 0 0 50%
      h1
        font-size 18px
        height 55px
        margin-bottom 25px
        overflow hidden
      p
        font-size 16px
        margin-bottom 16px
  .Synchro
    a
      display block
      font-size 18px
      font-weight bold
      color #bb954e
      margin 30px 0
    img
      width 100%
      height 200px
      background #b2b2b2
</style>

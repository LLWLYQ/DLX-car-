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
      <p>（议题新颖：1、汽车电磁兼容技术现状与发展趋势； 2、汽车整车电磁兼容开发及测试技术； 3、新能源汽车电子及充电装置EMC检测技术； 4、电动汽车电磁兼容的新挑战——人体电磁防护； 5、电动汽车BMS（电池管理系统）EMS测试技术； 6、PCB的EMC设计技术； 7、新能源汽车高压电驱动系统电磁兼容关键技术； 8、复杂电磁环境车辆适应性研究； 9、电动汽车EMC分析与优化； 10、汽车电子EMC设计仿真测试一体化解决方案； 11、新能源汽车测试多功能暗室设计方案。）</p>
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
      <div class="MgT30 flowTable" v-html="result.huiyi_flow"></div>
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
    <div class="scope MgT30" id="five">
      <div class="base-tit">
        <h1>展示范围</h1>
      </div>
      <h1 class="tit MgT30">一切用于通信、汽车、电子、电器、仪器仪表、电力等领域的电磁兼容设备、测试仪器、材料及元件等</h1>
      <div class="Scope-swiper">
        <div class="Scope-item flexBox" v-for="item in result.fanwei">
          <h1>{{item.title}}</h1>
          <div v-html="item.inc"></div>
        </div>
      </div>
    </div>
    <!-- 往届精彩 -->
    <div class="previous MgT30" id="six">
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
    <div class="chart MgT30" id="seven">
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
    <div class="contact MgT30" id="nine">
      <div class="base-tit">
        <h1>联系我们</h1>
      </div>
      <div class="contact-box MgT30">
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
    <div class="Synchro MgT30" id="ten" v-if="result.exhibit">
      <div class="base-tit">
        <h1>同期展会</h1>
      </div>
      <a href="" >上届峰会 {{result.exhibit.title || ''}}</a>
      <img :src="result.exhibit.banner || ''" alt="">
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
      HttpRequest.get(baseURL + '/index/accept').then(res => {
        this.result = res
        console.log(this.result)
      })
    },
    changeSocpeMore (index) {
      this.currentSocpeIndex = index
    },
    changeSocpeMoreOut () {
      this.currentSocpeIndex = -1
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
  .home-box
    margin 0 15px;
  .info-box
    font-size 1rem /* 16/16 */
    text-indent 37px
    line-height 25px
  .light
    width 100%
    background url('http://lib.861718.com/activity/emc/emc_bg_mobile.png') left top no-repeat
    background-size 100% 100%
    p
      width 100%
      font-size .75rem /* 12/16 */
      color #333
      padding 220px 8px 0
      line-height 25px
      margin auto
      height 325px
      overflow hidden
      box-sizing border-box
  .guests
  .flow
    h1.block
      font-size 1rem /* 16/16 */
      width 100px
      padding 10px 17px
      border 1px solid #bb954e
      box-sizing border-box
      margin 30px 0 10px
    .flexBox
      flex-flow wrap
      .flowItem
        font-size .75rem /* 12/16 */
        padding 10px 10px
        border 1px solid #bb954e
        margin-right 5px
        box-sizing border-box
        margin-top 12px
    .flowTable
      table
        font-size .75rem /* 12/16 */
        width 100%
        border 1px solid #978c77
        background linear-gradient(#e0ceae 30%, #fff 70%)
      tr
        text-align center
        height 50px
  .object
    margin-top 30px
    .object-box img
      width 100%
      margin-top 30px
  .scope
    h1.tit
      width 100%
      height 60px
      font-size .875rem /* 14/16 */
      font-weight normal
      background linear-gradient(#f5f3e9 90%, #fff 10%)
      border-radius 10px
      padding 10px 20px
      box-sizing border-box
    .Scope-swiper
      background #ddcaa6
      .Scope-item
        border-bottom 1px solid #fff
        div
            flex 1
            padding 8px
            border-left 1px solid #fff
          p
            font-size .75rem /* 12/16 */
            color #333
        h1
          font-size .875rem /* 14/16 */
          color #333
          width 120px
          text-align center
  .Previous-swiper
    position relative
    .swiper-container
      margin 30px 0 0
      .swiper-slide
        height 80px
        img
          width 100%
          height 100%
          background #ddcaa6
  .chart
    .chart-item
      font-size 1rem /* 16/16 */
      display flex
      justify-content flex-start
      align-items flex-start
      margin-bottom 40px
      span
        display block
        color #bb954e
        line-height 30px
      p
        flex 1
        margin-left 20px
        line-height 30px
  .contact
    .contact-item
      margin-bottom 15px
      h1
        font-size 1rem /* 16/16 */
        margin-bottom 15px
        overflow hidden
      p
        font-size 1rem
        margin-bottom 16px
  .Synchro
    a
      display block
      font-size 1rem /* 16/16 */
      font-weight bold
      color #bb954e
      margin 30px 0
    img
      width 100%
      height 200px
      background #b2b2b2
</style>

<template>
  <div class="review-box">
    <level-title title="历届论坛回顾" subTitle="Previous Conference" :navTitle="navTitle" />
    <div class="review-list-box flexBox">
      <level-left @changeNav="changeNav" :currentIndex="currentIndex" :mettingNav="reviewNav"></level-left>
      <div class="review-list">
        <!-- 往届回顾 -->
        <div class="review-link" v-if="currentIndex === 0">
          <a href="http://19auto-testing.861718.com/home" target="_blank">2019中国智能汽车技术大会 </a>
          <a href="http://new_energy.861718.com/home" target="_blank">2019中国新能源汽车测试技术峰会 </a>
          <a href="http://2019emc.861718.com/home" target="_blank">EMC国际电磁兼容及测试技术峰会 </a>
          <a :href="result.luntanhuigu.imca" target="_blank">IMCA2018中国智能汽车测试测量技术大会暨中国汽车质量与测试展</a>
          <a :href="result.luntanhuigu.emc" target="_blank">EMC国际电磁兼容及测试技术峰会</a>
          <a :href="result.luntanhuigu.car6" target="_blank">2016汽车测试测量核心技术大会</a>
        </div>
        <!-- 往届嘉宾 -->
        <guest v-if="currentIndex === 1" :data="result.past_guest"/>
        <!-- 听众分析 -->
        <div class="review-analyze" v-if="currentIndex === 2">
          <img :src="result.pro_listener" alt="">
        </div>
        <!-- 参会企业 -->
        <div class="review-company" v-if="currentIndex === 3">
          <img :src="result.join_company" alt="">
        </div>
        <!-- 听众回顾 -->
        <div class="review-feedback" v-if="currentIndex === 4">
          <img :src="result.feedback" alt="">
        </div>
        <!-- 往届精彩回顾 -->
        <div class="review-img-list flexBox" v-if="currentIndex === 5">
          <img :src="item" alt="" v-for="(item, index) in result.jingcai" :key="index">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LevelTitle from '@/base/level/level'
import LevelLeft from '@/base/level-left/level-left'
import Guest from '@/base/guest/guest'
import {reviewNav} from '@/utils/utils'
import HttpRequest, {baseURL} from '@/utils/utils'

export default {
  data: () => ({
    result: "",
    navTitle: '历届回顾',
    currentIndex: 0,
    reviewNav
  }),
  mounted () {
    this.getResult()
  },
  methods: {
    getResult () {
      HttpRequest.get(baseURL + '/auto_2020.php/index/accept/act/review').then(res => {
        console.log(res)
        this.result = res
      })
    },
    changeNav (item, index) {
      this.currentIndex = index
      this.navTitle = item.name
    }
  },
  components: {
    LevelTitle,
    LevelLeft,
    Guest
  }
}
</script>

<style lang="stylus">
  .review-list-box
    margin-top 60px
    .review-list
      flex 1
      margin-left 50px
      align-self flex-start
      .review-link
        a
          display block
          font-size 18px
          color #fff
          text-align center
          width 600px
          height 60px
          line-height 60px
          background #1792ce
          margin-bottom 50px
          border-radius 10px
          &:nth-child(2)
            background #ff7d14
          &:last-child
            background #29826e
      .review-company
        img
          width 100%
      .review-img-list
        flex-flow wrap
        img
          flex 0 0 215px
          height 150px
          margin-right 15px
          margin-left 20px
          margin-bottom 15px
          background #1792ce
          // &:nth-child(4n)
          //   margin-right 0px
</style>


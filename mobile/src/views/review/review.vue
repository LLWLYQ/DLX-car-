<template>
  <div class="review-box Mg15">
    <!-- 往届回顾 -->
    <div class="review-link">
      <level-title title="历届论坛回顾" subTitle="Previous Conference" />
          <a href="http://19auto-testing.861718.com/home" target="_blank">2019中国智能汽车技术大会 </a>
          <a href="http://new_energy.861718.com/home" target="_blank">2019中国新能源汽车测试技术峰会 </a>
          <a href="http://2019emc.861718.com/home" target="_blank">EMC国际电磁兼容及测试技术峰会 </a>
          <a :href="result.luntanhuigu.imca" target="_blank">IMCA2018中国智能汽车测试测量技术大会暨中国汽车质量与测试展</a>
          <a :href="result.luntanhuigu.emc" target="_blank">EMC国际电磁兼容及测试技术峰会</a>
          <a :href="result.luntanhuigu.car6" target="_blank">2016汽车测试测量核心技术大会</a>
    </div>
    <div class="old-guest">
      <level-title title="往届参会嘉宾" subTitle="Previous participants" />
      <!-- 往届嘉宾 -->
      <guest :data="result.past_guest"/>
    </div>
    <!-- 听众分析 -->
    <div class="review-analyze">
      <level-title title="专业听众分析" subTitle="The audience analysis" />
      <img :src="result.pro_listener" alt=""  width="100%">
    </div>
    <!-- 参会企业 -->
    <div class="review-company">
      <level-title title="参会企业" subTitle="Attending enterprises" />
      <img :src="result.join_company" alt="" width="100%">
    </div>
    <!-- 听众回顾 -->
    <div class="review-feedback" >
      <level-title title="听众反馈" subTitle="The audience feedback" />
      <img :src="result.feedback" alt="" width="100%">
    </div>
    <!-- 往届精彩回顾 -->
    <div class="review-img-list ">
      <level-title title="往届精彩回顾" subTitle="Past highlights" />
      <div class="flexBox img-list">
        <img :src="item" alt="" v-for="(item, index) in result.jingcai" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
import LevelTitle from '@/base/level/level'
import Guest from '@/base/guest/guest'
import HttpRequest, {baseURL} from '@/utils/utils'

export default {
  data: () => ({
    result: "",
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
    Guest
  }
}
</script>

<style lang="stylus">
  .review-link
    a
      display block
      font-size .875rem /* 14/16 */
      color #fff
      text-align center
      width 90%
      height 35px
      line-height 35px
      background #1792ce
      margin 0 auto 25px
      border-radius 5px
      &:nth-child(2)
        background #ff7d14
      &:last-child
        background #29826e
  .review-img-list
    .img-list
      flex-flow wrap
      img
        flex 0 0 23%
        height 55px
        width auto
        margin-right 9px
        margin-bottom 15px
        background #1792ce
        &:nth-child(4n)
          margin-right 0px
</style>


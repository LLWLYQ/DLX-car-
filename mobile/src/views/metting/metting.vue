<template>
  <div class="metting-box Mg15">
    <!-- 描述 -->
    <div class="column-msg ">
      <level-title title="会议介绍" subTitle="Conference overview"/>
      <p v-html="result.inc" class="inc"></p>
    </div>
    <!-- 嘉宾 -->
    <div class="guest">
      <level-title title="演讲嘉宾" subTitle="Speakers" >
          <router-link to="/guest">更多 + </router-link>
      </level-title>
      <guest-box :data="result.now" />
    </div>
    <!-- 往届嘉宾 -->
    <div class="guest">
      <level-title title="往届演讲嘉宾" subTitle="Previous Speakers">
        <router-link to="/guest">更多 + </router-link>
      </level-title>
      <guest-box :data="result.past" />
    </div>
    <!-- 议题方向 -->
    <div class="column-arrow">
      <level-title title="议题方向" subTitle="Topics"/>
      <div class="col-arrow-item" v-for="(item, index) in result.direction" :key="item.id">
        <h1>{{item.title}}</h1>
        <div class="content">
          <p v-for="(child, index) in item.content" :key="index">{{child}}</p>
        </div>
        <div class="col-hr"></div>
      </div>
    </div>
    <!-- 议程安排 -->
    <div class="column-plan" v-if="currentIndex === 4 && result.plan" >
      <div class="plan-btn flexBox">
        <p @click="planTableChange(0)"><span>2019中国智能汽车测试测量<br />技术大会</span></p>
        <p @click="planTableChange(1)"><span>2019中国车联网测试测量<br />技术峰会</span></p>
        <p @click="planTableChange(2)"><span>2019中国新能源汽车测试<br />技术峰会</span></p>
        <p @click="planTableChange(3)"><span>2019EMC国际电磁兼容及测试<br />技术峰会</span></p>
      </div>
      <div class="plan-table" v-if="planTable === 0" v-html="result.plan.yicheng_auto"></div>
      <div class="plan-table" v-if="planTable === 1" v-html="result.plan.car_net"></div>
      <div class="plan-table" v-if="planTable === 2" v-html="result.plan.auto_vehicle"></div>
      <div class="plan-table" v-if="planTable === 3" v-html="result.plan.emc"></div>
    </div>
  </div>
</template>

<script>
import LevelTitle from '@/base/level/level'
import GuestBox from '@/base/guest-box/guest-box'
import {mettingNav} from '@/utils/utils'
import HttpRequest, {baseURL} from '@/utils/utils'

export default {
  data: () => ({
    result: "",
    navTitle: '会议介绍',
    currentIndex: 0,
    planTable: 0,
    mettingNav
  }),
  mounted () {
    this.getResult()
  },
  methods: {
    // 表格切换
    planTableChange (index) {
      this.planTable = index
    },
    getResult () {
      HttpRequest.get(baseURL + '/auto_2020.php/index/accept/act/meeting').then(res => {
        console.log(res)
        this.result = this._normalizeResult(res)
      })
    },
    _normalizeResult (res) {
      let content = res
      content.direction.forEach(item => {
        item.content = item.content.split("\n")
      })
      return res
    }
  },
  components: {
    LevelTitle,
    GuestBox
  }
}
</script>


<style lang="stylus">
  .column-msg
    p.inc
      font-size 1rem /* 16/16 */
      line-height 35px
      text-indent 30px
  .column-arrow
    flex-flow wrap
    .col-hr
      margin 25px 0
      height 1px
      width 100%
      background #e6e6e6
    .col-arrow-item
      flex 0 0 50%
      align-self flex-start
      h1
        font-size 1rem /* 16/16 */
        margin-bottom 35px
      .content
        p
          font-size .875rem /* 14/16 */
          line-height 25px
  .column-plan
    .plan-btn
      flex-flow wrap
      p
        font-size .75rem /* 12/16 */
        color #fff
        text-align center
        flex 0 0 50%
        height 80px
        padding 7px 3px 0
        background #0ba2db
        box-sizing border-box
        border-right 1px solid #fff
        cursor pointer
        &:nth-child(2)
          background #047847
        &:nth-child(3)
          background #f6590c
        &:last-child
          background #bd9d18
        span
          display block
          font-weight bold
          margin-bottom 5px
    .plan-table
      table
        font-size .75rem /* 12/16 */
        text-align center
        border 1px solid #9c9c9c
        box-sizing border-box
        tr
          height 40px
          &.big
            height 65px
          &.red
            color #ff0000
</style>

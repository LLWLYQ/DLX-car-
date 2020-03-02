<template>
  <div class="chart-box">
    <level-title title="大会组织架构" subTitle="organization" :navTitle="navTitle" />
    <div class="chart-list-box flexBox">
      <level-left :currentIndex="currentIndex" :mettingNav="chartNav"></level-left>
      <div class="chart-list">
        <div class="chart-item flexBox" v-for="item in result.chart" :key="item.id">
          <span>{{item.title}}：</span>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LevelTitle from '@/base/level/level'
import LevelLeft from '@/base/level-left/level-left'
import HttpRequest, {baseURL} from '@/utils/utils'

export default {
data: () => ({
    result: "",
    navTitle: '大会组织架构',
    currentIndex: 0,
    chartNav: [
      {name: '大会组织架构'}
    ]
  }),
  mounted () {
    this.getResult()
  },
  methods: {
    getResult () {
      HttpRequest.get(baseURL + '/auto_2020.php/index/accept/act/chart').then(res => {
        console.log(res)
        this.result = res
      })
    },
  },
  components: {
    LevelTitle,
    LevelLeft
  }
}
</script>

<style lang="stylus">
  .chart-list-box
    margin-top 60px
    .chart-list
      flex 1
      margin-left 50px
      .chart-item
        align-items baseline
        margin-bottom 35px
        p
          flex 1
          font-size 16px
        span
          display block
          font-size 16px
          color #0ba2db
          margin-right 20px
</style>

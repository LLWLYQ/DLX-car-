<template>
  <div class="chart-box Mg15">
    <level-title title="大会组织架构" subTitle="organization" />
    <div class="chart-item flexBox" v-for="item in result.chart" :key="item.id">
      <span>{{item.title}}：</span>
      <p>{{item.content}}</p>
    </div>
  </div>
</template>

<script>
import LevelTitle from '@/base/level/level'
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
      HttpRequest.get(baseURL + '/auto_2020.php/index/accept/act/chart').then(res => {
        this.result = res
      })
    },
  },
  components: {
    LevelTitle,
  }
}
</script>

<style lang="stylus">
  .chart-item
    align-items baseline
    margin-bottom 35px
    p
      flex 1
      font-size 1rem /* 16/16 */
    span
      display block
      font-size 1rem /* 16/16 */
      color #0ba2db
      margin-right 20px
</style>

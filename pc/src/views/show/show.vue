<template>
  <div class="show-box">
    <level-title title="展览概况" subTitle="Exhibition Overview" :navTitle="navTitle" />
    <div class="show-list-box flexBox">
      <level-left @changeNav="changeNav" :currentIndex="currentIndex" :mettingNav="showNav"></level-left>
      <div class="show-list">
        <div class="show-msg" v-if="currentIndex === 0">
          <p v-html="result.situation"></p>
        </div>
        <div class="show-scope" v-if="currentIndex === 1">
          <img :src="result.range" alt="">
        </div>
        <div class="show-charge" v-if="currentIndex === 2">
          <img :src="result.inc" alt="">
        </div>
        <div class="show-map" v-if="currentIndex === 3">
          <img :src="result.traffic" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LevelTitle from '@/base/level/level'
import LevelLeft from '@/base/level-left/level-left'
import {showNav} from '@/utils/utils'
import HttpRequest, {baseURL} from '@/utils/utils'

export default {
  data: () => ({
    result: "",
    navTitle: '展览概况',
    currentIndex: 0,
    showNav
  }),
  mounted () {
    this.getResult()
  },
  methods: {
    getResult () {
      HttpRequest.get(baseURL + '/auto_2020.php/index/accept/act/show').then(res => {
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
    LevelLeft
  }
}
</script>


<style lang="stylus">
  .show-list-box
    margin-top 60px
    .show-list
      flex 1
      margin-left 50px
      align-self flex-start
      .show-msg
        p
          font-size 16px
          line-height 30px
          text-indent 30px
</style>

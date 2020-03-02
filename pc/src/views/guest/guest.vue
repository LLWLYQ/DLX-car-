<template>
  <div class="guest-box">
    <level-title title="演讲嘉宾" subTitle="Speakers" :navTitle="navTitle" />
    <div class="guest-list-box flexBox">
      <level-left @changeNav="changeNav" :currentIndex="currentIndex" :mettingNav="guestNav"></level-left>
      <div class="guest-list-main">
        <guest v-if="currentIndex === 0" :data="result.now"></guest>
        <guest v-if="currentIndex === 1" :data="result.past"></guest>
      </div>
    </div>
  </div>
</template>

<script>
import LevelTitle from '@/base/level/level'
import LevelLeft from '@/base/level-left/level-left'
import Guest from '@/base/guest/guest'
import {guestNav} from '@/utils/utils'
import HttpRequest, {baseURL} from '@/utils/utils'

export default {
  data: () => ({
    result: "",
    navTitle: '演讲嘉宾',
    currentIndex: 0,
    guestNav
  }),
  mounted () {
    this.getResult()
  },
  methods: {
    getResult () {
      HttpRequest.get(baseURL + '/auto_2020.php/index/accept/act/guest').then(res => {
        this.result = res
        console.log(this.result)
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
  .guest-list-box
    margin-top 60px
    .guest-list-main
      flex 1
      margin-left 50px
</style>

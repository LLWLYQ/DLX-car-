<template>
  <div class="guest-box Mg15">
    <div class="new-guest">
      <level-title title="演讲嘉宾" subTitle="Speakers" />
      <guest :data="result.now"></guest>
    </div>
    <div class="old-guest">
      <level-title title="往届演讲嘉宾" subTitle="Previous Speakers" />
      <guest :data="result.past"></guest>
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
      HttpRequest.get(baseURL + '/auto_2020.php/index/accept/act/guest').then(res => {
        this.result = res
      })
    }
  },
  components: {
    LevelTitle,
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

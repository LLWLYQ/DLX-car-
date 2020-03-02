<template>
  <div class="show-box Mg15">
    <div class="show-msg">
      <level-title title="展览概况" subTitle="Exhibition Overview"/>
      <p v-html="result.situation" class="inc"></p>
    </div>
    <div class="show-scope">
      <level-title title="展品范围" subTitle="Exhibits"/>
      <img :src="result.range" alt="">
    </div>
    <div class="show-charge" >
      <level-title title="收费介绍" subTitle="Pricelist"/>
      <img :src="result.inc" alt="">
    </div>
    <div class="show-map">
      <level-title title="展馆及交通" subTitle="Pavilions and traffic"/>
      <img :src="result.traffic" alt="">
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
      HttpRequest.get(baseURL + '/auto_2020.php/index/accept/act/show').then(res => {
        console.log(res)
        this.result = res
      })
    }
  },
  components: {
    LevelTitle
  }
}
</script>


<style lang="stylus">
  .show-msg
    p.inc
      font-size 1rem /* 16/16 */
      line-height 30px
      text-indent 30px
  img
    width 100%
</style>

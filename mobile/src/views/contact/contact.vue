<template>
  <div class="contact-box Mg15">
    <level-title title="致电我们" subTitle="Call me" />
    <div class="contact-item" v-for="item in result.contact" :key="item.id">
      <h1>{{item.title[0]}}<br v-if="item.title.length > 0">{{item.title[1]}}</h1>
      <p>联系人：{{item.contact}}</p>
      <p>电话：{{item.tel}}</p>
      <p>手机：{{item.mobile}}</p>
      <p>邮箱：{{item.mail}}</p>
    </div>
  </div>
</template>
<script>
import LevelTitle from '@/base/level/level'
import HttpRequest, {baseURL} from '@/utils/utils'

export default {
  data: () => ({
    result: '',
  }),
  mounted () {
    this.getResult()
  },
  methods: {
    getResult () {
      HttpRequest.get(baseURL + '/auto_2020.php/index/accept/act/contact').then(res => {
        this.result = this._normalizeResult(res)
      })
    },
    _normalizeResult (res) {
      let content = res
      content.contact.forEach(item => {
        item.title = item.title.split(" ")
      })
      return res
    }
  },
  components: {
    LevelTitle,
  }
}
</script>


<style lang="stylus">
  .contact-item
    margin-top 20px
    h1
      font-size 1.125rem /* 18/16 */
      height 54px
      margin-bottom 22px
      overflow hidden
    p
      font-size 1rem /* 16/16 */
      margin-bottom 15px
</style>

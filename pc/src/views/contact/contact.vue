<template>
  <div class="contact-box">
    <level-title title="联系我们" subTitle="Contact us" :navTitle="navTitle" />
    <div class="contact-list-box flexBox">
      <level-left :currentIndex="currentIndex" :mettingNav="contactNav"></level-left>
      <div class="contact-list flexBox">
        <div class="contact-item" v-for="item in result.contact" :key="item.id">
          <h1>{{item.title[0]}}<br v-if="item.title.length > 0">{{item.title[1]}}</h1>
          <p>联系人：{{item.contact}}</p>
          <p>电话：{{item.tel}}</p>
          <p>手机：{{item.mobile}}</p>
          <p>邮箱：{{item.mail}}</p>
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
    result: '',
    navTitle: '联系我们',
    currentIndex: 0,
    contactNav: [
      {name: '联系我们'}
    ]
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
    LevelLeft
  }
}
</script>


<style lang="stylus">
  .contact-list-box
    margin-top 60px
    .contact-list
      flex 1
      margin-left 50px
      .contact-item
        flex 1
        h1
          font-size 18px
          height 54px
          margin-bottom 22px
          overflow hidden
        p
          font-size 16px
          margin-bottom 15px
</style>

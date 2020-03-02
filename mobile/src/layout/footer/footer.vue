<template>
  <footer class="Mg15">
    <div class="footer">
      <div class="web-map">
        <router-link :to="item.url" v-for="item in link" :key="item.name">{{item.name}}</router-link>
      </div>
      <p>Copyright © 2000-2018 <a href="http://www.861718.com" target="_blank">861718.com</a>
          All rights reserved 版权所有 © 广州德禄讯信息科技有限公司</p>
    </div>
    <router-view name="login"></router-view>
    <div class="loginBtn flexBox">
      <button @click="loginChange(1)">我要赞助</button>
      <button @click="loginChange(2)">我要参展</button>
      <button @click="loginChange(3)">我要参观</button>
    </div>
  </footer>
</template>


<script>
import nav from '@/utils/nav'

export default {
  data() {
    return {
      'link': nav
    }
  },
  methods: {
    loginChange (index) {
      this.$emit("loginChange", index)
    }
  }
}
</script>


<style lang="stylus">
/* 底部 */
  .footer
    font-size .75rem /* 12/16 */
    font-weight normal
    color #a3a3a3
    text-align center
    margin-bottom 55px
    padding-top 30px
    margin-top 70px
    border-top 1px #ccc dashed
    .web-map
      display flex
      justify-content center
      align-items center
      margin 0 auto 15px
      text-align center
      a
        display block
        color #333
        margin-right 5px
        & + a
          padding-left 5px
          border-left 1px solid rgba(0,0,0,.3)
    p > a
      color: inherit
  .loginBtn
    position fixed
    left 0
    bottom 0
    width 100%
    height 45px
    line-height 45px
    z-index 100
    button
      flex 33.33333%
      height 100%
      font-size 1rem /* 14/16 */
      color #fff
      text-align center
      border 0px
      background url('http://lib.861718.com/activity/car/blue_bg.png') left center no-repeat
      outline none
</style>

<template>
  <footer>
    <div class="footer">
      <div class="web-map baseW-1100">
        <router-link :to="item.url" v-for="item in link" :key="item.name">{{item.name}}</router-link>
      </div>
      <p>Copyright © 2006-2020 <a href="http://www.861718.com" target="_blank">861718.com</a>
          All rights reserved 版权所有 © 广州德禄讯信息科技有限公司</p>
    </div>
    <a class="goBack" @click="goTop"></a>
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
    goTop() {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>


<style lang="stylus">
/* 底部 */
  .footer
    font-size 16px
    font-weight normal
    color #a3a3a3
    text-align center
    margin-bottom 36px
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
        margin-right 20px
        & + a
          padding-left 20px
          border-left 1px solid rgba(0,0,0,.3)
    p > a
      color: inherit
  .goBack
    position: fixed;
    right: 85px;
    bottom: 95px;
    width: 55px;
    height: 55px;
    background: url("http://lib.861718.com/activity/car/goback.png") no-repeat;
    background-size: 55px;

</style>

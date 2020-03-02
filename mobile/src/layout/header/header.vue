<template>
  <div class="header">
    <div class="banner">
        <img v-lazy="'http://lib.861718.com/activity/car/banner_mobile.gif'" alt="" />
    </div>
    <div class="nav">
      <router-link :to="item.url" v-for="item in link" :key="item.name" :class="item.name === '首页' ? 'home-icon' : ''">
        {{item.name !== '首页' ? item.name : ''}}
      </router-link>
    </div>
  </div>
</template>

<script>
import nav from '@/utils/nav'

export default {
  data() {
    return {
      'link': nav
    }
  }
}
</script>


<style lang="stylus">
  .banner
    width 100%
    height 230px
    img
      width 100%
      height 100%
  .nav
    display flex
    justify-content space-between
    align-items center
    width 100%
    height 2.5rem /* 40/16 */
    line-height: 2.5rem /* 40/16 */
    a
      flex 1
      display block
      font-size .75rem /* 12/16 */
      font-weight bold
      text-align center
      color #333
      background #f2f4f9
      border-right 1px solid rgba(255,255,255,.3)
      &.home-icon
        flex 0 0 32px
        height 2.5rem /* 40/16 */
        background #0ba2db url("http://lib.861718.com/activity/car/icon_home.png") center center no-repeat
        background-size 15px 15px
      &.exact-Active-link,
      &:hover
        color #fff
        background-color #0ba2db
</style>

<template>
  <div class="header">
    <div class="banner">
        <img :src="banner_pc" alt="" />
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
import HttpRequest, {baseURL} from '@/utils/utils'
export default {
  data() {
    return {
      'link': nav,
      banner_pc:''
    }
  },
  methods:{
    diu(){
      HttpRequest.get(baseURL + '/auto_2020/data/index').then(res => {
            this.banner_pc = res.banner_pc
            console.log(this.banner_pc)

      })
    }

  },
  created(){
    this.diu()
  }
}
</script>


<style lang="stylus">
  .banner
    width 100%
    height 500px
    img
      width 100%
      height 100%
  .nav
    display flex
    justify-content space-between
    align-items center
    width 100%
    height 70px
    line-height: 70px
    a
      flex 1
      display block
      font-size 16px
      font-weight bold
      text-align center
      color #333
      background #f2f4f9
      border-right 1px solid rgba(255,255,255,.3)
      &.home-icon
        flex 0 0 70px
        height 100%
        background #0ba2db url("http://lib.861718.com/activity/car/icon_home.png") center center no-repeat
      &.exact-Active-link,
      &:hover
        color #fff
        background-color #0ba2db
</style>

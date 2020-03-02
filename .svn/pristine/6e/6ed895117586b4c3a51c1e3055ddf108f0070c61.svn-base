<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
    <transition name="fade">
      <div class="loginBox" v-if="login > 0">
        <div class="company_login" v-if="login == 1">
          <company-login @close="loginClose"></company-login>
        </div>
        <div class="guest_login" v-if="login == 2">
          <guest-login @close="loginClose"></guest-login>
        </div>
      </div>
    </transition>
    <Footer @loginChange="loginChange"></Footer>
  </div>
</template>

<script>
import Header from '@/layouts/header'
import Footer from '@/layouts/footer'
import CompanyLogin from '@/views/company_login/company_login'
import GuestLogin from '@/views/guest_login/guest_login'

export default {
  metaInfo: {
    title: 'EMC'
  },
  data () {
    return {
      login: 0
    }
  },
  methods: {
    loginChange (index) {
      this.login = index
    },
    loginClose () {
      this.login = 0
    }
  },
  components: {
    Header,
    Footer,
    CompanyLogin,
    GuestLogin
  }
}
</script>

<style lang="stylus">
  .app
    max-width 750px
    margin 0 auto
  .loginBox
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background rgba(0,0,0,.3)
    z-index: 1001
</style>

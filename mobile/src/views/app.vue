<template>
  <div class="baswW-750">
    <header-box></header-box>
    <router-view></router-view>
    <transition name="fade">
      <div class="loginBox" v-if="login > 0">
        <div class="company_zanzhu" v-if="login == 1">
          <company-zanzhu @close="loginClose"></company-zanzhu>
        </div>
        <div class="company_login" v-if="login == 2">
          <company-login @close="loginClose"></company-login>
        </div>
        <div class="guest_login" v-if="login == 3">
          <guest-login @close="loginClose"></guest-login>
        </div>
      </div>
    </transition>
    <footer-box @loginChange="loginChange"></footer-box>
  </div>
</template>

<script>
import HeaderBox from '@/layout/header/header'
import FooterBox from '@/layout/footer/footer'
import CompanyLogin from '@/views/company_login/company_login'
import CompanyZanzhu from '@/views/company_zanzhu/company_zanzhu'
import GuestLogin from '@/views/guest_login/guest_login'
export default {
  metaInfo: {
    title: '汽车大会'
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
    HeaderBox,
    FooterBox,
    CompanyLogin,
    CompanyZanzhu,
    GuestLogin
  }
}
</script>

<style lang="stylus" scope>
  .loginBox
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background rgba(0,0,0,.3)
    z-index: 1001
</style>

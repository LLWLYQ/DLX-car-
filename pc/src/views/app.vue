<template>
  <div class="baseW-1100">
    <header-box></header-box>
    <router-view></router-view>
    <footer-box></footer-box>
  </div>
</template>

<script>
import HeaderBox from '@/layout/header/header'
import FooterBox from '@/layout/footer/footer'
export default {

  components: {
    HeaderBox,
    FooterBox
  }
}
</script>

<style lang="stylus">

</style>

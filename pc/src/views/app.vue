<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/layouts/header'
import Footer from '@/layouts/footer'
export default {
  metaInfo: {
    title: 'EMC'
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus">
  .app
    width 1100px
    margin 0 auto
</style>

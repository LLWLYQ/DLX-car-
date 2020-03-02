<template>
  <div class="level-nav">
    <p v-for="(item, index) in mettingNav"
      :key="item.name"
      :class="currentIndex === index ? 'cur' : '' "
      @click="changeNav(item, index)"
    >
      {{item.name}}
    </p>
  </div>
</template>


<script>
export default {
  props: {
    currentIndex: {
      type: Number,
      default: 0
    },
    mettingNav: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeNav (item, index) {
      this.$emit('changeNav', item, index)
    }
  }
}
</script>


<style lang="stylus">
  .level-nav
    flex 0 0 140px
    align-self flex-start
    p
      font-size 16px
      text-align center
      width 100%
      height 60px
      line-height 60px
      background #e6e6e6
      border-radius 5px
      margin-bottom 2px
      &.cur
        color #fff
        background #0ba2db
</style>

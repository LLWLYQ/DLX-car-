<template>
  <div class="guest-list flexBox">
    <div class="guest-item" v-for="item in data" :key="item.id">
      <img v-lazy="item.img" alt="" class="avatar">
      <h1 class="name">姓名：{{item.name}}</h1>
      <p class="desc">{{item.desc}}</p>
      <p class="title">演讲主题 : {{item.theme}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>


<style lang="stylus">
  .guest-list
    flex-flow wrap
    .guest-item
      flex 0 0 165px
      height 360px
      padding 20px 13px 15px
      margin-right 15px
      margin-bottom 15px
      border 1px solid #c0c0c0
      border-radius 5px
      box-sizing border-box
      &:nth-child(2n)
        margin-right 0
      .avatar
        width 120px
        height 120px
        border 1px solid #c0c0c0
        border-radius 100%
        margin 0 auto 15px
      .name
        font-size 1.125rem /* 18/16 */
        font-weight normal
        text-align center
        margin-bottom 15px
      p
        font-size .875rem /* 14/16 */
        font-weight normal
        color #a0a0a0
        &.desc
          height 95px
          line-height 23px
          margin-bottom 8px
          overflow hidden
        &.title
          height 40px
          overflow hidden
</style>

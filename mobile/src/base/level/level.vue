<template>
  <div class="level-box flexBox MgT30">
    <div class="level-left">
      <h1 class="title">{{title}}</h1>
      <p class="subTitle">{{subTitle}}</p>
    </div>
    <div class="level-right">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      default: '默认标题'
    },
    subTitle: {
      type: String,
      default: '副标题'
    }
  }
}
</script>

<style lang="stylus">
  .level-box
    margin-bottom 15px
    .level-left
      flex 0 0 200px
      h1.title
        font-size 22px
        font-weight normal
        color #0ba2db
      p.subTitle
        font-size 12px
        color #d7d7d7
    .level-right
      flex 1
      font-size 12px
      text-align right
      a
        color #0ba2db
</style>


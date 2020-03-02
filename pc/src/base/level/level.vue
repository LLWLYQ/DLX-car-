<template>
  <div class="level-box flexBox MgT50">
    <div class="level-left">
      <h1 class="title">{{title}}</h1>
      <p class="subTitle">{{subTitle}}</p>
    </div>
    <div class="level-right">
      <p>首页<span> > </span> {{title}} <span v-if="navTitle !== ''"> > </span> {{navTitle}}</p>
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
    },
    navTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus">
  .level-box
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
      align-self flex-end
      p
        font-size 14px
        color #464646
        margin 0 10px
</style>


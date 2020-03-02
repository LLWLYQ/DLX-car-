<template>
  <div class="guest-list flexBox">
    <div class="guest-item" v-for="item in data" :key="item.id" @click="openLightBox(item)">
      <img v-lazy="item.img" alt="" class="avatar">
      <h1 class="name">姓名：{{item.name}}</h1>
      <p class="desc">{{item.desc}}</p>
      <p class="title">演讲主题 : {{item.theme}}</p>
    </div>
    <!-- 灯箱 -->
    <div class="light-box" v-if="lightBox">
      <div class="light-box-main" >
        <div class="light-box-msg flexBox">
          <img alt="" :src="result.img">
          <div class="light-box-txt">
            <h1>姓名: <span class="name">{{result.name}}</span></h1>
            <p class="desc">简介：
              {{result.desc}}
            </p>
          </div>
        </div>
        <div class="light-box-tit flexBox">
          <h1>演讲主题</h1>
          <p>{{result.theme}}</p>
        </div>
        <a href="javascript:void(0);" class="light-box-close" @click="closeLightBox"></a>
      </div>
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
  },
  data () {
    return {
      lightBox: false,
      result: ""
    }
  },
  methods: {
    openLightBox(item) {
      this.result = item
      this.lightBox = true
    },
    closeLightBox () {
      this.result = ""
      this.lightBox = false
    }
  }
}
</script>


<style lang="stylus">
  .guest-list
    flex-flow wrap
    .guest-item
      flex 0 0 210px
      height 360px
      padding 20px 13px 15px
      margin-right 20px
      margin-bottom 60px
      border 1px solid #c0c0c0
      border-radius 5px
      box-sizing border-box
      &:nth-child(4n)
        margin-right 0
      .avatar
        width 120px
        height 120px
        border 1px solid #c0c0c0
        border-radius 100%
        margin 0 auto 15px
      .name
        font-size 18px
        font-weight normal
        text-align center
        margin-bottom 15px
      p
        font-size 14px
        font-weight normal
        color #a0a0a0
        &.desc
          height 95px
          line-height 23px
          margin-bottom 8px
          overflow hidden
        &.title
          height 42px
          overflow hidden
  .light-box
      position fixed
      left 0
      top 0
      width 100%
      height 100%
      z-index 1111
      background rgba(0,0,0,.5)
      .light-box-main
        width 680px
        height 380px
        padding 15px
        background #f9f9f9
        color #444
        border-radius 5px
        box-shadow 0 10px 25px rgba(0,0,0,.5)
        box-sizing border-box
        position absolute
        left 0
        top 0
        bottom 0
        right 0
        margin: auto
        .light-box-msg
          img
            width 120px
            height 120px
            border-radius 100%
        .light-box-txt
          flex 1
          margin-left 20px
          h1
            font-size 12px
            font-weight 400
            line-height 40px
          p
            font-size 12px
            line-height 24px
        .light-box-tit
          margin-top 10px
          h1
            font-size 14px
            font-weight 400
      .light-box-close
        display block
        position: absolute
        top -12px
        right -12px
        width 30px
        height 30px
        cursor pointer
        z-index 8040
        border-radius 100%
        background #fff url(http://lib.albers.top/images/icon/close_bg.png) no-repeat
</style>

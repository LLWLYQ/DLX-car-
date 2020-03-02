<template>
  <div class="guests-list flexBox center">
    <div v-for="item in data" :key="item.id" class="guests-item">
      <div class="avatar">
        <img v-lazy="item.img" alt="">
      </div>
      <div class="info">
        <h1 class="name">姓名: {{item.name}}</h1>
        <p>{{item.desc}}</p>
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
  }
}
</script>

<style lang="stylus" scoped>
  .guests-list
      padding: 30px 0;
      flex-flow wrap
    .guests-item
      text-align center
      flex: 0 0 170px
      flex-flow wrap
      margin-bottom 15px
      .avatar
        width: 150px;
        height: 150px;
        border: 1px solid #0ba2db;
        border-radius: 100%;
        box-sizing: border-box;
        margin-bottom: 20px;
        overflow: hidden;
        margin 0 auto 20px
        img
          width: 130px;
          border: 1px solid #ccc;
          border-radius: 100%;
          margin: 7px auto;
      .info
        h1.name
          font-size: 1.125rem /* 18/16 */;
          font-weight: normal;
          color: #686868;
          text-align: center;
          margin-bottom: 15px;
        p
          font-size: .875rem /* 14/16 */;
          text-align: center;
          width 150px;
          height 21px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin auto
</style>

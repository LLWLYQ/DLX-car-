<template>
  <div class="chart-box">
    <level-title title="新闻快讯" subTitle="NewsFlash" :navTitle="navTitle" />
    <div class="chart-list-box flexBox">
      <level-left :currentIndex="currentIndex" :mettingNav="chartNav"></level-left>
      <div class="chart-list">
        <ul class="chart-item flexBox" style="display:block;margin-left:20px;">
          <!-- <span>{{item.title}}：</span> -->
          <li style="width:100%;height:50px;" v-for="item in result" :key="item.id" class="NL">
            <router-link :to="{name:'details', query: {newsID:item.id}}">{{item.title}}<span style="float:right;margin-bottom:10px;">{{item.create_time}}</span> </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LevelTitle from '@/base/level/level'
import LevelLeft from '@/base/level-left/level-left'
import HttpRequest, {baseURL} from '@/utils/utils'
export default {
data: () => ({
    result: "",
    navTitle: '新闻',
    currentIndex: 0,
    chartNav: [
      {name: '新闻'}
    ]
  }),
  mounted () {
    this.getResult()
  },
  methods: {
    getResult () {
      HttpRequest.get(baseURL + '/auto_2020.php/index/accept/act/news_list').then(res => {
        console.log(res)
        this.result = res.news_list
      })
    },
  },
  components: {
    LevelTitle,
    LevelLeft,

  }
}
</script>

<style lang="stylus">
  .NL a:hover{
    color:#0ba2db;
  }
  .NL a{
    height:50px;
  }
  .NL span{
    margin-top:-10px;
    font-size :14px;
    color:#000;
  }
  .chart-list-box
    margin-top 60px
    .chart-list
      flex 1
      margin-left 50px
      .chart-item
        align-items baseline
        margin-bottom 35px
        p
          flex 1
          font-size 16px
        span
          display block
          font-size 16px
          color #0ba2db
          margin-right 20px
</style>

<template>
  <div class="chart-box">
    <div class="column-msg ">
      <level-title title="新闻快讯" subTitle="NewsFlash" :navTitle="navTitle" />
    </div>
    <div class="chart-list-box flexBox">
      <div class="chart-list">
        <ul class="chart-item flexBox" style="display:block;margin-left:20px;">
          <!-- <span>{{item.title}}：</span> -->
          <li style="width:100%;height:50px;" v-for="item in result" :key="item.id" class="NL">
            <router-link :to="{name:'details', query: {newsID:item.id}}">{{item.title}}<span style="float:right;margin-top:2px;">{{item.create_time}}</span> </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LevelTitle from '@/base/level/level'
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

  }
}
</script>

<style lang="stylus">
  .column-msg{
    margin-left 20px
  }
  .NL a:hover{
    color:#0ba2db;
  }
  .NL a{
    height:50px;
    font-size :12px;
  }
  .NL span{
    margin-top:-10px;
    font-size :12px;
    color:#000;
  }
  .chart-list-box
    .chart-list
      flex 1

      .chart-item
        align-items baseline
        margin-bottom 35px
        p
          flex 1
          font-size 16px
        span
          display block
          font-size 12px
          color #0ba2db
          margin-right 20px
</style>

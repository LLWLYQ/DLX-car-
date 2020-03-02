<template>
  <div>
    <level-title title="新闻快讯" subTitle="NewsFlash" :navTitle="navTitle" />
    <div class="chart-list-box flexBox">
      <level-left :currentIndex="currentIndex" :mettingNav="chartNav"></level-left>
      <div @click="newsDetails()" v-for="ND in NewsDetails" :key="ND.id"  class="diu">
        <h3 style="margin-left:40px;text-indent:20px;line-height:50px;">{{ND.title}}</h3>
        <p v-html="diu" style="text-align:center" class="PPP">{{diu}}</p>
        <span class="diudiu">{{ND.create_time}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import LevelTitle from '@/base/level/level'
import HttpRequest, {baseURL} from '@/utils/utils'
import LevelLeft from '@/base/level-left/level-left'

export default {
  name:'details',
  data () {
    return {
      diu:'',
      navTitle: '新闻',
      NewsDetails:'',
      currentIndex: 0,
      chartNav: [
      {name: '新闻'}
    ]
      // newsID:''
    }
  },
  methods: {
     newsDetails(){
        HttpRequest.get(baseURL + '/auto_2020.php/index/accept/act/news_detail?news_id='+this.$route.query.newsID+'').then(res => {
        console.log(res)
        this.NewsDetails = res
        this.diu = res.news_detail.content
        console.log(this.$route.query.newsID)
      })
    }
  },
  created(){
    this.newsDetails()

  },
  components: {
    LevelTitle,
    LevelLeft,

  },
  mounted() {
    // this.newsID = this.$route.query.newsID
  },
}
</script>

<style scoped lang="stylus">

.diu{
  position relative
}
.diudiu{
  position absolute
  bottom -20px
  right 0
  color #0ba2db
}
.NL a:hover{
    color:#0ba2db;
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
<style>
  .PPP img{
    display: inline;
  }
</style>

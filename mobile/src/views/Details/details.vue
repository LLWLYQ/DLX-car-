<template>
  <div>
    <div class="column-msg ">
      <level-title title="新闻快讯" subTitle="NewsFlash" :navTitle="navTitle" />
    </div>
    <div class="chart-list-box flexBox">
      <div @click="newsDetails()" v-for="ND in NewsDetails" :key="ND.id"  class="diu" style="width:90%;margin:auto;">
        <h5 style="text-indent:20px;line-height:50px;">{{ND.title}}</h5>
        <p v-html="diu" style="text-indent:20px;line-height:30px;font-size:12px;">{{diu}}
           <span class="diudiu">{{ND.create_time}}</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import LevelTitle from '@/base/level/level'
import HttpRequest, {baseURL} from '@/utils/utils'

export default {
  name:'details',
  data () {
    return {
      navTitle: '新闻',
      diu:'',
      NewsDetails:'',
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

  },
  mounted() {
    // this.newsID = this.$route.query.newsID
  },
}
</script>

<style scoped lang="stylus">
.column-msg{
    margin-left 20px
  }
.diu{
  position relative
}
.diudiu{
  position absolute
  bottom 0
  right 0
  color #0ba2db
}
.NL a:hover{
    color:#0ba2db;
  }
  .chart-list-box

    .chart-list
      flex 1
      margin-left 50px
      .chart-item
        align-items baseline
        margin-bottom 35px
        p
          flex 1
          font-size 12px
        span
          flex 1
          display block
          font-size 12px
          color #0ba2db
          margin-right 20px
</style>

<template>
  <div class="company-zanzhu-box">
    <level-title title="企业报名" subTitle="registrants" :navTitle="navTitle" />
    <div class="company-zanzhu-list flexBox">
      <level-left :currentIndex="currentIndex" :mettingNav="guestNav"></level-left>
      <div class="company-zanzhu">
        <companyAdd @submit="submit" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HttpRequest, { baseURL, Headers } from '@/utils/utils'
import LevelTitle from '@/base/level/level'
import LevelLeft from '@/base/level-left/level-left'
import companyAdd from '@/base/company-add/company-add'

export default {
  data() {
    return {
      result: '',
      navTitle: '企业报名',
      currentIndex: 0,
      guestNav: [
        {name: '企业报名'}
      ]
    }
  },
  methods: {
    submit(form) {
      const formData = new FormData()
      formData.append('company_name', form.company_name)
      formData.append('company_contract', form.company_contract)
      formData.append('company_tel', form.company_tel)
      formData.append('company_need', form.company_need)
      formData.append('picId', form.picId)
      axios.post(`${baseURL}/auto_2020.php?act=company`, formData, Headers).then((res) => {
        if (res.data.code === 1) {
          alert(res.data.msg)
        }
        if (res.data.code === 2) {
          alert(res.data.msg)
        }
      })
    }
  },
  components: {
    companyAdd,
    LevelTitle,
    LevelLeft
  }
}
</script>


<style lang="stylus">
  .company-zanzhu-list
    margin-top 60px
    .company-zanzhu
      flex 1
      margin-left 50px
</style>

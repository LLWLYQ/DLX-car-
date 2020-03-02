<template>
  <div class="loginMain">
    <div class="title flexBox between">
      <h1>企业报名</h1>
      <span @click="close"></span>
    </div>
    <div class="loginMain-box">
      <companyAdd  @submit="submit" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HttpRequest, { baseURL, Headers } from '@/util/utils'
import companyAdd from '@/common/company-add/company-add'

export default {
  data() {
    return {
      result: '',
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    submit(form) {
      const formData = new FormData()
      formData.append('company_name', form.company_name)
      formData.append('company_contract', form.company_contract)
      formData.append('company_tel', form.company_tel)
      formData.append('company_need', form.company_need)
      formData.append('picId', form.picId)
      axios.post(`${baseURL}/company`, formData, Headers).then((res) => {
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
  }
}
</script>


<style lang="stylus">

</style>

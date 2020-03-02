<template>
  <div class="loginMain">
    <div class="title flexBox between">
      <h1>个人报名</h1>
      <span @click="close"></span>
    </div>
    <div class="loginMain-box">
      <guest-add @submit="submit" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HttpRequest, { baseURL, Headers } from '@/util/utils'
import GuestAdd from '@/common/guest-add/guest-add'

export default {
  data() {
    return {
      navTitle: '个人报名',
      currentIndex: 0,
      guestNav: [
        {name: '个人报名'}
      ]
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    submit(form) {
      const formData = new FormData()
      formData.append('username', form.username)
      formData.append('phone', form.phone)
      formData.append('picId', form.picId)
      axios.post(`${baseURL}/viewer`, formData, Headers).then((res) => {
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
    GuestAdd,
  }
}
</script>

<style lang="stylus">

</style>

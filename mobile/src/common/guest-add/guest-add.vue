<template>
  <div class="login-box">
      <div class="form_Input">
        <label for="username">姓名：</label>
        <input type="text" placeholder="请填写您的姓名" required v-model="form.username">
      </div>
      <div class="form_Input">
          <label for="username">电话：</label>
          <input type="text" placeholder="请填写您的联系电话" v-model="form.phone" required>
      </div>
    <div class="form_Input">
        <label for="files">名片：</label>
        <upload
          :actions="baseURL+'/images'"
          @on-success="uploadSuccess"
        />
        <span>上传名片</span>
    </div>
    <p style="color: red;margin:0 0 10px 85px; ">提示:请上传已拍照好的图片</p>
    <button class="btn" @click="submit">提交</button>
  </div>
</template>

<script>
import upload from '@/common/upload/upload'
import { baseURL } from '@/util/utils'

export default {
  data() {
    return {
      baseURL,
      form: {
        username: '',
        phone: '',
        picId: ''
      }
    }
  },
  methods: {
    uploadSuccess(data) {
      this.form.picId = data.id
    },
    submit() {
      const validate = this.form
      if (validate.username === '') {
        alert('用户名不能为空')
      } else if (validate.mobile === '') {
        alert('手机号不能为空')
      } else {
        this.$emit('submit', this.form)
      }
    }
  },
  components: {
    upload
  }
}
</script>

<style lang="stylus" scoped>
// 登录窗口
  .login-box
      width 100%
      margin 0 auto 100px
    .form_Input
      margin-bottom: 15px
      span
        margin-left 10px
      i
        color red
      label
        font-size 14px
        color #333
        vertical-align top
      input[type="text"]
        width 100%
        padding 8px
        border 1px #b2b2b2 solid
        border-radius 5px
        box-sizing border-box
        margin-top 5px
  .login-box .btn
      display block
      color #fff
      width 60px
      height 35px
      margin 20px auto 0
      border none
      background #bb954e
      border-radius 5px
</style>

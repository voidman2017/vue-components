<template>
  <div>
    <s-form ref="form" :model="form" :rules="rules">
      <s-form-item label="用户名" prop="name">
        <s-input v-model="form.name" />
      </s-form-item>
      <s-form-item label="密码" prop="password">
        <s-input v-model="form.password" />
      </s-form-item>
    </s-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>

<script>
import sForm from '../components/form/form.vue'
import sFormItem from '../components/form/form-item.vue'
import sInput from '../components/form/input.vue'
export default {
  name: 'FormPage',
  components: { sForm, sFormItem, sInput },
  data() {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.alert('提交成功')
        } else {
          window.alert('表单校验失败')
        }
      })
    },
    handleReset() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style>
</style>
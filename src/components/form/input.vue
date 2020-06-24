<template>
  <input
    type="text"
    :value="value"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>

<script>
import Emitter from '../../mixins/emitter.js'

export default {
  name: 'SInput',
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value
      this.$emit('input', value)
      this.dispatch('SFormItem', 'on-form-change', value)
    },
    handleBlur() {
      this.dispatch('SFormItem', 'on-form-blur', this.value)
    }
  }
}
</script>

<style>
</style>
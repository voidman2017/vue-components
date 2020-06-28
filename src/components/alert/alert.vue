<template>
  <transition name="fade" @after-leave="handleAfterLeave">
    <div id="alert-box" v-show="show">{{ message }}</div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      duration: 1000,
      show: false
    }
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true)
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = false
    }, this.duration)
  },
  destroyed() {
    this.$el.parentNode.removeChild(this.$el)
  }
}
</script>

<style>
</style>
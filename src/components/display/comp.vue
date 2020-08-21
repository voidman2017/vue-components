<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: 'comp',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style>
</style>
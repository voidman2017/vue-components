const code = `
<template>
  <h2 @click="click">{{ title }}</h2>
</template>

<script>
export default {
  name: 'comp',
  props: ['title'],
  data() {
    return {}
  },
  methods:{
    click:function(){
      alert(1)
      this.$emit('callback','hahaha')
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style>
</style>
`;

export default code;

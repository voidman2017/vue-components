<template>
  <div>
    <h3>动态渲染 .vue 文件的组件—— Display</h3>
    <s-display :code="code"></s-display>
    <s-display :code="comp" :options="options"></s-display>
  </div>
</template>

<script>
import sDisplay from '../components/display/display.vue'
import defaultCode from '../components/display/code.js'
import comp from '../components/display/component.js'
export default {
  components: { sDisplay },
  data() {
    return {
      code: defaultCode,
      comp: comp,
      childValue: '',
      options: {
        vm: this,
        props: {
          title: 'hahah'
        },
        data: {
          text: 'haha'
        },
        on: {
          callback: function(value) {
            this.childValue = value
            console.log(this)
          }
        }
      }
    }
  },
  methods: {
    cb(value) {
      alert(value)
    }
  }
}
</script>

<style>
</style>
<template>
  <div>
    <button @click="click">click</button>
  </div>
</template>

<script>
import Vue from 'vue'
import SAlert from '../components/alert/alert'
Vue.prototype.$alert = function(options) {
  const Instance = Vue.extend(SAlert)
  const vm = new Instance({ data: options }).$mount()
  document.body.appendChild(vm.$el)
  vm.show = true
}
export default {
  name: 'Alert',
  methods: {
    click() {
      this.$alert({
        message: 'this is a message',
        duration: 1500
      })
    }
  },
  mounted() {
    const props = {}
    const Instance = new Vue({
      data: props,
      render(h) {
        return h(SAlert, {
          props: props
        })
      }
    })
    const component = Instance.$mount()
    console.log('component: ', component)
    // document.body.appendChild(component.$el)
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<template>
  <div>
    <!-- <h3>单个复选框，绑定到布尔值：</h3>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <h3>多个复选框，绑定到同一个数组：</h3>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label><br />
    <span>Checked names: {{ checkedNames }}</span> -->

    <h3>单个复选框组件</h3>
    <s-checkbox v-model="single" @change="change">单独选项</s-checkbox>
    {{ single }}
    <h3>组合复选框组件</h3>
    <s-checkbox-group v-model="multiple" @change="change">
      <s-checkbox label="option1">选项1</s-checkbox>
      <s-checkbox label="option2">选项2</s-checkbox>
      <s-checkbox label="option3">选项3</s-checkbox>
      <s-checkbox label="option4">选项4</s-checkbox>
    </s-checkbox-group>
  </div>
</template>

<script>
import SCheckboxGroup from '../components/checkbox/checkbox-group'
import SCheckbox from '../components/checkbox/checkbox'
export default {
  name: 'Checkbox',
  components: { SCheckbox, SCheckboxGroup },
  data() {
    return {
      checked: false,
      checkedNames: [],
      single: false,
      multiple: []
    }
  },
  methods: {
    change(v) {
      console.log('v: ', v)
    }
  }
}
</script>

<style>
</style>
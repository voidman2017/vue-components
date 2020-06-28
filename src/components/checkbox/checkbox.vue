<template>
  <label>
    <input
      v-if="group"
      type="checkbox"
      :value="label"
      v-model="model"
      :disabled="disabled"
      @change="change"
    />
    <input
      v-else
      type="checkbox"
      :checked="currentValue"
      :disabled="disabled"
      @change="change"
    />
    <slot></slot>
  </label>
</template>

<script>
import { findComponentUpward } from '../../utils/assist'
import Emitter from '../../mixins/emitter.js'

export default {
  name: 'SCheckbox',
  mixins: [Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    }
  },
  data() {
    return {
      currentValue: this.value,
      group: false,
      parent: null,
      model: []
    }
  },
  methods: {
    updateModel() {
      this.currentValue = this.value === this.trueValue
    },
    change(event) {
      if (this.disabled) return false
      const checked = event.target.checked
      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)
      if (this.group) {
        this.parent.change(this.model)
      } else {
        this.$emit('change', value)
        this.dispatch('SFormItem', 'on-form-change', value)
      }
    }
  },
  mounted() {
    this.parent = findComponentUpward(this, 'SCheckboxGroup')

    if (this.parent) {
      this.group = true
    }

    if (this.group) {
      this.parent.updateModel(true)
    } else {
      this.updateModel()
    }
  },
  watch: {
    value(val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel()
      } else {
        throw 'Value should be trueValue or falseValue.'
      }
    }
  }
}
</script>

<style>
</style>
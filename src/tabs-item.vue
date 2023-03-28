<template>
  <div class="tabs-item" @click="xxx" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsItem',
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  methods: {
    xxx() {
      if(this.disabled){return}
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: #2d8cf0;
$disabled-text-color:grey;
.tabs-item {
  display: flex;
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled{
    color:$disabled-text-color;
    cursor:not-allowed;
  }
}
</style>

<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'GuluTabsBody',
  inject:['eventBus'],
  props:{
  },
  created(){
    this.eventBus.$on('update:selected',(name)=>{
      // this.active = name === this.name
    })
  },
}
</script>

<style lang="scss" scoped>
.tabs-body{}
</style>

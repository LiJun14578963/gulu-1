<template>
  <svg class="icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  name:'GuluIcon',
props: ['name']
}
</script>
<style lang="scss" scoped>
</style>

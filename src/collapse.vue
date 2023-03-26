<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default{
  name:'GuluCollapse'
}
</script>

<style lang="scss" scoped>
$color:#ddd;
$border-radius:4px;
.collapse{
  border:1px solid $color;
  border-radius:$border-radius;
}
</style>

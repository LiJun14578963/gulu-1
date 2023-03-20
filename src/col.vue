<template>
  <div class="col" :class=" [span && `col-${span}` , offset && `offset-${offset}`]"
       :style="{paddingLeft:gutter/2 + 'px',paddingRight:gutter/2 + 'px'}" >
    <div style="border: 1px solid orange ;height:50px;">
      <slot>222</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluCol',
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    }
  },
  data() {
    return {
      gutter: 0
    }
  },
}
</script>

<style lang="scss" scoped>
.col {
  height: 50px;
  //background: grey;
  //border: 1px solid #333;
  width: 50%;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>

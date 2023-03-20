<template>
  <div class="col" :class=" colClass" :style="colStyle" >
      <slot>222</slot>
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
  computed: {
    colClass(){
      return [this.span && 'col-${this.span}',this.offset && 'offset-${this.offset}']
    },
    colStyle(){
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
    }
  }
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

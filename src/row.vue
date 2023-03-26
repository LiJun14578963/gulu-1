<template>
  <div class="row"  :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluRol',
  props: {
    span: {
      type: [String, Number]
    },
    offset:{
      type:[String,Number]
    },
    gutter:{
      type:[String,Number]
    },
    align:{
      type:String,
      validator(value) {return ['left','right','center'].indexOf(value)>=0;
      }
    }
  },
  computed: {
    rowStyle(){
      return {
        marginLeft: - this.gutter / 2 + 'px',
        marginRight: - this.gutter / 2 + 'px'
      }
    },
    rowClass(){
      let {align} = this
      if(!align) return []
      return [`align-${align}`]
    }
  },
  mounted(){
    this.$children.forEach((vm) =>{
      vm.gutter = this.gutter
    })
  }
}
</script>

<style lang="scss" scoped>

.row {
  display: flex;
  flex-wrap: wrap;

  &.align-left {
    justify-content: left;
  }

  &.align-right {
    justify-content: right;
  }

  &.align-center {
    justify-content: center;
  }
}
</style>

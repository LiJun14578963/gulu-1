<template>
  <div class="toast" :class="toastClasses">
    <div v-if="!enableHtml" v-html="$slots.default[0]"></div>
    <slot v-else ></slot>
    <div class="line"></div>
    <span v-if="closeButton" class="close" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name:'GuluToast',
  props:{
    autoClose:{
      type:Boolean,
      default:true
    },
    autoCloseDelay:{
      type:Number,
      default:100
    },
    closeButton:{
      type:Object,
      default: ()=>{
        return {
          text:'关闭',
          callback:undefined,
        }
      }
    },
    enableHtml:{
      type:Boolean,
      default: false,
    },
    position:{
      type:String,
      default:'middle',
      validator(value){
        return ['top','bottom','middle'].indexOf >= 0
      }
    }
  },
  mounted(){
    this.execAutoClose()
  },
  computed:{
    toastClasses (){
      return {[`position-${this.position}`]: true}
    }
  },
  methods:{
    close(){
      this.$el.remove()//删掉这个元素
      this.$destroy()//会把一些绑定的事情取消
    },
    execAutoClose(){
      if(this.autoClose){
        setTimeout(()=>{
          this.close()
        },this.autoCloseDelay * 1000)
      }
    },
    onClickClose(){
      this.close()
      if(this.closeButton.callback && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size:14px;
$toast-min-height:40px;
$toast-bg:rgba(0,0,0,0.75);
.toast{
  font-size:$font-size;min-height:$toast-min-height;line-height:$toast-min-height;
  color:white;
  display:flex;
  align-items: center;
  background:$toast-bg;
  border-radius:4px;
  box-shadow:0px 0px 3px 0px rgba(0,0,0,0.50);
  padding: 0 16px;
  &.position-top{position:fixed;top:0;left:50%; transform:translateX(-50%);}
  &.position-bottom{position:fixed;bottom:0;left:50%;transform:translateX(-50%);}
  &.position-middle{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);}
  .close{
    padding-left:16px;
    flex-shrink: 0;
  }
  .line{
    height:100%;
    border-left:1px solid red;
    margin-left:16px;
  }
}

</style>

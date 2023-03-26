import Toast from './toast.vue'

let currentToast
function Constructor({Vue, message, propsData, onClose}){
let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData
    })
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if(currentToast){currentToast.close()}
      currentToast = currentToast({
        Vue,
        message,
        propsData:toastOptions,
      })
    }
  }
}

import Button from "../src/button";

const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input.vue'
import Row from "../src/row";


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.exist
  })
  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      it('支持 change/input/focus/blur事件', () => {
        ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
          const Constructor  = Vue.extend(Row)
          vm = new Constructor({}).$mount
          const callback = sinon.fake();//fake（）间谍函数
          //触发input的change事件  sinon为外部库
          vm.$on(eventName, callback)
          let event = new Event(eventName);
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          //我们期待触发一个事件后，我们的回调会被调用，同时调用的时候传的第一个参数为event
          expect(callback).to.have.been.calledWith(event)
        })
      })
    })
  })
    describe('props', () => {
      const Constructor = Vue.extend(Input)
      let vm
      afterEach(() => {
        vm.$destroy()
      })
      it('接收value', () => {
        vm = new Constructor({
          propsData: {
            value: '1234'
          }
        }).$mount()
        const inputElements = vm.$el.querySelector('input')
        expect(inputElements.value).to.equal('1234')
      })

      it('接收 disabled', () => {
        vm = new Constructor({
          propsData: {
            disabled: true,
          }
        }).$mount()
        const inputElements = vm.$el.querySelector('input')
        expect(inputElements.disabled).to.equal(true)
      })
      it('接收 readonly', () => {
        vm = new Constructor({
          propsData: {
            readonly: true
          }
        }).$mount()
        const inputElements = vm.$el.querySelector('input')
        expect(inputElements.readOnly).to.equal(true)
      })
      it('接收 error', () => {
        vm = new Constructor({
          propsData: {
            error: '你错了'
          }
        }).$mount()
        const useElements = vm.$el.querySelector('use')
        expect(useElements.getAttribute('xlink:href')).to.equal('#i-error')
        const errorMessage = vm.$el.querySelector('.errorMessage')
        expect(errorMessage.innerText.trim()).to.equal('你错了')
      })
    })
  })


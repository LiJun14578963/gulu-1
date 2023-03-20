import Vue from 'vue'
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from './button-group.vue';
import Input from "./input.vue";
import chai from 'chai';
import spies from 'chai-spies';
import Col from './col.vue';
import Row from './row.vue';

chai.use(spies)//让chai使用这个间谍监听函数
const expect = chai.expect
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: 'hi'
  },
  methods: {
  }
})


import Vue from 'vue'
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from './button-group.vue';
import Input from "./input.vue";
import chai from 'chai';
import spies from 'chai-spies';
import Col from './col.vue';
import Row from './row.vue';
import Layout from "./layout.vue";
import Content from "./content.vue";
import Sider from "./sider.vue";
import Header from "./header.vue";
import Footer from "./footer.vue";
import Toast from "./toast.vue"
import plugin from "./plugin";//引入定义好的插件
import Tabs  from "./tabs.vue"
import TabsPane from "./tabs-pane.vue";
import TabsItem from "./tabs-item.vue";
import TabsHead from "./tabs-head.vue";
import TabsBody from "./tabs-body.vue";
import Popover from "./popover.vue";
import CollapseItem from "./collapse-item.vue"
import Collapse from "./collapse.vue"

chai.use(spies)//让chai使用这个间谍监听函数
const expect = chai.expect
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout',Layout)
Vue.component('g-content',Content)
Vue.component('g-sider', Sider)
Vue.component('g-header' ,Header)
Vue.component('g-footer',Footer)
Vue.component('g-toast', Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.use(plugin)//执行引入的代码

new Vue({
  el: '#app',
  data: {
    selectedTab:'sports',
    loading1: false,
    message: 'hi',
    selected:["2"]
  },
  mounted(){
    this.$on('update:selected', (selected) =>{
      console.log(222);
      this.selected = selected
    })
  },
  methods: {

  },
  created(){
  }
})


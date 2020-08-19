import Vue from 'vue'
import App from './App'
import empty from "./components/empty.vue"
import store from '@/store'

import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false
Vue.prototype.$store = store

Vue.component('empty', empty);

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()

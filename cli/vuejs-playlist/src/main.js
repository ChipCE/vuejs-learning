import Vue from 'vue'
import App from './App.vue'

import Lol from './lol.vue'

// Vue.component("machines",Lol)
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})


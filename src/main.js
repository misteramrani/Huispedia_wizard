import Vue from 'vue'
import Hsp from './Hsp.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(Hsp),
}).$mount('#hsp')

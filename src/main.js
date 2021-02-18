import Vue from 'vue'
import App from './App.vue'
import './assets/index.css'

import "@storefront-ui/vue/styles.scss";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

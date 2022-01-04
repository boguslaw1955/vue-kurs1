import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  components: {App},
  template: '<App />'
})

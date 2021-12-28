import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router//'

vue.config.productionTip = false
Vue.use(VueRouter);

new Vue(
  el: '#app',
  router: router,
    components:{ App},
  template: '<App/>'
)}

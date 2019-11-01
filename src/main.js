// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
=======
import axios from 'axios'
>>>>>>> 20f568ab2ae754579ec93c549dc2399fb1b26af7
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
<<<<<<< HEAD

=======
Vue.prototype.$axios = axios
>>>>>>> 20f568ab2ae754579ec93c549dc2399fb1b26af7

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

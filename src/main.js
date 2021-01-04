import Vue from 'vue';
import store from './store'
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import 'bulma/css/bulma.min.css';

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

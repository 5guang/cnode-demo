// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
import {install} from './components/index';
import * as filters from './utils/filters';
import './utils/rem';
import './styles/app.less';

Vue.config.productionTip = false
Vue.use(install);
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})


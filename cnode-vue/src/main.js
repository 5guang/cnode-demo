// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import { routes } from './router';
import store from './store/index';
import {install} from './components/index';
import * as filters from './utils/filters';
import './utils/rem';
import './styles/app.less';

Vue.config.productionTip = false
Vue.use(install);
Vue.use(Router)
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
const router = new Router({
  mode: 'hash',
  base: __dirname,
  routes,
  scrollBehavior(to, from, saveTop) {
    if (saveTop) return saveTop;
    return {x: 0, y: 0};
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})


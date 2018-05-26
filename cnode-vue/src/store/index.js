import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import home from './home/index';

Vue.use(Vuex);

const vuexSession = createPersistedState({
    key: 'cnode',
    storage: window.sessionStorage
});
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [vuexSession],
    modules: {
        home,
    }
})
export default store;
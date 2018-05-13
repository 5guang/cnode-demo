import Vuex from 'vuex';
import Vue from 'vue';
import VuexPersist from 'vuex-persist';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import home from './home/index';

Vue.use(Vuex);

const vuexSession = new VuexPersist({
    storage: window.sessionStorage,
    key: 'cnode',
    modules: {
        home,
    }
});

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [vuexSession.plugin],
    modules: {
        home,
    }
})
export default store;
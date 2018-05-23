import {
    CACHE_HOME,
} from './mutation-type';

export default {
    [CACHE_HOME](state, cacheHome) {
        state.cacheHome = cacheHome;
    }
}
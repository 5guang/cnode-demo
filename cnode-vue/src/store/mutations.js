import {
    CHANGE_PARAMS,
} from './mutations-type';

export default {
    [CHANGE_PARAMS](state, params) {
        state.params = params;
    }
}
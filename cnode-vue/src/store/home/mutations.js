import {
    CHANGE_CURRENTLY_MENU,
    CHANGE_HOME_PAGE,
} from './mutation-type';

export default {
    [CHANGE_CURRENTLY_MENU](state, currentlyMenu) {
        state.currentlyMenu = currentlyMenu;
    },
    [CHANGE_HOME_PAGE](state, homePage) {
        state.homePage = homePage;
    }
}
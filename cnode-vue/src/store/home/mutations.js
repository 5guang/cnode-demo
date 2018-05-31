import {
  CHANGE_CURRENTLY_MENU,
  CHANGE_HOME_PAGE,
  SAVE_TOKEN,
  SAVE_PERSONAL_INFO,
} from './mutation-type';

export default {
  [CHANGE_CURRENTLY_MENU](state, currentlyMenu) {
      state.currentlyMenu = currentlyMenu;
  },
  [CHANGE_HOME_PAGE](state, homePage) {
      state.homePage = homePage;
  },
  [SAVE_TOKEN](state, token) {
      state.token = token;
  },
  [SAVE_PERSONAL_INFO](state, personalInfo) {
      state.personalInfo = personalInfo;
  }
}

import mutations from './mutations';
import getters from './getters';

const state = {
  currentlyMenu: 0,
  homePage: 1,
  token: '',
  personalInfo: {
    avatar_url: '',
    id: '',
    loginname: '登录',
    success: '',
  },
};

export default {mutations, getters, state}

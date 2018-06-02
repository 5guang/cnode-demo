
let flag = (async () => {
})();
const sync = async (func) => {
  const oldFunc = flag;
  flag = (async () => {
    try {
      await oldFunc;
      await func();
    } catch (e) {
      console.error(e);
    }
  })();
};

export default {
  install: (Vue) => {
    Vue.prototype.$sync = sync;
  },
};

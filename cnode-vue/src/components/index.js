import  nvHeader  from './nv-header/index';
import nvPage from './nv-page/index';

const components = {
    nvHeader,
    nvPage,
}

const install = (Vue, config = {}) => {
    Object.keys(components).forEach(item => {
        Vue.component(components[item].name, components[item]);
    })
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    install,
}
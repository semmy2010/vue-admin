import babelpolyfill from 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './views/app';
import store from './store';
import routes from './routes';
import Mock from '../mock';

Mock.bootstrap(); //调用正式接口时注释

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
    //NProgress.start();
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
        next({ path: '/login' });
    } else {
        next();
    }
})

//router.afterEach(transition => { NProgress.done(); });

new Vue({
    //el: '#app', template: '<App/>',
    router,
    store,
    //components: { App }
    render: h => h(App)
}).$mount('#app');

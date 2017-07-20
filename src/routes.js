import Login from './views/login';
import Home from './views/home';
import NotFound from './views/404.vue';

let routes = [{
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    }, {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message' //图标样式class
    }, {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o'
    }, {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true //只有一个节点
    }, {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart'
    }, {
        path: '*',
        hidden: true,
        redirect: {
            path: '/404'
        }
    }
];

export default routes;

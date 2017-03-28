import Vue from 'vue';
import Router from 'vue-router';
import App from '../module/App.vue';
import Main from '../module/Main.vue';
import Test from '../module/Test.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: Main
    }, {
        path: '/App',
        component: App
    }, {
        path: '/Main',
        component: Main
    }, {
        path: '/Test',
        component: Test
    }]
});

import Vue from 'vue';
// import VueResource from 'vue-resource'
import router from './route';

// Vue.use(VueResource);

// Vue.http.options.emulateJSON = true;
// Vue.http.headers.common['Authorization'] = 'bearer ' + localStorage.token;

new Vue({
    el: '#app',
    router,
    // router: Router
    // data: {},
    // methods: {}
}).$mount('#app');

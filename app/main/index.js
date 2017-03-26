// import '../assets/scripts/jquery.min.js';
// import '../assets/scripts/jquery.browser.mobile.js';
// import '../assets/scripts/bootstrap.min.js';
// import '../assets/scripts/magnific-popup.js';
// import '../assets/scripts/theme.js';
// import '../assets/scripts/theme.custom.js';
// import '../assets/scripts/theme.init.js';
// import '../assets/scripts/index.custom.js';

// import '../assets/scripts/nanoscroller.js';
// import '../assets/scripts/jquery.placeholder.js';


import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from './route'

Vue.use(VueResource);

Vue.http.options.emulateJSON = true;
Vue.http.headers.common['Authorization'] = 'bearer ' + localStorage.token;

new Vue({
    el: '#app',
    router: Router,
    data: {},
    methods: {}
}).$mount('#app')

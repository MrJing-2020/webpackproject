import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.emulateJSON = true;

var loginVue = new Vue({
    el: '#loginApp',
    components: {
    },
    data: {
        userName: "",
        passWord: "",
        isRemember: false
    },
    methods: {
        login: function() {
            // window.location.href="./index.html"
            this.$http.post('http://localhost:8015/token', { grant_type: 'password', username: this.userName, password: this.passWord }).then(response => {
                localStorage.token = response.body.access_token;
                Vue.http.headers.common['Authorization'] = 'bearer ' + localStorage.token;
                alert(response.body.access_token);
            }, response => {
                alert("error")
            });
        }
    }
})
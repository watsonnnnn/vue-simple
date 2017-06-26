/**
 */
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import routes from './router/router';
import Vuex from 'vuex';
import store from './store';
Vue.use(VueRouter);
const router = new VueRouter({
    routes
})
new Vue({
    router,//要严格使用router这个单词，绝对不能使用别的单词！
    store,
    render:(h) => h(App)
}).$mount('#app');
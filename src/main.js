/**
 */
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import routes from './router/router';
Vue.use(VueRouter);
const router = new VueRouter({
    routes
})
new Vue({
    router,//要严格使用router这个单词，绝对不能使用别的单词！
    render:(h) => h(App)
}).$mount('#app');
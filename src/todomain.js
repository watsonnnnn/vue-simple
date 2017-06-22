/**
 * Created by Administrator on 2017/6/22.
 */
import Vue from 'vue';
import App from '../components/todo';

new Vue({
    el:"#app",
    render(h){
        return h(App)
    }
})
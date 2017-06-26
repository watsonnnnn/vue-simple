import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        count:12
    },
    mutations : {
        increment(state,payload){
            console.log(payload)
            state.count += Number(payload.count);
        }
    },
    actions:{
        incrementAsync({state,commit},payload){
            commit('increment',payload)
        }
    }
})
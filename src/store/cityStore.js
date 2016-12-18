import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);
const state = {
    cityName:"",
    enName:"",
    cityType:0,
    cityNo:""
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    chooseCity(state,obj) {
        state.cityName  = obj.cityName;
        state.enName = obj.englishName;
        state.cityType = obj.cityType;
        state.cityNo = obj.cityNo;
    },
    
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
    chooseCity(context,obj){
       
        context.commit('chooseCity',obj);
        
    },
    
}

const getters = {
    getCity:state=>state.cityName,
    getType:state=>state.cityType,
    getEnName:state=>state.enName,
    getNo:state=>state.cityNo
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

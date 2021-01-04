import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        task: [
            {
                task:'Найти кота',
                status: false,
                date: new Date(),
                category: "Семья",
                backround: "primary"                
              },
              {
                task:'починить',
                status: false,
                date: new Date(),
                category: "Работа"
              },
              {
                task:'починить',
                status: false,
                date: new Date(),
                category: "Семья",
                backround: "primary"
              },
              {
                task:'починить',
                status: false,
                date: new Date(),
                category: "Работа"
              },
        ],
    },
    getters: {
        task: (state) => state.task,
    },
    mutations: {
        SET_TASK(state, item) {
            state.task.push(item);
        },
        DEL_TASK(state, index) {            
            state.task.splice(index, 1);
        },
        SORT_TASK(state, category) {
            let newArr = [];
            for( let task of state.task ){
                if(task.category == category) newArr.unshift(task)
                else newArr.push(task) 
            }
            state.task = newArr
        },
    },
});


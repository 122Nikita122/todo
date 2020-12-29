import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        task: [
            {
                task:'Найти кота',
                status: false,
                date: new Date()
              },
              {
                task:'починить',
                status: false,
                date: new Date()
              }
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
            console.log('work')
            state.task.splice(index, 1);
        }
    },
});


import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../vieus/Home';
import Todo from '../vieus/Todo';
import About from '../vieus/About';


Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
 
  ];
  
  export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });
  
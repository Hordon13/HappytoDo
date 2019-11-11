import Vue from 'vue';
import Router from 'vue-router'
import MainPage from "@/components/pages/MainPage";
import LoginPage from "@/components/pages/LoginPage";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/login',
      name: "LoginPage",
      component: LoginPage
    }
  ]
})
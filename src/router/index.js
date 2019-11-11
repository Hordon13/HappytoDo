import Vue from 'vue';
import Router from 'vue-router'
import MainPage from "@/components/pages/MainPage";
import LoginPage from "@/components/pages/LoginPage";
import LandingPage from "@/components/pages/LandingPage";
import store from "@/store/index";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/login',
      name: "LoginPage",
      component: LoginPage,
      beforeEnter: (to, from, next) => {
        if (store.getters.getIsLoggedIn) {
          next("/todos");
        } else {
          next();
        }
      }
    },
    {
      path: '/todos',
      name: 'MainPage',
      component: MainPage,
      beforeEnter: (to, from, next) => {
        if (store.getters.getIsLoggedIn) {
          next();
        } else {
          next("/login");
        }
      }
    }
  ]
})
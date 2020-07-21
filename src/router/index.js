import VueRouter from 'vue-router'
import Vue from 'vue'
import Tours from "../views/tour/Tours";
import TourList from "../views/tour/tourList/TourList";


// 必须通过vue.use 安装插件

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/tours'
  },
  {
    path: '/tours',
    component: Tours
  },
  {
    path: '/toursList',
    component: TourList
  },

]

let router = new VueRouter({
  routes,
  mode:'history'
});

export default router;

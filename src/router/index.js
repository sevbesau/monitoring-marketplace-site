import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/Home'
import Widget from '../pages/Widget'

window.routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/widget/:widgetId', name: 'Widget', component: Widget }
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: window.routes
});

export default router;

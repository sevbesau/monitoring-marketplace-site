import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/Home'
import Widget from '../pages/Widget'

import Build from '../pages/build/Build'
import MyWidgets from '../pages/build/Widgets'
import EditWidget from '../pages/build/Widget'
import Create from '../pages/build/Create'

import Login from  '../pages/auth/login.vue'
import Invite from '../pages/auth/invite.vue'
import Signup from '../pages/auth/signup.vue'

window.routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: Signup },
  { path: '/invite/:id', name: 'invite', component: Invite },
  
  { path: '/', name: 'Home', component: Home },
  { path: '/widget/:widgetId', name: 'Widget', component: Widget },

  { path: '/build', name: 'Build', component: Build },
  { path: '/build/widgets', name: 'MyWidgets', component: MyWidgets },
  { path: '/build/create', name: 'Create', component: Create },
  { path: '/build/widget/:widgetId', name: 'EditWidget', component: EditWidget },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: window.routes
});

export default router;

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomeComponent from './components/HomeComponent.vue'
import CreateComponent from './components/CreateComponent.vue'
import IndexComponent from './components/IndexComponent.vue'
import EditComponent from './components/EditComponent.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import ForgotPassword from './components/ForgotPassword'

import VueAxios from 'vue-axios'
import axios from 'axios'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent
  },
  {
    name: 'create',
    path: '/create',
    component: CreateComponent
  },
  {
    name: 'posts',
    path: '/posts',
    component: IndexComponent
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditComponent
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'signup',
    path: '/signup',
    component: Signup
  },
  {
    name: 'forgotpassword',
    path: '/forgotpassword',
    component: ForgotPassword
  }
]

const router = new VueRouter({ mode: 'history', routes: routes })

new Vue(Vue.util.extend({ router }, App)).$mount('#app')

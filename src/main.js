import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueForm from 'vue-form'

import Formulario from "./components/Formulario.vue";
import Lista from "./components/Lista.vue";


import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

var options = {
  validators: {
    'no-espacios': function(value) {
      return value.indexOf(' ') < 0
    },
    'caracteres': function(value) {
      return value.length >= 5 && value.length <= 15
    },
    'rango': function(value) {
      return value >= 18 && value <= 120
    }
  }
}
Vue.use(VueForm, options)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/lista'},
    {path: '/formulario', component: Formulario},
    {path: '/lista', component: Lista}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

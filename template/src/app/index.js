// imports modules || importación de modulos
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

// import libraries || importacion de bibliotecas
import router from './config/vue-router'
import store from 'store'
import Root from 'App/components/root'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...Root
})

export { app, router, store }

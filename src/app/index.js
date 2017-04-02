// imports modules || importación de modulos
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

// import libraries || importacion de bibliotecas
import Root from '@/app/root'
import router from '@/app/router'
import store from '@/app/store'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...Root
})

export { app, router, store }

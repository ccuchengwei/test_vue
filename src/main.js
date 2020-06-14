import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'; 

// router setup
import routes from "./routes/routes";

Vue.config.productionTip = false


// configure router
const router = new VueRouter({
  routes // short for routes: routes
});


Vue.use(VueRouter)

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
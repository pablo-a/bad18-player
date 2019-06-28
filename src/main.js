import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import Buefy from "buefy";
import createStore from "./store"
import "./registerServiceWorker";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

// Create and use a Vuex Store
const store = createStore();

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import Buefy from "buefy";
import "./registerServiceWorker";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

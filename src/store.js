import Vue from "vue";
import Vuex from "vuex";
import api from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
    playerDetails: {}
  },
  getters: {
    currentUser: state => {
      return state.currentUser;
    }
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    }
  },
  actions: {
    getPlayerDetails(context) {
      api.get("/player/06595538").then(response => {
        context.commit("setPlayerDetail", response);
      });
    }
  }
});

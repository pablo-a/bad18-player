import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      currentUser: {}
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
    }
  });
};

export default createStore;

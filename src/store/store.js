import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import User from "./modules/user/user";
import Agent from "./modules/agent/agent";
import Misc from "./modules/misc/misc";


Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "vuex",
  storage: localStorage,
  reducer: state => ({
    User: state.User, //only saves the user module
    Agent: state.Agent 
  })
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User,
    Agent,
    Misc
  },
  plugins: [vuexPersist.plugin]
});

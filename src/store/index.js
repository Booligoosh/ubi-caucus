import Vue from "vue";
import Vuex from "vuex";
import candidates from "json-loader!yaml-loader!../candidates.yaml";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: candidates
  },
  mutations: {},
  actions: {},
  modules: {}
});

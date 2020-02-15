import Vue from "vue";
import Vuex from "vuex";
import candidates from "json-loader!yaml-loader!../candidates.yaml";
import { shuffleArray } from "@/helperFunctions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: shuffleArray(candidates)
  },
  mutations: {},
  actions: {},
  modules: {}
});

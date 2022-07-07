import Vue from 'vue'
import Vuex from 'vuex'
import MarvelModule from './modules/marvelModule';
import ModalMarvel from "@/components/ModalMarvel";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    MarvelModule,
    ModalMarvel
  }
})

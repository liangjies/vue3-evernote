import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import { user } from '@/store/module/user'
import { note } from '@/store/module/note'
import { notebook } from '@/store/module/notebook'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['user']
})


export const store = new createStore({
  modules: {
    user,
    notebook,
    note
  },
  plugins: [vuexLocal.plugin]
})

export default store

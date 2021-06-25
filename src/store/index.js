import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getter.js'
export default createStore({
    state: {
        cartList: []
    },
    getters,
    mutations,
    actions,
    modules: {}
})
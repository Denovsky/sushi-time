import Vuex from 'vuex'

import commonActions from "./actions/actions";
import apiRequest from "./actions/api-requests";
import getters from "./getters/getters";
import mutations from "./mutations/mutations";

const actions = {...commonActions, ...apiRequest}

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    actions,
    getters,
    mutations
});

export default store;
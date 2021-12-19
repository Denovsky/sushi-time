export default {
    DECREMENT_CART_ITEM({commit}, index) {
        commit("DECREMENT", index)
    },
    INCREMENT_CART_ITEM({commit}, index) {
        commit("INCREMENT", index)
    },
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product)
    },
    DELETE_FROM_CART({ commit }, index) {
        commit('REMOVE_ITEM', index)
    }
}
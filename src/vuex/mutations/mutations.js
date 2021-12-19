export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },
    SET_CART: (state, product) => {
        let isProductExist = false
        state.cart.map(function (item) {
            if (item.name === product.name) {
                isProductExist = true
                item.quantity++
            }
        })
        isProductExist || state.cart.push({ ...product, quantity: 1 })
    },
    REMOVE_ITEM: (state, name) => {
        let product_index = state.cart.findIndex(item => item.name === name)
        state.cart.splice(product_index, 1)
    },
    INCREMENT: (state, name) => {
        state.cart.map(function (item) {
            if (item.name === name) {
                item.quantity++
            }
        })
    },
    DECREMENT: (state, name) => {
        state.cart.map(function (item) {
            if (item.name === name && item.quantity > 1) {
                item.quantity--
            }
        })
    }
}
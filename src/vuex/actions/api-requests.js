import axios from "axios";

export default {
    async GET_PRODUCTS_FROM_API({commit}) {
        try {
            const products = await axios('http://localhost:3000/food', {
                method: "GET"
            });
            commit('SET_PRODUCTS_TO_STATE', products.data);
            console.log(products.data)
            return products;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
}
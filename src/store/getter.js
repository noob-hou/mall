export default {
    cartLength(state) {
        return state.cartList.length
    },
    cartList(state) {
        return state.cartList
    },
    sumPrice(state) {
        return state.cartList.reduce((sum, item) => {
            return sum + item.price * item.count
        }, 0)
    }
}
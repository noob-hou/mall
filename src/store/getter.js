export default {
    cartLength(state) {
        return state.cartList.length
    },
    cartList(state) {
        return state.cartList
    },
    sumPrice(state) {
        let newArr = []
        newArr = state.cartList.filter(item => item.checked)
        let sums = 0
        sums = newArr.reduce((sum, item) => {
            return sum + item.price * item.count
        }, 0)
        return sums
    }
}
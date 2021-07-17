export default {
    xaddCart(state, payload) {
        let oldProduct = state.cartList.find(item => item.iid === payload.iid)
        if (oldProduct) {
            oldProduct.count += 1
        } else {
            payload.count = 1
            payload.checked = true
            state.cartList.push(payload)
        }
        let cart = JSON.stringify(state.cartList)
        window.sessionStorage.setItem('cart', cart)
        state.cartList = JSON.parse(window.sessionStorage.getItem('cart'))
    }

}
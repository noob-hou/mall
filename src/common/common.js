import mitt from 'mitt'
export const Bus = new mitt()
    //防抖函数
export function debounce(func, delay = 1000) {
    let timer = null
    return function(...arg) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, ...arg)
        }, delay);
    }
}
export function throttle(fn, delay = 1000) {
    let flag = true
    return function(...args) {
        if (flag == false) return;
        flag = false
        setTimeout(() => {
            fn.apply(this, ...args)
            flag = true
        }, delay);
    }
}
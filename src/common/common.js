import mitt from 'mitt'
export const Bus = new mitt()
    //防抖函数
export function debounce(func, delay) {
    let timer = null
    return function(...arg) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, ...arg)
        }, delay);
    }
}
import { request } from './request.js'
export function getHomeMultData() {
    return request({
        url: '/home/multidata'
    })
}
export function getHomeGoodsData(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}
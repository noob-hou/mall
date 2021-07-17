import { request_user } from './request.js'
export function address(data) {
    return request_user({
        url: '/checkaddress',
        method: 'POST',
        params: data
    })
}
export function addAddress(data) {
    return request_user({
        url: '/queryaddress',
        method: 'POST',
        params: data
    })
}
export function editAddress(data) {
    return request_user({
        url: '/modifyaddress',
        method: 'POST',
        params: data
    })
}
export function deleteAddress(data) {
    return request_user({
        url: '/deleteaddress',
        method: 'POST',
        params: data
    })
}
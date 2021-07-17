import { request_user } from './request.js'
export default function getLogin(data) {
    return request_user({
        url: '/login',
        method: 'POST',
        data: data
    })
}
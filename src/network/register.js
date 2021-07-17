import { request_user } from './request.js'
export default function getUserRegister(data) {
    return request_user({
        url: '/register',
        method: 'POST',
        data: data
    })
}
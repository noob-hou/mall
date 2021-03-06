import axios from 'axios'
// export function request(config, success, error) {
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:7878/api/m5',
//         timeout: 5000
//     })
//     instance(config).then(res => {
//         success(res)
//     }).catch(err => {
//         error(err)
//     })
// }
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         const instance = axios.create({
//             baseURL: 'http://152.136.185.210:7878/api/m5',
//             timeout: 5000
//         })
//         instance(config).then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// }
export function request(config) {

    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {

    })
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })
    return instance(config)
}
export function request_user(data) {
    const instance = axios.create({
        baseURL: 'http://api.0x07.cn/api/user'
    })
    return instance(data)
}
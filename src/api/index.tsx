import axios from 'axios'

export const baseUrl = 'https://bff.smltlk.ru/docs'

const $api = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
})


$api.interceptors.request.use((config) => {
    if (config && config.headers && localStorage.getItem('token')){
        config.headers["access_token"] = `bearer ${localStorage.getItem('token')}`;
        config.headers["token_type"] = `Bearer`;
        return config;
    }
    return config
})

export default $api;
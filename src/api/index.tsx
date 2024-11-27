import axios from 'axios'

export const baseUrl = 'https://bff.smltlk.ru'

const $api = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
})


$api.interceptors.request.use((config) => {
    if (config && config.headers && sessionStorage.getItem('token')){
        config.headers["Authorization"] = `bearer ${sessionStorage.getItem('token')}`;
        return config;
    }
    return config
})


$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config;
    if(error?.response?.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.post(`${baseUrl}/api/auth`, {
                withCredentials: true,
                headers: {
                    'X-TELEGRAM-INIT-DATA': sessionStorage.getItem('initData')
                }
            })
            sessionStorage.setItem('token', response.data.access_token);
            return $api.request(originalRequest);
        } catch(err) {
            sessionStorage.removeItem('token');
        }
    }
    throw error
})

export default $api;
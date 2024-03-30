import axios from "axios";
import {authService} from "./auth.service";

const Axios = axios.create({
    baseURL: "http://localhost:4000/api/",
});

/**
 * Intercepteur pour ajouter le token dans le header de chaque requête
 */
Axios.interceptors.request.use(request => {

    if (authService.isLogged()) {
        request.headers['Authorization'] = `Bearer ${authService.getToken()}`;
    }

    return request
});

/**
 * Intercepteur pour gérer les erreurs de requête
 */
Axios.interceptors.response.use(response => {
    return response
}, async error => {
    const originalRequest = error.config;
    if (!originalRequest._retry && error.response && (error.response.status === 403)) {
        originalRequest._retry = true;
        try {
            // .then(response => {
            const refreshToken = localStorage.getItem('refresh_token_wop');
            const response = await authService.refreshToken(refreshToken)

            authService.saveToken(response.data.accessToken, response.data.refreshToken)
            originalRequest.headers['Authorization'] = 'Bearer ' + response.data.accessToken;
            return Axios(originalRequest)
            // })
        } catch (error) {
            authService.logout()
            window.location = '/auth/login'
            return Promise.reject(error)
        }
    } else if (error.response && error.response.status === 401) {
        return Promise.reject(error)
    } else {
        authService.logout()
        window.location = '/auth/login'
        return Promise.reject(error)
    }
})

export default Axios;

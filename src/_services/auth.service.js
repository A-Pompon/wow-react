import Axios from "./caller.service";
import {jwtDecode} from "jwt-decode";

/**
 * Connexion user
 * @param {object} credentials
 * @returns {Promise}
 */
const login = (credentials) => {
    return Axios.post('/auth/login', credentials);
}

/**
 * Inscription user
 * @param {object} credentials
 * @returns {Promise}
 */
const register = (credentials) => {
    return Axios.post('/auth/register', credentials);
}

/**
 * Sauvegarde du token dans le localStorage
 * @param {string} token
 * @param {string} refreshToken
 */
const saveToken = (token, refreshToken) => {
    console.log("token", token)
    console.log("refreshToken", refreshToken)
    localStorage.setItem('token_wop', token);
    localStorage.setItem('refresh_token_wop', refreshToken);
}

/**
 * Suppression du token du localStorage
 */
const logout = () => {
    localStorage.removeItem('token_wop');
    localStorage.removeItem('refresh_token_wop');
}

/**
 * Etat de la présence d'un token en localStorage
 * @returns {boolean}
 */
const isLogged = () => {
    const token = localStorage.getItem('token_wop');
    return !!token;
}

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
const getToken = () => {
    return localStorage.getItem('token_wop');
}

/**
 * Récupération refresh_token en localStorage
 * @returns {string}
 */
const getRefreshToken = () => {
    return localStorage.getItem('refresh_token_wop');
}

/**
 * Récupération du payload du token
 * @returns {object}
 */
const getTokenInfo = () => {
    return jwtDecode(getToken());
}

/**
 * Rafraichissement du token
 * @returns {Promise}
 */
const refreshToken = (refreshToken) => {
    return Axios.post('/auth/refresh-token', {refresh_token: refreshToken});
}

export const authService = {
    login,
    register,
    saveToken,
    logout,
    isLogged,
    getToken,
    getTokenInfo,
    refreshToken,
    getRefreshToken
}

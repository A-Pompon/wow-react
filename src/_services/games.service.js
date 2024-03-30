import Axios from "./caller.service";

/**
 * Récupération de l'ID du jeu
 * @returns {Promise}
 */
const getGameIdByName = () => {
    return Axios.get('/games/ShiFuMi');
}

export const gamesService = {
    getGameIdByName
}

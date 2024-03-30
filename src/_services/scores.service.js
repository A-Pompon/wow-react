import Axios from "./caller.service";

/**
 * Récupération de tous les scores
 * @returns {Promise}
 */
const getAllScores = () => {
    return Axios.get('/scores');
}

/**
 * Récupératoin des scores de l'utilisateur connecté
 * @returns {Promise}
 */
const getMyScores = () => {
    return Axios.get('/scores/profil');
}

/**
 * Récupération des scores d'un utilisateur
 * @param id
 * @returns {Promise}
 */
const getScoresUser = (id) => {
    return Axios.get(`/scores/${id}`);
}

/**
 * Ajout d'une victoire
 * @param id
 * @returns {Promise}
 */
const addVictory = (id) => {
    return Axios.get(`/scores/add/victories/${id}`);
}

/**
 * Ajout d'une défaite
 * @param id
 * @returns {Promise}
 */
const addDefeat = (id) => {
    return Axios.get(`/scores/add/defeates/${id}`);
}

/**
 * Ajout de 3 points pour le donjon 1
 * @param id
 * @returns {Promise}
 */
const donjonLevelOneW = (id) => {
    return Axios.get(`/scores/win1/${id}`);
}

/**
 * Ajout de 5 points pour le donjon 2
 * @param id
 * @returns {Promise}
 */
const donjonLevelTwoW = (id) => {
    return Axios.get(`/scores/win2/${id}`);
}

/**
 * Ajout de 9 points pour le donjon 3
 * @param id
 * @returns {Promise}
 */
const donjonLevelThreeW = (id) => {
    return Axios.get(`/scores/win3/${id}`);
}

/**
 * Suppression de 1 points pour le donjon 1
 * @param id
 * @returns {Promise}
 */
const donjonLevelOneL = (id) => {
    return Axios.get(`/scores/loose1/${id}`);
}

/**
 * Suppression de 3 points pour le donjon 2
 * @param id
 * @returns {Promise}
 */
const donjonLevelTwoL = (id) => {
    return Axios.get(`/scores/loose2/${id}`);
}

/**
 * Suppression de 7 points pour le donjon 3
 * @param id
 * @returns {Promise}
 */
const donjonLevelThreeL = (id) => {
    return Axios.get(`/scores/loose3/${id}`);
}

export const scoresService = {
    getAllScores,
    getMyScores,
    getScoresUser,
    addDefeat,
    addVictory,
    donjonLevelOneW,
    donjonLevelTwoW,
    donjonLevelThreeW,
    donjonLevelOneL,
    donjonLevelTwoL,
    donjonLevelThreeL,
}

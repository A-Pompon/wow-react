import Axios from "./caller.service";

/**
 * Récupératoin de la liste des utilisateurs
 * @returns {Promise}
 */
let getAllUsers = () => {
  return Axios.get("/users");
};

/**
 * Récupération des amis de l'utilisateur connecté
 * @returns {Promise}
 */
let getMyFriends = () => {
  return Axios.get("/users/followed/scores");
};

/**
 * Mise à jour du nom l'utilisateur connecté
 * @param {name} name
 * @returns {Promise}
 */
let updateName = (name) => {
  return Axios.patch("/users/name", { name: name });
};

/**
 * Mise à jour de la race l'utilisateur connecté
 * @param {race} race
 * @returns {Promise}
 */
let updateRace = (race) => {
  return Axios.patch("/users/race", { race: race });
};

/**
 * Récupération d'un utilisateur par son id
 * @param {string} id
 * @returns {Promise}
 */
let getUserById = (id) => {
  return Axios.get(`/users/${id}`);
};

/**
 * Ajout d'un utilisateur à la liste des amis
 * @param {string} id
 * @returns {Promise}
 */
let addToFriend = (id) => {
  return Axios.patch(`/users/add/followed`, { friendId: id });
};

/**
 * Suppression d'un utilisateur de la liste des amis
 * @param {string} id
 * @returns {Promise}
 */
let deleteToFriend = (id) => {
  return Axios.patch(`/users/delete/followed`, { friendId: id });
};

export const usersService = {
  getAllUsers,
  getMyFriends,
  updateName,
  updateRace,
  getUserById,
  addToFriend,
  deleteToFriend,
};

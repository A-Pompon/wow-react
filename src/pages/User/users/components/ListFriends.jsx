import "../../../../styles/listFriends.css";
// import {USERS} from "../_mock-users"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getImageRace from "../../../../_helpers/getImageRace";
import { FaTrashArrowUp } from "react-icons/fa6";
import { usersService } from "../../../../_services";
import Splash from "../../core/components/Splash";

const ListFriends = () => {
  const [friendsList, setFriendsList] = useState([]);
  const [errorServer, setErrorServer] = useState(false);
  const [errorMessageServer, setErrorMessageServer] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //     // Pour travail avec MOCK
  //     setFriendsList(USERS)
  // }, []);

  useEffect(() => {
    usersService
      .getMyFriends()
      .then((res) => {
        console.log("res", res.data);
        const sortedFriends = res.data.sort(
          (a, b) => b.Scores[0].points - a.Scores[0].points
        );
        setFriendsList(sortedFriends);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorServer(true);
        setErrorMessageServer(error);
        console.log("error.response.data.message", error);
      });
  }, []);

  const handleActionListFriend = (event, id) => {
    console.log("Pass LIST FRIENDS");
    console.log("friendId", id);
    event.preventDefault();
    event.stopPropagation();
    usersService
      .deleteToFriend(id)
      .then((res) => {
        console.log("res", res.data);
        setFriendsList((current) =>
          current.filter((friend) => friend.user_id !== id)
        );
      })
      .catch((error) => {
        setErrorServer(true);
        setErrorMessageServer(error);
        console.log("error.response.data.message", error);
      });
  };

  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <div className="list-friends">
          {friendsList.map((friend, index) => (
            <Link
              to={`friend/${friend.user_id}`}
              key={friend.user_id ? friend.user_id : index}
              className="list-item-friends"
              style={{ border: "var(--color-1)" }}
            >
              <div className="list-img">
                <img
                  className="img-role"
                  // VU SUR https://stackoverflow.com/questions/70818392/images-not-showing-in-react
                  // src={require(`../../../assets/roles/${friend.race.toLowerCase()}.png`)}
                  src={getImageRace(friend.race.toLowerCase())}
                  alt="Race"
                />
              </div>
              <div className="list-info">
                <p className="list-name">
                  Nom : {friend.name ? friend.name : "BUGGY"}
                </p>
                <p className="list-role">
                  Score : {friend.user_id ? friend.Scores[0].points : "BUGGY"}
                </p>
              </div>
              <div className="list-friends-action">
                <button
                  className="btn secondary laptop"
                  onClick={(event) => {
                    handleActionListFriend(event, friend.user_id);
                  }}
                >
                  Supprimer des amis
                </button>
                <button
                  className="btn mobile"
                  onClick={(event) => {
                    handleActionListFriend(event, friend.user_id);
                  }}
                >
                  <FaTrashArrowUp />
                </button>
              </div>
            </Link>
          ))}
          {friendsList.length === 0 && (
            <div className="no-data-container">
              <h2 className="no-data">Aucun ami à afficher !</h2>
            </div>
          )}
          {errorServer && (
            <div className="from-group">
              <p className="error-text">{errorMessageServer}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ListFriends;

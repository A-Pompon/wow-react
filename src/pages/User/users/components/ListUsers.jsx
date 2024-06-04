import "../../../../styles/listUsers.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {USERS} from "../_mock-users"
import getImageRace from "../../../../_helpers/getImageRace";
import { scoresService } from "../../../../_services";
import Splash from "../../core/components/Splash";

const ListUsers = () => {
  const [userClassement, setUserClassement] = useState([]);
  const [errorServer, setErrorServer] = useState(false);
  const [errorMessageServer, setErrorMessageServer] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //     setUserClassement(USERS)
  // }, []);

  useEffect(() => {
    scoresService
      .getAllScores()
      .then((res) => {
        const filteredData = res.data.filter((item) => item.user_id);
        console.log("res", filteredData);
        setUserClassement(filteredData);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorServer(true);
        setErrorMessageServer(error);
        console.log("error", error);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <div className="list-classement">
          {userClassement.map((user, index) => (
            <Link
              to={`user/${user.user_id}`}
              key={user.User.user_id ? user.User.user_id : index}
              className="list-item-classement"
              style={{ border: "var(--color-1)" }}
            >
              <div className="list-img">
                {user.user_id && (
                  <img
                    className="img-role"
                    // VU SUR https://stackoverflow.com/questions/70818392/images-not-showing-in-react
                    // src={require(`../../../assets/roles/${user.race.toLowerCase()}.png`)}
                    src={getImageRace(user.User.race.toLowerCase())}
                    alt="Race"
                  />
                )}
              </div>
              <div className="list-info">
                <p className="list-name">
                  Nom : {user.user_id ? user.User.name : "BUGGY"}
                </p>
                <p className="list-role">
                  Race : {user.user_id ? user.User.race : "BUGGY"}
                </p>
              </div>
              <div className="list-score">
                <p className="score">Score : {user.points}</p>
              </div>
            </Link>
          ))}
          {userClassement.length === 0 && (
            <div className="no-data-container">
              <h2 className="no-data">Aucun utilisateur à afficher !</h2>
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

export default ListUsers;

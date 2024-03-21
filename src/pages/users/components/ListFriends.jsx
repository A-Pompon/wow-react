import "../../../styles/listFriends.css";
import {USERS} from "../_mock-users"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import getImageRace from "../../../helpers/getImageRace";
import {FaTrashArrowUp} from "react-icons/fa6";

const ListFriends = () => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        setFriendsList(USERS)
    }, []);

    const handleActionListFriend = (event) => {
        event.preventDefault();
    }

    return (
        <div className="list">
            {friendsList.map(friend => (
                <Link
                    to={`friend/${friend.id}`}
                    key={friend.id}
                    className="list-item"
                    style={{border: 'var(--color-1)'}}
                >
                    <div className="list-img">
                        <img
                            className="img-role"
                            // VU SUR https://stackoverflow.com/questions/70818392/images-not-showing-in-react
                            // src={require(`../../../assets/roles/${friend.race.toLowerCase()}.png`)}
                            src={getImageRace(friend.race.toLowerCase())}
                            alt="Rôle"
                        />
                    </div>
                    <div className="list-info">
                        <p className="list-name">
                            Nom : {friend.name ? friend.name : "BUGGY"}
                        </p>
                        {/* ===== REVOIR CLASSE CSS ====== */}
                        <p className="list-role">
                            Score : {friend.score ? friend.score : "BUGGY"}
                        </p>
                    </div>
                    <div className="list-friends-action">
                        <button
                            // onClick={() => deleteToFriend(friend._id)}  // Assurez-vous de définir deleteToFriend
                            className="btn secondary laptop"
                            onClick={handleActionListFriend}
                        >
                            Supprimer des amis
                        </button>
                        <button
                            // onClick={() => deleteToFriend(friend._id)}  // Assurez-vous de définir deleteToFriend
                            className="btn mobile"
                            onClick={handleActionListFriend}
                        >
                            <FaTrashArrowUp/>
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ListFriends;

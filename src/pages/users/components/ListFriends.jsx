import "../../../styles/listFriends.css";
import {USERS} from "../_mock-users"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const ListFriends = () => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        setFriendsList(USERS)
    }, []);

    return (
        <div className="list">
            {friendsList.map(friend => (
                <Link
                    to={`friend/${friend.id}`}
                    key={friend.id}  // Assurez-vous d'utiliser une clé unique pour chaque élément dans le tableau
                    className="list-item"
                    style={{border: 'var(--color-1)'}}  // Assurez-vous de définir commonBorderCard
                >
                    <div className="list-img">
                        <img
                            className="img-role"
                            src={require(`../../../assets/roles/${friend.role.toLowerCase()}.png`)}
                            alt="Rôle"
                        />
                    </div>
                    <div className="list-info">
                        <p className="list-name">
                            Nom : {friend.name ? friend.name : "BUGGY"}
                        </p>
                        <p className="list-role">
                            Rôle : {friend.role ? friend.role.toUpperCase() : "BUGGY"}
                        </p>
                    </div>
                    <div className="detail-action">
                        <button
                            // onClick={() => deleteToFriend(friend._id)}  // Assurez-vous de définir deleteToFriend
                            className="btn secondary laptop"
                        >
                            Supprimer des amis
                        </button>
                        <button
                            // onClick={() => deleteToFriend(friend._id)}  // Assurez-vous de définir deleteToFriend
                            className="btn secondary mobile"
                        >
                            <span className="anticon anticon-delete" role="img" aria-label="delete">DELETE</span>
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ListFriends;

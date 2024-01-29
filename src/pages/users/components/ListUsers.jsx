import "../../../styles/listUsers.css";
import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {USERS} from "../_mock-users"
// import SORCIER from "../../assets/roles/sorcier.png";

const ListUsers = () => {
    // const navigate = useNavigate();
    const [userClassement, setUserClassement] = useState([]);

    useEffect(() => {
        setUserClassement(USERS)
    }, []);

    // A REVOIR
    // const getUserImage = (user) => {
    //     const path = user.id === null
    //         ? 'sorcier.png'
    //         : `${user.role.toLowerCase()}.png`;
    //     return `require('../../assets/roles/${path}')`;
    // };

    // const goToUserDetails = (user) => {
    //     navigate(`/user/${user.id}`);
    // };


    return (
        <div className="list">
            {userClassement.map((user) => (
                <Link
                    to={`user/${user.id}`}
                    key={user.id}
                    className="list-item"
                    // onClick={() => goToUserDetails(user)}
                    style={{border: 'var(--color-1)'}}
                >
                    <div className="list-img">
                        <img
                            className="img-role"
                            // src={getUserImage(user)} // A REVOIR
                            // src={SORCIER}
                            // VU SUR https://stackoverflow.com/questions/70818392/images-not-showing-in-react
                            src={require(`../../../assets/roles/${user.role.toLowerCase()}.png`)}
                            alt="Rôle"
                        />
                    </div>
                    <div className="list-info">
                        <p className="list-name">
                            Nom : {user.id === null ? "BUGGY" : user.name}
                        </p>
                        <p className="list-role">
                            Rôle
                            : {user.id === null ? "BUGGY" : user.role.toUpperCase()}
                        </p>
                    </div>
                    <div className="list-score">
                        <p className="score">
                            Score : {user.score}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ListUsers;

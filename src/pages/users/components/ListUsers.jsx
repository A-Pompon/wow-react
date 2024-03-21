import "../../../styles/listUsers.css";
import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {USERS} from "../_mock-users"
import getImageRace from "../../../helpers/getImageRace";

const ListUsers = () => {
    // const navigate = useNavigate();
    const [userClassement, setUserClassement] = useState([]);

    useEffect(() => {
        setUserClassement(USERS)
    }, []);

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
                            // VU SUR https://stackoverflow.com/questions/70818392/images-not-showing-in-react
                            // src={require(`../../../assets/roles/${user.race.toLowerCase()}.png`)}
                            src={getImageRace(user.race.toLowerCase())}
                            alt="Rôle"
                        />
                    </div>
                    <div className="list-info">
                        <p className="list-name">
                            Nom : {user.id === null ? "BUGGY" : user.name}
                        </p>
                        <p className="list-role">
                            Race
                            : {user.id === null ? "BUGGY" : user.race.toUpperCase()}
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

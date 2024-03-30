import {useEffect, useState} from 'react';
import "../../../styles/friendDetails.css";
import {useNavigate} from "react-router-dom";
// import {USERS} from "./_mock-users";
import {useParams} from "react-router-dom";
import getImageRace from "../../../_helpers/getImageRace";
import {authService, scoresService, usersService} from "../../../_services";
import Splash from "../core/components/Splash";

const UserClassementDetails = () => {
    const [user, setUser] = useState(null);
    const [errorServer, setErrorServer] = useState(false);
    const [errorMessageServer, setErrorMessageServer] = useState("");
    const [changeFriendStatus, setChangeFriendStatus] = useState(false)
    const [friendsListUserCo, setFriendsListUserCo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const idConnectedUser = authService.getTokenInfo();

    const {userIdParams} = useParams();

    // useEffect(() => {
    // setPlayer(USERS[userId])
    // eslint-disable-next-line
    // }, []);

    useEffect(() => {
        scoresService.getScoresUser(userIdParams)
            .then(res => {
                setUser(res.data)
                setIsLoading(false);
            })
            .catch(error => {
                setErrorServer(true)
                setErrorMessageServer(error.response.data.message)
                console.log("error.response.data.message", error.response.data.message)
            })
    }, []);

    useEffect(() => {
        usersService.getMyFriends()
            .then(res => {
                setFriendsListUserCo(res.data);
            })
            .catch(error => {
                setErrorServer(true)
                setErrorMessageServer(error.response.data.message)
                console.log("error.response.data.message", error.response.data.message)
            })
    }, [changeFriendStatus])

    const addToFriend = () => {
        console.log("Pass ADD DETAIL")
        usersService.addToFriend(userIdParams)
            .then(res => {
                console.log("res", res.data)
                setChangeFriendStatus(!changeFriendStatus)
            })
            .catch(error => {
                setErrorServer(true)
                setErrorMessageServer(error.response.data.message)
                console.log("error.response.data.message", error.response.data.message)
            })
    }

    const deleteToFriend = () => {
        console.log("Pass DELETE DETAIL")
        usersService.deleteToFriend(userIdParams)
            .then(res => {
                console.log("res", res.data)
                setChangeFriendStatus(!changeFriendStatus)
            })
            .catch(error => {
                setErrorServer(true)
                setErrorMessageServer(error.response.data.message)
                console.log("error.response.data.message", error.response.data.message)
            })
    }

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
            {isLoading ? (<Splash/>) : (
                <section className="container">
                    <div className="detail">
                        {user && (
                            <div className="detail-container">
                                <div className="detail-img">
                                    <img className="img-role"
                                         src={getImageRace(user.race.toLowerCase())}
                                         alt="Race"/>
                                </div>
                                <div className="detail-info">
                                    <p className="detail-name">
                                        Nom : {user._id === null ? "BUGGY" : user.name}
                                    </p>
                                    <p className="detail-role">
                                        Race : {user._id === null ? "BUGGY" : user.race.toUpperCase()}
                                    </p>
                                </div>
                                <div className="detail-score">
                                    <p className="score">
                                        Score : {user.points}
                                    </p>
                                    <p className="ratio">
                                        Ratio : {(user.victories / user.defeates || 0).toFixed(2)}
                                    </p>
                                </div>
                                <div className="detail-action">
                                    <button onClick={handleGoBack} className="btn primary">Retour</button>
                                    {(idConnectedUser.userId !== userIdParams && user) && (
                                        <div className="button-user">
                                            {friendsListUserCo.some(friend => friend._id === userIdParams) ? (
                                                <button onClick={deleteToFriend} className="btn secondary">Supprimer des
                                                    amis</button>
                                            ) : (
                                                <button onClick={addToFriend} className="btn secondary">Ajouter aux
                                                    amis</button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    {!user && (
                        <div className="no-data-container">
                            <h2 className="no-data">Aucun utilisateur à afficher !</h2>
                        </div>
                    )}
                    {errorServer && <div className="from-group">
                        <p className="error-text">{errorMessageServer}</p>
                    </div>}
                </section>)}
        </>
    );
};

export default UserClassementDetails;

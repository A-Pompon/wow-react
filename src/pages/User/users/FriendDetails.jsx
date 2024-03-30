import {useEffect, useState} from 'react';
import "../../../styles/friendDetails.css";
import {useNavigate} from "react-router-dom";
// import {USERS} from "./_mock-users";
import {useParams} from "react-router-dom";
import getImageRace from "../../../_helpers/getImageRace";
import {scoresService, usersService} from "../../../_services";
import Splash from "../core/components/Splash";

const FriendDetails = () => {
    const [friend, setFriend] = useState(null);
    const [errorServer, setErrorServer] = useState(false);
    const [errorMessageServer, setErrorMessageServer] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const {userId} = useParams();

    // useEffect(() => {
    // setPlayer(USERS[userId])
    // eslint-disable-next-line
    // }, []);

    useEffect(() => {
        scoresService.getScoresUser(userId)
            .then(res => {
                console.log("res", res.data)
                setFriend(res.data)
                setIsLoading(false);
            })
            .catch(error => {
                setErrorServer(true)
                setErrorMessageServer(error.response.data.message)
                console.log("error.response.data.message", error.response.data.message)
            })
    }, []);

    const deleteToFriend = () => {
        console.log("Pass DETAIL")
        usersService.deleteToFriend(userId)
            .then(res => {
                console.log("res", res.data)
                navigate(-1);
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
                        {friend && (
                            <div className="detail-container">
                                <div className="detail-img">
                                    <img className="img-role"
                                         src={getImageRace(friend.race.toLowerCase())}
                                         alt="Race"/>
                                </div>
                                <div className="detail-info">
                                    <p className="detail-name">
                                        Nom : {friend._id === null ? "BUGGY" : friend.name}
                                    </p>
                                    <p className="detail-role">
                                        Race
                                        : {friend._id === null ? "BUGGY" : friend.race.toUpperCase()}
                                    </p>
                                </div>
                                <div className="detail-score">
                                    <p className="score">
                                        Score : {friend.points}
                                    </p>
                                    <p className="ratio">
                                        Victoires : {friend.victories}
                                    </p>
                                    <p className="ratio">
                                        Ratio : {(friend.victories / friend.defeates || 0).toFixed(2)}
                                    </p>
                                </div>
                                <div className="detail-action">
                                    <button onClick={handleGoBack} className="btn primary">Retour</button>
                                    <button onClick={deleteToFriend} className="btn secondary">Supprimer des amis
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    {!friend && (
                        <div className="no-data-container">
                            <h2 className="no-data">Aucun ami à afficher !</h2>
                        </div>
                    )}
                    {errorServer && <div className="from-group">
                        <p className="error-text">{errorMessageServer}</p>
                    </div>}
                </section>)}
        </>
    );
};

export default FriendDetails;

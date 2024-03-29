import React, {useEffect, useState} from 'react';
import "../../styles/userDetails.css";
import {useNavigate} from "react-router-dom";
import {USERS} from "./_mock-users";
import {useParams} from "react-router-dom";
import getImageRace from "../../helpers/getImageRace";

const UserDetails = () => {
    const navigate = useNavigate();
    const {userId} = useParams();
    // eslint-disable-next-line
    const [player, setPlayer] = useState(USERS[userId]);
    // eslint-disable-next-line
    const [isFriend, setIsFriend] = useState(false);

    useEffect(() => {
        // setPlayer(USERS[userId])
        // eslint-disable-next-line
    }, []);

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <section className="container">
            <div className="detail">
                {player && (
                    <div className="detail-container">
                        <div className="detail-img">
                            <img className="img-role"
                                 src={getImageRace(player.race.toLowerCase())}
                                 alt="Rôle"/>
                        </div>
                        <div className="detail-info">
                            <p className="detail-name">
                                Nom : {player.id === null ? "BUGGY" : player.name}
                            </p>
                            <p className="detail-role">
                                Rôle
                                : {player.id === null ? "BUGGY" : player.race.toUpperCase()}
                            </p>
                        </div>
                        <div className="detail-score">
                            <p className="score">
                                Score : {player.score}
                            </p>
                            <p className="ratio">
                                Ratio : {player.victories / player.defeates || 0}
                            </p>
                        </div>
                        <div className="detail-action">
                            {/*<Link to={'/classement'} className="btn primary">Retour</Link>*/}
                            <button onClick={handleGoBack} className="btn primary">Retour</button>
                            {/* ===== REVOIR CONDITION POUR LE BUTTON AJOUT AMI/DELETE AMI && POUR LA REDIRECTION VERS CLASSEMENT OU FRIENDS =====*/}
                            {player.id !== userId && (
                                <div className="button-friend">
                                    {!isFriend && (
                                        <button /*onClick={addToFriend}*/ className="btn secondary">Ajouter aux
                                            amis</button>
                                    )}
                                    {isFriend && (
                                        <button /*onClick={deleteToFriend}*/ className="btn secondary">Supprimer des
                                            amis</button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            {!player && (
                <div className="no-data-container">
                    <h2 className="no-data">Aucun pangolin à afficher !</h2>
                </div>
            )}
        </section>
    );
};

export default UserDetails;

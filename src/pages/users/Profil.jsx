import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "../../styles/profil.css";
import getImageRace from "../../helpers/getImageRace";

import {USERS} from "./_mock-users";

const Profil = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // const userService = new PangolinService();
        // userService.getProfil().then(data => {
        //     setUser(data);
        // });
        setUser(USERS[0])
    }, []);

    const goGame = () => {
        navigate('/donjon');
    };

    const goUpdate = () => {
        navigate('/update-profil');
    };

    // const logout = () => {
    //     const authService = new AuthService();
    //     authService.logout();
    // };

    return (
        <section className="container">
            <div className="profil-container">
                <header className="title">
                    <h1>Profil</h1>
                </header>

                <div className="profil">
                    {user && (
                        <div className="profil-card">

                            <div className="img-info">
                                <div className="profil-img">
                                    <img className="img-role" src={getImageRace(user.race.toLowerCase())}
                                         alt="Race user"/>
                                </div>
                                <div className="profil-info">
                                    <div className="profil-row">
                                        <p className="profil-name">Nom : {user.name}</p>
                                    </div>
                                    <div className="profil-row">
                                        <p className="profil-role">Race : {user.race.toUpperCase()}</p>
                                    </div>
                                    <button onClick={goUpdate} className="btn primary">Modifier</button>
                                </div>
                            </div>
                            <div className="profil-score">
                                <div className="info-score">
                                    <p className="victory">Victoires : {user.victories}</p>
                                    <p className="loose">Défaites : {user.defeates}</p>
                                    <p className="ratio">Ratio : {(user.victories / user.defeates).toFixed(2)}</p>
                                </div>
                                <p className="score">Score : {user.score}</p>
                            </div>

                            <div className="profil-action">
                                <button className="btn-game" onClick={goGame}>Jouer</button>
                                <button className="btn secondary" /*onClick={logout}*/>Déconnexion</button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Profil;

import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import "../../../styles/profil.css";
import getImageRace from "../../../_helpers/getImageRace";
import {scoresService} from "../../../_services";
import {authService} from "../../../_services";
import Splash from "../core/components/Splash";
// import {USERS} from "./_mock-users";

const Profil = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [errorServer, setErrorServer] = useState(false);
    const [errorMessageServer, setErrorMessageServer] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    // Pour travail avec MOCK
    //     setUser(USERS[0])
    // }, []);

    useEffect(() => {
        scoresService.getMyScores()
            .then(res => {
                console.log("res", res.data)
                setUser(res.data)
                setIsLoading(false);
            })
            .catch(error => {
                setErrorMessageServer(error.response.data.message);
                setErrorServer(true)
                console.log(error)
            })
    }, []);

    // useEffect(() => {
    //     const fetchProfile = async () => {
    //         try {
    //             const response = await scoresService.getMyScores();
    //             setUser(response.data);
    //         } catch (error) {
    //             setErrorServer(true);
    //             setErrorMessageServer(error.response.data.message);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    //     fetchProfile()
    // }, []);

    const goGame = () => {
        navigate('/donjon');
    };

    const goUpdateRace = () => {
        navigate('update/race');
    };

    const goUpdateName = () => {
        navigate('update/name');
    };

    const logout = () => {
        authService.logout()
        navigate('/auth/login')
    }

    return (
        <>
            {isLoading ? (<Splash/>) : (
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
                                            <img className="img-role"
                                                 src={getImageRace(user.user_id.race.toLowerCase())}
                                                 alt="Race user"/>
                                        </div>
                                        <div className="profil-info">
                                            <div className="profil-row">
                                                <p className="profil-name">Nom : {user.user_id.name}</p>
                                            </div>
                                            <button onClick={goUpdateName} className="btn primary">Modifier</button>
                                            <div className="profil-row">
                                                <p className="profil-role">Race : {user.user_id.race}</p>
                                            </div>
                                            <button onClick={goUpdateRace} className="btn primary">Modifier</button>
                                        </div>
                                    </div>
                                    <div className="profil-score">
                                        <div className="info-score">
                                            <p className="victory">Victoires : {user.victories}</p>
                                            <p className="loose">Défaites : {user.defeates}</p>
                                            {!(user.victories / user.defeates) ? <p>Ratio : 0</p> :
                                                <p className="ratio">Ratio
                                                    : {(user.victories / user.defeates).toFixed(2)}</p>}
                                        </div>
                                        <p className="score">Score : {user.points}</p>
                                    </div>

                                    <div className="profil-action">
                                        <button className="btn-game" onClick={goGame}>Jouer</button>
                                        <button className="btn secondary" onClick={logout}>Se déconnecter</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        {errorServer && <div className="from-group">
                            <p className="error-text">{errorMessageServer}</p>
                        </div>}
                    </div>
                </section>)}
        </>
    );
};

export default Profil;

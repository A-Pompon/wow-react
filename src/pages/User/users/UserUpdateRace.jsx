import "../../../styles/userUpdateProfil.css";
import {Link, useNavigate} from "react-router-dom";
import {GiTrumpetFlag} from "react-icons/gi";
import {useState} from "react";
import LOGOWOP from "../../../assets/logo/world-of-pangolin.png";
import getImageRace from "../../../_helpers/getImageRace";
import {usersService} from "../../../_services";

const UserUpdateRace = () => {
    const [credentials, setCredentials] = useState({
        race: "",
    })
    const [displayIndicationUpdateRace, setDisplayIndicationUpdateRace] = useState(false);
    const [errorServer, setErrorServer] = useState(false);
    const [errorMessageServer, setErrorMessageServer] = useState("");
    const [errorRace, setErrorRace] = useState(false);
    const errorMessageRace = "Veuillez sélectionner une race";

    const navigate = useNavigate();

    const onChangeRace = (e) => {
        setErrorServer(false);
        setErrorRace(false);
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitUpdateRace = (e) => {
        e.preventDefault()

        if (credentials.race.length === 0) {
            setErrorRace(true);
            console.log("Race non-sélectionnée");
            return;
        }

        console.log("credentials", credentials)
        usersService.updateRace(credentials.race)
            .then(res => {
                console.log("res.data", res.data)
                navigate('/profil', {replace: true})
            })
            .catch(error => {
                setErrorServer(true)
                setErrorMessageServer(error.response.data.message)
                console.log(error.response.data.message)
            })
    }

    const showIndicationUpdateRace = () => {
        setDisplayIndicationUpdateRace(!displayIndicationUpdateRace)
    }

    return (
        <div className="container">
            <div className="update-container">

                <header className="title">
                    <h1>
                        Modifier
                    </h1>
                    {credentials.race.length === 0 ? (
                        <div>
                            <img src={LOGOWOP} className="register-logo" alt="Game Master"/>
                        </div>
                    ) : (
                        <div>
                            <img src={getImageRace(credentials.race.toLowerCase())} className="register-logo-race"
                                 alt="Race"/>
                        </div>
                    )}
                    <GiTrumpetFlag className="icon-indication" onClick={showIndicationUpdateRace}/>
                </header>
                <form onSubmit={onSubmitUpdateRace} className="form-update">
                    <div className="form-group-update-error">
                        <div className="form-group-update">
                            <label // className={`is-invalid ${errors.role && (errors.role.touched || errors.role.dirty) ? 'is-invalid' : ''}`}
                                htmlFor="race">Race</label>
                            <div className="radio-update">
                                <div className="radio">
                                    <input
                                        id="GUERRIER"
                                        type="radio"
                                        value="GUERRIER"
                                        name="race"
                                        checked={credentials.race === 'GUERRIER'}
                                        onChange={onChangeRace}
                                    />
                                    <label className="radio-label" htmlFor="GUERRIER">Guerrier</label>
                                </div>

                                <div className="radio">
                                    <input
                                        id="ENCHANTEUR"
                                        type="radio"
                                        value="ENCHANTEUR"
                                        name="race"
                                        checked={credentials.race === 'ENCHANTEUR'}
                                        onChange={onChangeRace}
                                    />
                                    <label className="radio-label" htmlFor="ENCHANTEUR">Enchanteur</label>
                                </div>

                                <div className="radio">
                                    <input
                                        id="ESPION"
                                        type="radio"
                                        value="ESPION"
                                        name="race"
                                        checked={credentials.race === 'ESPION'}
                                        onChange={onChangeRace}
                                    />
                                    <label className="radio-label" htmlFor="ESPION">Espion</label>
                                </div>

                                <div className="radio">
                                    <input
                                        id="ALCHIMISTE"
                                        type="radio"
                                        value="ALCHIMISTE"
                                        name="race"
                                        checked={credentials.race === 'ALCHIMISTE'}
                                        onChange={onChangeRace}
                                    />
                                    <label className="radio-label" htmlFor="ALCHIMISTE">Alchimiste</label>
                                </div>

                                <div className="radio">
                                    <input
                                        id="SORCIER"
                                        type="radio"
                                        value="SORCIER"
                                        name="race"
                                        checked={credentials.race === 'SORCIER'}
                                        onChange={onChangeRace}
                                        // defaultChecked={}
                                    />
                                    <label className="radio-label" htmlFor="SORCIER">Sorcier</label>
                                </div>

                                <div className="error-text-container">
                                    {errorRace && <p className="error-text">{errorMessageRace}</p>}
                                </div>
                            </div>
                        </div>

                        {displayIndicationUpdateRace &&
                            <div className="form-group-update-indication">
                                <p className="indication-update">Vous devez sélectionner une race</p>
                            </div>
                        }
                    </div>

                    <div className="form-group-update">
                        <Link className="btn secondary" to='/profil'>Retour</Link>
                        <button type="submit" className="btn primary">Modifier</button>
                    </div>

                    {errorServer && <div className="from-group">
                        <p className="error-text">{errorMessageServer}</p>
                    </div>}
                </form>
            </div>
        </div>
    );
};

export default UserUpdateRace;

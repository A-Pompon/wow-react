import '../../styles/register.css'
import {Link, useNavigate} from "react-router-dom";
import GAMEMASTER from "../../assets/races/arnaud-transparent.png";
import {authService} from "../../_services/auth.service"
import {useEffect, useState} from "react";
import getImageRace from "../../_helpers/getImageRace";
import {isEmailValid, isPasswordValid, isNameValid} from "../../_helpers/regexAuth"
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {GiTrumpetFlag} from "react-icons/gi";
import {IoReload} from "react-icons/io5";

const Register = () => {
    const [credentials, setCredentials] = useState({
        name: "Arnaud",
        email: "aRnaUd@mail.com",
        password: "Arnaud123!",
        race: "",
        role: "member"
    })
    const [verifPassword, setVerifPassword] = useState("");
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorVerifPassword, setErrorVerifPassword] = useState(false);
    const [errorRace, setErrorRace] = useState(false);
    const errorMessageName = 'Le nom doit contenir entre 3 et 25 caractères, sans espace';
    const errorMessageEmail = "Email invalide";
    const errorMessagePassword = ("Le mot de passe doit contenir au moins 8 caractères, une majuscule," +
        " une minuscule, un chiffre et un caractère spécial");
    const errorMessageVerifPassword = "Le mot de passe ne correspond pas";
    const errorMessageRace = "Veuillez sélectionner une race";
    const [showPassword, setShowPassword] = useState(false);
    const [displayIndicationRegister, setDisplayIndicationRegister] = useState(false);
    const [isHuman, setIsHuman] = useState(false);
    const [isHumanError, setIsHumanError] = useState(false);
    const errorMessageIsHuman = "Les caractères ne correspondent pas";
    const [isHumanString, setIsHumanString] = useState("");
    const [isHumanStringGenerated, setIsHumanStringGenerated] = useState("");
    const [captchaPosition, setCaptchaPosition] = useState(undefined);
    const [errorServer, setErrorServer] = useState(false);
    const [errorMessageServer, setErrorMessageServer] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setIsHumanStringGenerated(generateRandomString())
        setCaptchaPosition(Math.floor(Math.random() * (60 - 5 + 1)) + 5)
    }, []);

    const onChangeRegister = (e) => {
        setErrorServer(false);
        setErrorEmail(false);
        setErrorPassword(false);
        setErrorName(false);
        setErrorRace(false);
        setErrorVerifPassword(false);
        setIsHumanError(false);
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitRegister = (e) => {
        e.preventDefault()

        if (!isHuman) {
            console.log("La case doit être cochée");
            return;
        }

        if (!isNameValid(credentials.name)) {
            setErrorName(true);
            console.log("Nom invalide");
            return;
        }

        if (!isEmailValid(credentials.email)) {
            setErrorEmail(true);
            console.log("Email invalide");
            return;
        }

        if (credentials.race.length === 0) {
            setErrorRace(true);
            console.log("Race non-sélectionnée");
            return;
        }

        if (!isPasswordValid(credentials.password)) {
            setErrorPassword(true);
            console.log("Mot de passe invalide");
            return;
        }

        if (credentials.password !== verifPassword) {
            setErrorVerifPassword(true);
            console.log("Mots de passe non identiques");
            return;
        }

        if (isHumanStringGenerated !== isHumanString) {
            setIsHumanError(true);
            console.log("Les caractères ne correspondent pas");
            return;
        }
        console.log("credentials", credentials)
        authService.register(credentials)
            .then(res => {
                console.log(res)
                authService.saveToken(res.data.accessToken)
                navigate('/', {replace: true})
            })
            .catch(error => {
                setErrorServer(true)
                setErrorMessageServer(error.response.data.message)
                console.log(error.response.data.message)
            })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const showIndicationRegister = () => {
        setDisplayIndicationRegister(!displayIndicationRegister)
    }

    const generateRandomString = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const length = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    return (
        <div className="container">
            <div className="register-container">
                {credentials.race.length === 0 ? (
                    <div>
                        <img src={GAMEMASTER} className="register-logo" alt="Game Master"/>
                    </div>
                ) : (
                    <div>
                        <img src={getImageRace(credentials.race.toLowerCase())} className="register-logo-race"
                             alt="Race"/>
                    </div>
                )}

                <div className="hello-register">
                    <h1>Bienvenue dans World of Pangolins !</h1>
                    <h3>Inscivez-vous</h3>
                    <p>Veuillez renseigner les champs suivants :</p>
                    <GiTrumpetFlag className="icon-indication" onClick={showIndicationRegister}/>
                </div>
                <form className="form-register" onSubmit={onSubmitRegister}>
                    <div className="form-group-register-error">
                        <div className="form-group-register">
                            <label htmlFor="name">Nom d'utilisateur</label>
                            <input type="text" id="name" name="name" className="form-control" value={credentials.name}
                                   placeholder={"Name"}
                                   onChange={onChangeRegister}/>
                        </div>

                        <div className="error-text-container">
                            {errorName && <p className="error-text">{errorMessageName}</p>}
                        </div>
                    </div>

                    <div className="form-group-register-error">
                        <div className="form-group-register">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" className="form-control"
                                   value={credentials.email}
                                   placeholder={"Email"}
                                   onChange={onChangeRegister}/>
                        </div>

                        <div className="error-text-container">
                            {errorEmail && <p className="error-text">{errorMessageEmail}</p>}
                        </div>
                    </div>

                    <div className="form-group-register-error">
                        <div className="form-group-register">
                            <label // className={`is-invalid ${errors.role && (errors.role.touched || errors.role.dirty) ? 'is-invalid' : ''}`}
                                htmlFor="race">Race</label>
                            <div className="radio-register">
                                <div className="radio">
                                    <input
                                        id="GUERRIER"
                                        type="radio"
                                        value="GUERRIER"
                                        name="race"
                                        checked={credentials.race === 'GUERRIER'}
                                        onChange={onChangeRegister}
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
                                        onChange={onChangeRegister}
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
                                        onChange={onChangeRegister}
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
                                        onChange={onChangeRegister}
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
                                        onChange={onChangeRegister}
                                        // defaultChecked={}
                                    />
                                    <label className="radio-label" htmlFor="SORCIER">Sorcier</label>
                                </div>

                                <div className="error-text-container">
                                    {errorRace && <p className="error-text">{errorMessageRace}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group-register-error">
                        <div className="form-group-register">
                            <label htmlFor="password">Mot de passe</label>
                            <input type={showPassword ? "text" : "password"} id="password" name="password"
                                   className="form-control"
                                   value={credentials.password} placeholder={"Mot de passe"}
                                   onChange={onChangeRegister}/>
                            {showPassword ? <IoEyeOutline className="icon-register"
                                                          onClick={togglePasswordVisibility}/> :
                                <IoEyeOffOutline className="icon-register"
                                                 onClick={togglePasswordVisibility}/>}
                        </div>

                        <div className="error-text-container">
                            {errorPassword && <p className="error-text">{errorMessagePassword}</p>}
                        </div>
                    </div>

                    <div className="form-group-register-error">
                        <div className="form-group-register">
                            <label htmlFor="passwordVerif">Vérification du mot de passe</label>
                            <input type={showPassword ? "text" : "password"} id="passwordVerif" name="passwordVerif"
                                   className="form-control"
                                   value={verifPassword} placeholder={"Mot de passe"}
                                   onChange={(e) => {
                                       setErrorVerifPassword(false);
                                       setVerifPassword(e.target.value)
                                   }}/>
                            {showPassword ? <IoEyeOutline className="icon-register"
                                                          onClick={togglePasswordVisibility}/> :
                                <IoEyeOffOutline className="icon-register"
                                                 onClick={togglePasswordVisibility}/>}
                        </div>

                        <div className="error-text-container">
                            {errorVerifPassword && <p className="error-text">{errorMessageVerifPassword}</p>}
                        </div>
                    </div>

                    {displayIndicationRegister &&
                        <div className="form-group-register-indication">
                            <p className="indication-register">Le nom doit contenir entre 3 et 25 caractères, sans
                                espace</p>
                            <p className="indication-register">Veuillez sélectionner une race</p>
                            <p className="indication-register">Le mot de passe doit contenir au moins 8 caractères, une
                                majuscule, une minuscule, un chiffre et un caractère spécial</p>
                        </div>
                    }

                    <div className="form-group-register-error">
                        <div className="form-group-register">
                            <IoReload className="icon-indication"
                                      onClick={() => {
                                          setIsHumanStringGenerated(generateRandomString())
                                          setIsHumanString('')
                                          console.log("isHumanStringGenerated", isHumanStringGenerated)
                                      }}/>
                            <label htmlFor="captcha">
                                {isHumanStringGenerated ? `${isHumanStringGenerated}` : "Caractères :"}
                            </label>
                            <input type="text" id="captcha" name="captcha" className="form-control"
                                   value={isHumanString}
                                   placeholder={"Caractères générés"}
                                   onChange={(e) => {
                                       setIsHumanString(e.target.value)
                                       setIsHumanError(false)
                                   }}/>
                        </div>

                        <div className="error-text-container">
                            {isHumanError && <p className="error-text">{errorMessageIsHuman}</p>}
                        </div>
                    </div>

                    <div className="form-group-register-error">
                        <div className="form-group-register">
                            <div className={"form-group-register-captcha"}
                                 style={{left: `${captchaPosition}%`}}>
                                <label htmlFor="human" className="checkbox-register">À cocher</label>
                                <input type="checkbox" id="human" name="human"
                                       onChange={() => {
                                           setIsHuman(!isHuman)
                                           console.log(isHuman)
                                       }}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group-register button">
                        <div className="first-button">
                            <button type="submit" className="btn primary" disabled={!isHuman}>S'inscrire</button>
                        </div>
                        <div className="login">
                            <Link className="login-link" to='/auth/login'>Vous avez déjà un compte ?
                                Connectez-vous.</Link>
                        </div>
                    </div>

                    {errorServer && <div className="from-group">
                        <p className="error-text">{errorMessageServer}</p>
                    </div>}
                </form>
            </div>
        </div>
    );
};

export default Register;

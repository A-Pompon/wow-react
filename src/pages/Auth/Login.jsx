import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../../styles/login.css'
import GAMEMASTER from "../../assets/races/arnaud-transparent.png";
import {IoEyeOffOutline} from "react-icons/io5";
import {IoEyeOutline} from "react-icons/io5";
import {isEmailValid, isPasswordValid} from "../../_helpers/regexAuth"
import {GiTrumpetFlag} from "react-icons/gi";

import {authService} from "../../_services"

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: 'arnaud@mail.com',
        password: 'Arnaud123!'
    })
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const errorMessageEmail = "Email invalide";
    const errorMessagePassword = ("Le mot de passe doit contenir au moins 8 caractères, une majuscule," +
        " une minuscule, un chiffre et un caractère spécial")
    const [showPassword, setShowPassword] = useState(false);
    const [displayIndicationLogin, setDisplayIndicationLogin] = useState(false);
    const [isHuman, setIsHuman] = useState(false);
    const [captchaPosition, setCaptchaPosition] = useState(undefined);
    const [errorServer, setErrorServer] = useState(false);
    const [errorMessageServer, setErrorMessageServer] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setCaptchaPosition(Math.floor(Math.random() * (60 - 5 + 1)) + 5)
    }, []);

    const onChangeLogin = (e) => {
        setErrorServer(false);
        setErrorEmail(false);
        setErrorPassword(false);
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitLogin = (e) => {
        e.preventDefault()

        if (!isHuman) {
            console.log("La case doit être cochée");
            return;
        }

        if (!isEmailValid(credentials.email)) {
            setErrorEmail(true);
            console.log("Email invalide");
            return;
        }

        if (!isPasswordValid(credentials.password)) {
            setErrorPassword(true);
            console.log("Mot de passe invalide");
            return;
        }
        console.log("credentials", credentials)
        authService.login(credentials)
            .then(res => {
                console.log(res)
                authService.saveToken(res.data.accessToken, res.data.refreshToken)
                navigate('/', {replace: true})
            })
            .catch(error => {
                setErrorServer(true)
                setErrorMessageServer(error.response.data.message)
                console.log("error.response.data.message", error.response.data.message)
            })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const showIndicationLogin = () => {
        setDisplayIndicationLogin(!displayIndicationLogin)
    }

    return (
        <div className="container">
            <section className="login-container">
                <div>
                    <img src={GAMEMASTER} className="login-logo" alt="Game Master"/>
                </div>
                <div className="hello-login">
                    <h1>Bienvenue dans World of Pangolins !</h1>
                    <h3>Connectez-vous</h3>
                    <p>Veuillez renseigner les champs suivants :</p>
                    <GiTrumpetFlag className="icon-indication" onClick={showIndicationLogin}/>
                </div>
                <form className="form-login" onSubmit={onSubmitLogin}>
                    <div className="form-group-login-error">
                        <div className="form-group-login">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" className="form-control"
                                   value={credentials.email}
                                   placeholder={"Email"}
                                   onChange={onChangeLogin}/>
                        </div>

                        <div className="error-text-container">
                            {errorEmail && <p className="error-text">{errorMessageEmail}</p>}
                        </div>
                    </div>

                    <div className="form-group-login-error">
                        <div className="form-group-login">
                            <label htmlFor="password">Mot de passe</label>
                            <input type={showPassword ? "text" : "password"} id="password" name="password"
                                   className="form-control"
                                   value={credentials.password} placeholder={"Mot de passe"}
                                   onChange={onChangeLogin}/>
                            {showPassword ? <IoEyeOutline className="icon-login"
                                                          onClick={togglePasswordVisibility}/> :
                                <IoEyeOffOutline className="icon-login"
                                                 onClick={togglePasswordVisibility}/>}
                        </div>

                        <div className="error-text-container">
                            {errorPassword && <p className="error-text">{errorMessagePassword}</p>}
                        </div>
                    </div>

                    {displayIndicationLogin &&
                        <div className="form-group-login-indication">
                            <p className="indication">Le mot de passe doit contenir au moins 8 caractères, une
                                majuscule, une minuscule, un chiffre et un caractère spécial</p>
                        </div>
                    }

                    <div className="form-group-login-error">
                        <div className="form-group-login">
                            <div className={"form-group-login-captcha"}
                                 style={{left: `${captchaPosition}%`}}>
                                <label htmlFor="human" className="checkbox-login">À cocher</label>
                                <input type="checkbox" id="human" name="human"
                                       onChange={() => {
                                           setIsHuman(!isHuman)
                                           console.log(isHuman)
                                       }}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group-login button">
                        <div className="first-button">
                            <button type="submit" className="btn primary" disabled={!isHuman}>Connexion</button>
                        </div>
                        <div className="register">
                            <Link className="register-link" to='/auth/register'>Vous n'avez pas de compte ?
                                Inscrivez-vous.</Link>
                        </div>
                    </div>

                    {errorServer && <div className="from-group">
                        <p className="error-text">{errorMessageServer}</p>
                    </div>}
                </form>
            </section>
        </div>
    );
};

export default Login;

import "../../../styles/userUpdateProfil.css";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {isNameValid} from "../../../_helpers/regexAuth";
import {usersService} from "../../../_services";
import {GiTrumpetFlag} from "react-icons/gi";

const UserUpdateName = () => {
    const [credentials, setCredentials] = useState({
        name: "",
    });
    const [errorName, setErrorName] = useState(false);
    const errorMessageName = 'Le nom doit contenir entre 3 et 25 caractères, sans espace';
    const [displayIndicationUpdateName, setDisplayIndicationUpdateName] = useState(false);
    const [errorServer, setErrorServer] = useState(false);
    const [errorMessageServer, setErrorMessageServer] = useState("");

    const navigate = useNavigate();

    const onChangeName = (e) => {
        setErrorServer(false);
        setErrorName(false);
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitUpdateName = (e) => {
        e.preventDefault()

        if (!isNameValid(credentials.name)) {
            setErrorName(true);
            console.log("Nom invalide");
            return;
        }

        console.log("credentials", credentials)
        usersService.updateName(credentials.name)
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

    const showIndicationUpdateName = () => {
        setDisplayIndicationUpdateName(!displayIndicationUpdateName)
    }


    return (
        <div className="container">
            <div className="update-container">
                <header className="title">
                    <h1>
                        Modifier
                    </h1>
                    <GiTrumpetFlag className="icon-indication" onClick={showIndicationUpdateName}/>
                </header>
                <form onSubmit={onSubmitUpdateName} className="form-update">
                    <div className="form-group-update-error">
                        <div className="form-group-update">
                            <label htmlFor="name">Nom d'utilisateur</label>
                            <input type="text" id="name" name="name" className="form-control" value={credentials.name}
                                   placeholder={"Name"}
                                   onChange={onChangeName}/>
                        </div>

                        {displayIndicationUpdateName &&
                            <div className="form-group-update-indication">
                                <p className="indication-update">Le nom doit contenir entre 3 et 25 caractères, sans
                                    espace</p>
                            </div>
                        }

                        <div className="error-text-container">
                            {errorName && <p className="error-text">{errorMessageName}</p>}
                        </div>
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

export default UserUpdateName;

import "../../../styles/endDonjon.css";
import {useNavigate} from "react-router-dom";

import useDonjonContext from "../../../hooks/useDonjon";

const EndDonjon = () => {
    const navigate = useNavigate();
    const {winOrLoos} = useDonjonContext();

    const goToNewGame = () => {
        navigate(`/donjon`);
    };

    const goToHome = () => {
        navigate(`/`);
    };

    return (
        <div className="end-game-container">
            <div className="show-container">
                <h2>Fin de la partie !</h2>

                <p className="win-or-loose">
                    Vous avez {winOrLoos}
                </p>
                <div>
                    <button className="btn primary" onClick={goToNewGame}>Rejouer</button>
                </div>
            </div>
            <div>
                <button className="btn secondary reset" onClick={goToHome}>Retour Accueil</button>
            </div>
        </div>
    );
};

export default EndDonjon;

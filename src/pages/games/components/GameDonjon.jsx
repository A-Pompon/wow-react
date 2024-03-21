import "../../../styles/gameDonjon.css";
import ArcImg from "../../../assets/signes/arc.png";
import BouclierImg from "../../../assets/signes/bouclier.png";
import LanceImg from "../../../assets/signes/lance.png";
import useDonjonContext from "../../../hooks/useDonjon";
import getImageOpponent from "../../../helpers/getImageOpponent";
import getImageSigne from "../../../helpers/getImageSigne";
import getImageRace from "../../../helpers/getImageRace";
import {useEffect, useState} from "react";

const GameDonjon = () => {
    const {
        scoreToReach,
        opponent,
        opponentImg,
        scoreUser,
        scorePlayer,
        setScorePlayer,
        scoreIa,
        setScoreIa,
    } = useDonjonContext();

    const [resultat, setResultat] = useState();
    const [player, setPlayer] = useState("");
    const [iaPlayer, setIaPlayer] = useState("");
    const [iaChoice] = useState(['Lance', 'Arc', 'Bouclier']);

    const stoneCase = () => {
        setPlayer("Lance");
        // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
        const randomIndex = Math.floor(Math.random() * 3);
        setIaPlayer(iaChoice[randomIndex]);
        console.log('Lance');
    }

    const paperCase = () => {
        setPlayer("Arc");
        const randomIndex = Math.floor(Math.random() * 3);
        setIaPlayer(iaChoice[randomIndex]);
        console.log('Arc');
    }

    const scissorsCase = () => {
        setPlayer("Bouclier");
        const randomIndex = Math.floor(Math.random() * 3);
        setIaPlayer(iaChoice[randomIndex]);
        console.log('Bouclier');
    }

    const playingCondition = () => {
        let result;

        if ((player === "Lance" && iaPlayer === "Bouclier") ||
            (player === "Arc" && iaPlayer === "Lance") ||
            (player === "Bouclier" && iaPlayer === "Arc")) {
            result = "Gagné !";
            setScorePlayer(scorePlayer + 1);
            setResultat(`${player} VS ${iaPlayer} : ${result}`);
        } else if ((player === "Lance" && iaPlayer === "Arc") ||
            (player === "Arc" && iaPlayer === "Bouclier") ||
            (player === "Bouclier" && iaPlayer === "Lance")) {
            result = "Perdu !";
            setScoreIa(scoreIa + 1);
            setResultat(`${player} VS ${iaPlayer} : ${result}`);
        } else {
            result = "Egalité !";
            setResultat(`${player} VS ${iaPlayer} : ${result}`);
        }
    };

    useEffect(() => {
        if (iaPlayer && player) {
            playingCondition()
            console.log("resultat", resultat)
            console.log('Score Player = ' + scorePlayer);
            console.log('Score IA = ' + scoreIa);
        }
    }, [player, iaPlayer]);

    return (
        <div className="donjon-container">
            <div className="game-board-container">
                <p className="score-reach">Nombre de PVs de l'adversaire : {scoreToReach}</p>
                <div className="opponent-card">
                    <div className="opponent-img">
                        <img className="img-card" src={getImageOpponent(opponentImg.toLowerCase())} alt="Opponent"/>
                    </div>
                    <div className="opponent-info">
                        <h4 className="opponent-name">
                            {opponent}
                        </h4>
                        <p className="opponent-pv">
                            PVs : {scoreToReach - scorePlayer}/{scoreToReach}
                        </p>
                        <div className="progress-bar">
                            <div className="progress-bar-fill" style={{
                                width: `${100 - 100 / scoreToReach * scorePlayer}%`,
                                backgroundColor: scorePlayer === scoreToReach - 1 ? 'red' : 'green'
                            }}></div>
                        </div>
                    </div>
                </div>
                <div className="fight-card">
                    <div style={{display: !iaPlayer ? 'flex' : 'none'}} className="pre-fight">
                        <h4 className="fight-img">
                            {opponent}
                        </h4>
                        <p className="fight-para">
                            VS
                        </p>
                        <h4 className="fight-img">
                            {scoreUser.name}
                        </h4>
                    </div>

                    <div style={{display: iaPlayer ? 'flex' : 'none'}} className="fight">
                        <div className="fight-img">
                            <img className="img-fight" src={getImageSigne(player.toLowerCase())}
                                 alt={`${scoreUser.name} choice`}/>
                        </div>
                        <p className="fight-para">
                            VS
                        </p>
                        <div className="fight-img">
                            <img className="img-fight" src={getImageSigne(iaPlayer.toLowerCase())}
                                 alt={`${opponent} choice`}/>
                        </div>
                    </div>

                    <div style={{display: iaPlayer && player ? 'flex' : 'none'}} className="resultat">
                        <h4 className="affichage">
                            {resultat}
                        </h4>
                    </div>
                </div>

                <div className="profil-card-donjon">
                    <div className="profil-info-donjon">
                        <h4 className="profil-name">
                            {scoreUser.name}
                        </h4>
                        <p className="profil-pv">
                            PVs : {5 - scoreIa}/5
                        </p>
                        <div className="progress-bar">
                            <div className="progress-bar-fill" style={{
                                width: `${100 - 100 / 5 * scoreIa}%`,
                                backgroundColor: scoreIa === 5 - 1 ? 'red' : 'green'
                            }}></div>
                        </div>
                    </div>
                    <div className="profil-img">
                        <img className="img-card" src={getImageRace(scoreUser.race)} alt="Race"/>
                    </div>
                </div>

                <div className="choice-card">
                    <button className="choice-image" onClick={stoneCase}>
                        <img className="img-choice" src={`${LanceImg}`} alt="Lance"/>
                    </button>
                    <button className="choice-image" onClick={paperCase}>
                        <img className="img-choice" src={`${ArcImg}`} alt="Arc"/>
                    </button>
                    <button className="choice-image" onClick={scissorsCase}>
                        <img className="img-choice" src={`${BouclierImg}`} alt="Bouclier"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameDonjon;

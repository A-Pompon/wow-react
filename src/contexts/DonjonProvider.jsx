import {createContext, useEffect, useState} from "react";
import {USERS} from "../pages/users/_mock-users";
import {useNavigate} from "react-router-dom";

const DonjonContext = createContext(null);

const DonjonProvider = ({children}) => {
    // Variable pour communiquer entre composants
    const [scoreToReach, setScoreToReach] = useState(undefined);
    const [opponent, setOpponent] = useState('');
    const [opponentImg, setOpponentImg] = useState('');
    const [winOrLoos, setWinOrLoos] = useState('');
    // RAJOUTER POUR AFFICHER SCORE DANS ENDGAME ?
    const [scorePlayerFinal, setScorePlayerFinal] = useState(0);
    const [scoreIaFinal, setScoreIaFinal] = useState(0);
    const [scoreUser, setScoreUser] = useState(undefined);

    // Initialisation des données
    const [scorePlayer, setScorePlayer] = useState(0);
    const [scoreIa, setScoreIa] = useState(0);
    const [pvPlayer, setPvPlayer] = useState(undefined); // SCORE PLAYER LVL 1 QU'ON PEUT MODIFIER

    const navigate = useNavigate();

    const goToEndGame = () => {
        navigate(`end`);
    };

    useEffect(() => {
        // Effet pour charger le profil du joueur
        setScoreUser(USERS[0]);
    }, [scoreUser]);

    useEffect(() => {
        console.log("scoreToReach", scoreToReach);
        console.log("pvPlayer", pvPlayer);
        console.log("winOrLoos", winOrLoos);
    }, [scoreToReach, pvPlayer]);

    useEffect(() => {
        if (scorePlayer === scoreToReach && scoreToReach > 0) {
            handleWinGame(scoreToReach);
        } else if (pvPlayer === scoreIa && pvPlayer > 0) {
            handleLooseGame(scoreToReach);
        }
    }, [scorePlayer, scoreToReach, pvPlayer, scoreIa]);

    const handleWinGame = (scoreToReach) => {
        let scoreChange = 0;
        let winMessage = '';
        if (scoreToReach === 3) {
            scoreChange = 3;
            winMessage = `GAGNE !! Félicitation vous avez vaincu le ${opponent} ! Vous avez gagné ${scoreToReach} points`;
            // donjonService.donjonLevelOneW().subscribe();
        } else if (scoreToReach === 5) {
            scoreChange = 5;
            winMessage = `GAGNE !! Félicitation vous avez vaincu le ${opponent} ! Vous avez gagné ${scoreToReach} points`;
            // donjonService.donjonLevelTwoW().subscribe();
        } else if (scoreToReach === 7) {
            scoreChange = 7;
            winMessage = `GAGNE !! Félicitation vous avez vaincu le ${opponent} ! Vous avez gagné ${scoreToReach} points`;
            // donjonService.donjonLevelThreeW().subscribe();
        }
        // donjonService.winGame().subscribe();
        console.log(`Envoie de ${scoreChange} points`);
        setWinOrLoos(winMessage);
        goToEndGame();
    };

    const handleLooseGame = (scoreToReach) => {
        let scoreChange = 0;
        let looseMessage = '';
        if (scoreToReach === 3) {
            scoreChange = 3;
            looseMessage = `PERDU... Vous ferez mieux la prochaine fois... Vous avez perdu ${scoreToReach} points.`;
            // donjonService.donjonLevelOneL().subscribe();
        } else if (scoreToReach === 5) {
            scoreChange = 5;
            looseMessage = `PERDU... Vous manquez d'exercice.. ? Vous avez perdu ${scoreToReach} points.`;
            // donjonService.donjonLevelTwoL().subscribe();
        } else if (scoreToReach === 7) {
            scoreChange = 7;
            looseMessage = `PERDU... Il est trop fort... Vous avez perdu ${scoreToReach} points.`;
            // donjonService.donjonLevelThreeL().subscribe();
        }
        // donjonService.looseGame().subscribe();
        console.log(`Soustraction de ${scoreChange} points`);
        setWinOrLoos(looseMessage);
        goToEndGame();
    };


    const scoreToEndLevel1 = () => {
        setScoreToReach(3);
        setPvPlayer(5);
        setOpponent('Soldat Fourmi');
        setOpponentImg('soldat-fourmi');
    };

    const scoreToEndLevel2 = () => {
        setScoreToReach(5);
        setPvPlayer(5);
        setOpponent('Colonel Fourmi');
        setOpponentImg('colonel-fourmi');
    };

    const scoreToEndLevel3 = () => {
        setScoreToReach(7);
        setPvPlayer(5);
        setOpponent('Roi Fourmi');
        setOpponentImg('roi-fourmi');
    };

    const resetStats = () => {
        setScoreToReach(0);
        setScorePlayer(0);
        setScoreIa(0);
    };


    return (
        <DonjonContext.Provider
            value={{
                scoreUser,
                scoreToReach,
                opponent,
                opponentImg,
                scorePlayer,
                setScorePlayer,
                scoreIa,
                setScoreIa,
                winOrLoos,
                setScoreToReach,
                scoreToEndLevel1,
                scoreToEndLevel2,
                scoreToEndLevel3,
                resetStats,
            }}>
            {children}
        </DonjonContext.Provider>
    );
};

export {DonjonProvider, DonjonContext}

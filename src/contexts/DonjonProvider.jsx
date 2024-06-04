import { createContext, useEffect, useState } from "react";
import { USERS } from "../pages/User/users/_mock-users";
import { useNavigate } from "react-router-dom";
import { gamesService, scoresService } from "../_services";

const DonjonContext = createContext(null);

const DonjonProvider = ({ children }) => {
  // Variable pour communiquer entre composants
  const [scoreToReach, setScoreToReach] = useState(undefined);
  const [opponent, setOpponent] = useState("");
  const [opponentImg, setOpponentImg] = useState("");
  const [winOrLoos, setWinOrLoos] = useState("");

  // RAJOUTER POUR AFFICHER SCORE DANS ENDGAME ?
  // const [scorePlayerFinal, setScorePlayerFinal] = useState(0);
  // const [scoreIaFinal, setScoreIaFinal] = useState(0);

  // Initialisation des données
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreIa, setScoreIa] = useState(0);
  const [pvPlayer, setPvPlayer] = useState(undefined); // SCORE PLAYER LVL 1 QU'ON PEUT MODIFIER

  const [gameId, setGameId] = useState();

  const navigate = useNavigate();

  const goToEndGame = () => {
    navigate(`end`);
  };

  // useEffect(() => {
  //     // Effet pour charger le profil du joueur
  //     setScoreUser(USERS[0]);
  // }, [scoreUser]);

  useEffect(() => {
    gamesService
      .getGameIdByName()
      .then((response) => {
        console.log("gameId", response.data.game_id);
        setGameId(response.data.game_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (scorePlayer === scoreToReach && scoreToReach > 0) {
      handleWinGame(scoreToReach);
    } else if (pvPlayer === scoreIa && pvPlayer > 0) {
      handleLooseGame(scoreToReach);
    }
  }, [scorePlayer, scoreToReach, pvPlayer, scoreIa]);

  const addVictory = (id) => {
    scoresService
      .addVictory(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addDefeat = (id) => {
    scoresService
      .addDefeat(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const winLevel1 = (id) => {
    scoresService
      .donjonLevelOneW(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const winLevel2 = (id) => {
    scoresService
      .donjonLevelTwoW(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const winLevel3 = (id) => {
    scoresService
      .donjonLevelThreeW(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const looseLevel1 = (id) => {
    scoresService
      .donjonLevelOneL(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const looseLevel2 = (id) => {
    scoresService
      .donjonLevelTwoL(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const looseLevel3 = (id) => {
    scoresService
      .donjonLevelThreeL(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleWinGame = (scoreToReach) => {
    let scoreChange = 0;
    let winMessage = "";
    if (scoreToReach === 3) {
      scoreChange = 3;
      winMessage = `GAGNE !! Félicitation vous avez vaincu le ${opponent} ! Vous avez gagné ${scoreToReach} points`;
      winLevel1(gameId);
    } else if (scoreToReach === 5) {
      scoreChange = 5;
      winMessage = `GAGNE !! Félicitation vous avez vaincu le ${opponent} ! Vous avez gagné ${scoreToReach} points`;
      winLevel2(gameId);
    } else if (scoreToReach === 7) {
      scoreChange = 7;
      winMessage = `GAGNE !! Félicitation vous avez vaincu le ${opponent} ! Vous avez gagné ${scoreToReach} points`;
      winLevel3(gameId);
    }
    // donjonService.winGame().subscribe();
    console.log(`Envoie de ${scoreChange} points`);
    addVictory(gameId);
    setWinOrLoos(winMessage);
    goToEndGame();
  };

  const handleLooseGame = (scoreToReach) => {
    let scoreChange = 0;
    let looseMessage = "";
    if (scoreToReach === 3) {
      scoreChange = 3;
      looseMessage = `PERDU... Vous ferez mieux la prochaine fois... Vous avez perdu ${scoreToReach} points.`;
      looseLevel1(gameId);
    } else if (scoreToReach === 5) {
      scoreChange = 5;
      looseMessage = `PERDU... Vous manquez d'exercice.. ? Vous avez perdu ${scoreToReach} points.`;
      looseLevel2(gameId);
    } else if (scoreToReach === 7) {
      scoreChange = 7;
      looseMessage = `PERDU... Il est trop fort... Vous avez perdu ${scoreToReach} points.`;
      looseLevel3(gameId);
    }
    // donjonService.looseGame().subscribe();
    console.log(`Soustraction de ${scoreChange} points`);
    addDefeat(gameId);
    setWinOrLoos(looseMessage);
    goToEndGame();
  };

  const scoreToEndLevel1 = () => {
    setScoreToReach(3);
    setPvPlayer(5);
    setOpponent("Soldat Fourmi");
    setOpponentImg("soldat-fourmi");
  };

  const scoreToEndLevel2 = () => {
    setScoreToReach(5);
    setPvPlayer(5);
    setOpponent("Colonel Fourmi");
    setOpponentImg("colonel-fourmi");
  };

  const scoreToEndLevel3 = () => {
    setScoreToReach(7);
    setPvPlayer(5);
    setOpponent("Roi Fourmi");
    setOpponentImg("roi-fourmi");
  };

  const resetStats = () => {
    setScoreToReach(0);
    setScorePlayer(0);
    setScoreIa(0);
  };

  return (
    <DonjonContext.Provider
      value={{
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
      }}
    >
      {children}
    </DonjonContext.Provider>
  );
};

export { DonjonProvider, DonjonContext };

import React, {useEffect, useState} from 'react';
import "../../../styles/levelDonjon.css";
import OpenDoorTranstition from "../../../helpers/OpenDoorTranstition";
import SOLDAT from "../../../assets/donjon/soldat-fourmi-t.png";
import COLONEL from "../../../assets/donjon/colonel-fourmi-t.png";
import ROI from "../../../assets/donjon/roi-fourmi-t.png";
import useDonjonContext from "../../../hooks/useDonjon";
import {useNavigate} from "react-router-dom";

const LevelDonjon = () => {
    const navigate = useNavigate();
    const {
        scoreToEndLevel1,
        scoreToEndLevel2,
        scoreToEndLevel3,
        resetStats,
    } = useDonjonContext();

    useEffect(() => {
        resetStats();
    }, []);

    const goToGame = () => {
        navigate(`/donjon/game`);
    };

    return (
        <div className="level-donjon">
            <h2>Choix du Donjon :</h2>
            <div className="levels">
                {/* Niveau 1 */}
                <div className="level-container">
                    <div className="doors">
                        <OpenDoorTranstition>
                            <div className="handle"></div>
                        </OpenDoorTranstition>
                        <div className="back-door">
                            <h2 className="level-para-back-door">Règle :</h2>
                            <p className="level-para-back-door">L'adversaire a 3 PVs.</p>
                            <button className="btn primary play"
                                    onClick={() => {
                                        goToGame();
                                        scoreToEndLevel1();
                                    }}>
                                Jouer
                            </button>
                            <img src={`${SOLDAT}`} alt="Adversaire soldat"
                                 className="level-img"/>
                        </div>
                    </div>
                </div>
                {/* Niveau 2 */}
                <div className="level-container">
                    <div className="doors">
                        <OpenDoorTranstition>
                            <div className="handle"></div>
                        </OpenDoorTranstition>
                        <div className="back-door">
                            <h2 className="level-para-back-door">Règle :</h2>
                            <p className="level-para-back-door">L'adversaire a 5 PVs.</p>
                            <button className="btn primary play"
                                    onClick={() => {
                                        goToGame();
                                        scoreToEndLevel2();
                                    }}>
                                Jouer
                            </button>
                            <img src={`${COLONEL}`} alt="Adversaire colonel"
                                 className="level-img"/>
                        </div>
                    </div>
                </div>
                {/* Niveau 3 */}
                <div className="level-container">
                    <div className="doors">
                        <OpenDoorTranstition>
                            <div className="handle"></div>
                        </OpenDoorTranstition>
                        <div className="back-door">
                            <h2 className="level-para-back-door">Règle :</h2>
                            <p className="level-para-back-door">L'adversaire a 7 PVs.</p>
                            <button className="btn primary play"
                                    onClick={() => {
                                        goToGame();
                                        scoreToEndLevel3();
                                    }}>
                                Jouer
                            </button>
                            <img src={`${ROI}`} alt="Adversaire roi"
                                 className="level-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LevelDonjon;

import React from "react";
import OpenDoorTranstition from "../../helpers/OpenDoorTranstition";
import GameMasterImage from "../../assets/roles/arnaud-transparent.png";
import "../../styles/notFound.css";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">
            <div className="not-found-container">
                <h2 className="not-found-text">*TOC TOC*</h2>
                <div className="doors">
                    {/* <div className="door">
            <div className="handle"></div>
          </div> */}
                    <OpenDoorTranstition>
                        <div className="handle"></div>
                    </OpenDoorTranstition>
                    <div className="back-door">
                        <img
                            src={`${GameMasterImage}`}
                            // src={require("../assets/roles/arnaud-transparent.png")} Vu sur StackOverFlow
                            // https://stackoverflow.com/questions/70818392/images-not-showing-in-react
                            alt="Game Master"
                            className="not-found-img"
                        />
                        <p className="not-found-para-back-door">Te serais-tu égaré.. ?</p>
                        <Link to="/" className="btn primary">
                            Accueil
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

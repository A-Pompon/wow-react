import Logo from "../../../../assets/logo/world-of-pangolin.png";
import {Link} from "react-router-dom";
import "../../../../styles/splash.css";

const Splash = () => {
    return (
        <div className="loader-container">
            <h2>Loading...</h2>
            <div className="loader">
                <img className="header-logo" src={`${Logo}`} alt="Logo WOP"/>
            </div>
        </div>
    );
};

export default Splash;

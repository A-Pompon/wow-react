import '../../../styles/headerAuth.css'
import Logo from "../../../assets/logo/world-of-pangolin.png";

const HeaderAuth = () => {
    return (
        <header>
            <div className="container-header">
                <div className="container-logo">
                    <div>
                        <img className="header-logo" src={`${Logo}`} alt="Logo WOP"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderAuth;

import "../../../styles/header.css";
import {Link, NavLink} from 'react-router-dom';
import Logo from "../../../assets/logo/world-of-pangolin.png";
// import {HomeOutlined, FireOutlined, OrderedListOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';

const Header = () => {
    return (
        <header>
            <div className="container-header">
                <div className="container-logo">
                    <Link to="/">
                        <img className="header-logo" src={`${Logo}`} alt="Logo WOP"/>
                    </Link>
                </div>
                <nav className="container-nav">
                    <ul className="header-nav">
                        <li><NavLink to="/" className="header-link">Accueil</NavLink></li>
                        <li><NavLink to="/donjon" className="header-link">Donjon</NavLink></li>
                        <li><NavLink to="/classement" className="header-link"
                        >Classement</NavLink>
                        </li>
                        <li><NavLink to="/friends" className="header-link">Amis</NavLink></li>
                        <li><NavLink to="/profil" className="header-link">Profil</NavLink></li>
                    </ul>
                </nav>

                <nav className="container-nav-mobile">
                    <ul className="header-nav">
                        <li><NavLink to="/" className="header-link">H</NavLink></li>
                        <li><NavLink to="/donjon" className="header-link">D</NavLink></li>
                        <li><NavLink to="/classement" className="header-link">C</NavLink></li>
                        <li><NavLink to="/friends" className="header-link">F</NavLink></li>
                        <li><NavLink to="/profil" className="header-link">P</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

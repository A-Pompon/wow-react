import "../../../styles/header.css";
import {Link, NavLink} from 'react-router-dom';
import Logo from "../../../assets/logo/world-of-pangolin.png";
import {IoHome} from "react-icons/io5";
import {FaDungeon, FaUserCircle, FaUserFriends} from "react-icons/fa";
import {FaRankingStar} from "react-icons/fa6";

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
                        <li><NavLink to="/classement" className="header-link">Classement</NavLink></li>
                        <li><NavLink to="/friends" className="header-link">Amis</NavLink></li>
                        <li><NavLink to="/profil" className="header-link">Profil</NavLink></li>
                    </ul>
                </nav>

                <nav className="container-nav-mobile">
                    <ul className="header-nav">
                        <li><NavLink to="/" className="mobile"><IoHome/></NavLink></li>
                        <li><NavLink to="/donjon" className="mobile"><FaDungeon/></NavLink></li>
                        <li><NavLink to="/classement" className="mobile"><FaRankingStar/></NavLink></li>
                        <li><NavLink to="/friends" className="mobile"><FaUserFriends/></NavLink></li>
                        <li><NavLink to="/profil" className="mobile"><FaUserCircle/></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

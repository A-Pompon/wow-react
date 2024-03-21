import "../../../styles/footer.css";
import Logo from "../../../assets/logo/world-of-pangolin.png";
import {Link, NavLink} from 'react-router-dom';
import {IoLogoGitlab, IoLogoGithub, IoGlobeOutline,} from "react-icons/io5";
import {IoLogoLinkedin} from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <div className="container-logo">
                    <Link to="/">
                        <img className="footer-logo" src={`${Logo}`} alt="Logo WOP"/>
                    </Link>
                </div>
                <nav className="container-nav">
                    <ul className="footer-nav">
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="/donjon">Donjon</NavLink></li>
                        <li><NavLink to="/classement">Classement</NavLink></li>
                        <li><NavLink to="/friends">Amis</NavLink></li>
                        <li><NavLink to="/profil">Profil</NavLink></li>
                    </ul>
                </nav>
                <div className="social-link">
                    <a title="CV Arnaud POMPONIO" href="https://pomponio.org" target="_blank"
                       rel="noopener noreferrer"><IoGlobeOutline/></a>
                    <a title="Profil Linkedin" href="https://www.linkedin.com/in/pomponio-arnaud/" target="_blank"
                       rel="noopener noreferrer"><IoLogoLinkedin/></a>
                    <a title="Lien Github" href="https://github.com/A-Pompon" target="_blank"
                       rel="noopener noreferrer"><IoLogoGithub/></a>
                    <a title="Lien Gitlab" href="https://gitlab.com/PomponArnaud" target="_blank"
                       rel="noopener noreferrer"><IoLogoGitlab/></a>
                </div>
                <p className="copy">&copy; Arnaud POMPONIO 2024.</p>
            </div>
        </footer>
    );
};

export default Footer;

import '../../../styles/footerAuth.css'
import Logo from "../../../assets/logo/world-of-pangolin.png";
import {IoGlobeOutline, IoLogoGithub, IoLogoGitlab} from "react-icons/io5";
import {IoLogoLinkedin} from "react-icons/io";

const FooterAuth = () => {
    return (
        <footer>
            <div className="container-footer">
                <div className="container-logo">
                    <div>
                        <img className="footer-logo" src={`${Logo}`} alt="Logo WOP"/>
                    </div>
                </div>
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

export default FooterAuth;

import "../../styles/home.css";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const goGame = () => {
        navigate('/donjon');
    };
    return (
        <section className="container">
            <article className="accueil">
                <h1 className="accueil-titre">Introduction :</h1>
                <div className="accueil-description">
                    <p className="para">
                        Bienvenue dans l'univers palpitant de World of Pangolins !
                        Préparez-vous à affronter le redoutable Roi Fourmi et ses acolytes
                        dans une aventure épique où la victoire vous donnera
                        l'opportunité d'atteindre le sommet du classement général.
                    </p>
                    <p className="para">
                        Embrassez l'excitation de <i>Lance, arc et bouclier</i>, un jeu
                        stratégique opposant deux maîtres du combat. Faites vos choix avec
                        ruse, car chaque coup a son adversaire naturel : les lances défient
                        les boucliers, les boucliers résistent aux arcs, et les arcs
                        triomphent des lances. C'est un jeu de tactique où chaque décision
                        compte. La victoire repose sur vos choix.
                    </p>
                    <p className="para">
                        Explorez trois donjons captivants, chacun offrant son lot de défis.
                        Choisissez judicieusement :
                    </p>
                    <p className="para">
                        {/* ===== REVOIR NOMBRE DE POINTS =====*/}
                        Donjon 1 +/- 3 points.
                        <br/> Donjon 2 +/- 5 points.
                        <br/>
                        Donjon 3 +/- 7 points.
                    </p>
                    <p className="para">
                        Êtes-vous prêt à relever le défi et à marquer votre place dans
                        l'histoire ?
                    </p>
                    <p className="para">
                        Comparez vos prouesses avec celles d'autres aventuriers intrépides
                        dans l'onglet "Classement". Grimpez les échelons et écrivez votre
                        légende dans World of Pangolins. Que l'aventure commence !
                    </p>
                </div>
                <button onClick={goGame} className="btn-game">JOUER</button>
            </article>
        </section>
    );
};

export default Home;

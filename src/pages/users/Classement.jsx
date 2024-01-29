import "../../styles/classement.css";
import ListUsers from "./components/ListUsers";

const Classement = () => {
    return (
        <section className="container">
            <div className="classement-container">
                <header className="title">
                    <h1>
                        Classement
                    </h1>
                </header>
                <div className="list-container">
                    <ListUsers/>
                </div>
            </div>
        </section>
    );
};

export default Classement;

import "../../../styles/donjon.css";
import {Outlet} from "react-router-dom";

const Donjon = () => {

    return (
        <section className="container">
            <div className="donjon-container">
                <header className="title">
                    <h1>
                        Donjon
                    </h1>
                </header>
                <Outlet/>
            </div>
        </section>
    );
};

export default Donjon;

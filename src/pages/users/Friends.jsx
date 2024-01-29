import "../../styles/friends.css";
import ListFriends from "./components/ListFriends";

const Friends = () => {
    return (
        <section className="container">
            <div className="classement-container">
                <header className="title">
                    <h1>
                        Amis
                    </h1>
                </header>
                <div className="list-container">
                    <ListFriends/>
                </div>
            </div>
        </section>
    );
};

export default Friends;

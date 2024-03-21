import Home from "./pages/core/Home";
import NotFound from "./pages/core/NotFound";
import {Route, Routes} from "react-router-dom";
import Header from "./pages/core/components/Header";
import Footer from "./pages/core/components/Footer";
import Classement from "./pages/users/Classement";
import UserDetails from "./pages/users/UserDetails";
import ScrollToTop from "./helpers/ScrollToTop";
import Friends from "./pages/users/Friends";
import Profil from "./pages/users/Profil";
import Donjon from "./pages/games/Donjon";
import GameDonjon from "./pages/games/components/GameDonjon";
import {DonjonProvider} from "./contexts/DonjonProvider";
import LevelDonjon from "./pages/games/components/LevelDonjon";
import EndDonjon from "./pages/games/components/EndDonjon";

const DonjonRoutes = () => (
    <DonjonProvider>
        <Routes>
            <Route path="/" element={<Donjon/>} errorElement={<NotFound/>}>
                <Route index element={<LevelDonjon/>}/>
                <Route path="game" element={<GameDonjon/>}/>
                <Route path="end" element={<EndDonjon/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    </DonjonProvider>
);

const ClassementRoutes = () => (
    <Routes>
        <Route index element={<Classement/>} errorElement={<NotFound/>}/>
        <Route path="/user/:userId" element={<UserDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
);

const FriendsRoutes = () => (
    <Routes>
        <Route index element={<Friends/>} errorElement={<NotFound/>}/>
        <Route path="/friend/:userId" element={<UserDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>

);

const App = () => {
    return (
        <>
            <Header/>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/classement/*" element={<ClassementRoutes/>}/>
                <Route path="/donjon/*" element={<DonjonRoutes/>}/>
                <Route path="/friends/*" element={<FriendsRoutes/>}/>
                <Route path="/profil" element={<Profil/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;

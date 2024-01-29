import Home from "./pages/core/Home";
import NotFound from "./pages/core/NotFound";
import {Route, Routes} from "react-router-dom";
import Header from "./pages/core/components/Header";
import Footer from "./pages/core/components/Footer";
import Classement from "./pages/users/Classement";
import UserDetails from "./pages/users/UserDetails";
import ScrollToTop from "./helpers/ScrollToTop";
import Friends from "./pages/users/Friends";

const App = () => {
    return (
        <>
            <Header/>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/classement" element={<Classement/>}/>
                <Route path="/classement/user/:userId" element={<UserDetails/>}/>
                <Route path="/friends" element={<Friends/>}/>
                <Route path="/friends/friend/:userId" element={<UserDetails/>}/>
                {/*<Route path={"/user/:userId"} element={<UserDetails/>}/>*/}
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;

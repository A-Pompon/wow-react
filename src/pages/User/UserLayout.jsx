import {Outlet} from "react-router-dom";
import Header from "./core/components/Header";
import ScrollToTop from "../../_helpers/ScrollToTop";
import Footer from "./core/components/Footer";

const UserLayout = () => {
    return (
        <>
            <Header/>
            <ScrollToTop/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default UserLayout;

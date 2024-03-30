import {Outlet} from "react-router-dom";
import HeaderAuth from "./components/HeaderAuth";
import FooterAuth from "./components/FooterAuth";

const AuthLayout = () => {
    return (
        <>
            <HeaderAuth/>
            <Outlet/>
            <FooterAuth/>
        </>
    );
};

export default AuthLayout;

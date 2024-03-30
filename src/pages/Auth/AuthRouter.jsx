import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NotFound from "../User/core/NotFound";
import AuthLayout from "./AuthLayout";

const AuthRouter = () => {
    return (
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route index element={<Login/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

export default AuthRouter;

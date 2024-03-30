import UserRouter from "./pages/User/UserRouter";
import {Route, Routes} from "react-router-dom";
import AuthRouter from "./pages/Auth/AuthRouter";
import AuthGuard from "./_utils/AuthGuard";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={
                    <AuthGuard>
                        <UserRouter/>
                    </AuthGuard>}/>
                <Route path="auth/*" element={<AuthRouter/>}/>
            </Routes>
        </>
    );
};

export default App;

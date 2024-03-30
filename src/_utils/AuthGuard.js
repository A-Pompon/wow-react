import {Navigate} from "react-router-dom";
import {authService} from "../_services";

/**
 * Fonction de vérification de token
 *
 * @param {Object} props{children}
 * @returns {ReactNode}
 */
const AuthGuard = ({children}) => {

    if (!authService.isLogged()) {
        return <Navigate to="/auth/login"/>;
    }
    return children
};

export default AuthGuard;

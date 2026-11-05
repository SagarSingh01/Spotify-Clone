import { Navigate } from "react-router-dom";
import useAuth from "../../Context Api/AuthContext";

const VerifyRoute = ({ children }) => {

    const { user } = useAuth()

    const pendingEmail = localStorage.getItem("verifyEmail")

    if (user?.verified) return <Navigate to="/" replace />

    if (!pendingEmail) return <Navigate to="/signup" replace />

    return children

}

export default VerifyRoute
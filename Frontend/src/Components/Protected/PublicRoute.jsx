import { Navigate } from "react-router-dom";
import useAuth from "../../Context Api/AuthContext";

const PublicRoute = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <div>Checking authentication...</div>
    }

    if (user) {
        return <Navigate to="/" replace />
    }

    return children
}

export default PublicRoute
import axios from "axios";
import { useEffect, createContext, useState, useContext } from "react";

const AuthContext = createContext()

export const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const checkAuth = async () => {
        try {
            const res = await API.get("/api/auth/me")
            setUser(res.data.user)
        }
        catch (err) {
            setUser(null)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    console.log(user)

    return (
        <AuthContext.Provider value={{ user, setUser, loading, checkAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export default useAuth
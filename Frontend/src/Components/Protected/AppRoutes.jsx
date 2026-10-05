import Login from '../Register/Login'
import ProtectedRoute from '../Protected/ProtectedRoute'
import PublicRoute from '../Protected/PublicRoute'
import Signup from '../Register/Signup'
import NotFound from '../../Error/NotFound'
import { Route, Routes } from 'react-router-dom'
import App from '../../App'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={
                <ProtectedRoute>
                    <App />
                </ProtectedRoute>
            } />
            <Route path='/login' element={
                <PublicRoute>
                    <Login />
                </PublicRoute>
            } />
            <Route path='/signup' element={
                <PublicRoute>
                    <Signup />
                </PublicRoute>} />

            {/* Not Found */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes
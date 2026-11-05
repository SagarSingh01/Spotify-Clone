import Login from '../Register/Login'
import ProtectedRoute from '../Protected/ProtectedRoute'
import PublicRoute from '../Protected/PublicRoute'
import Signup from '../Register/Signup'
import NotFound from '../../Error/NotFound'
import { Route, Routes } from 'react-router-dom'
import App from '../../App'
import Verify from '../Register/Verify'
import VerifyRoute from './VerifyRoute'
import PrivacyPolicy from '../Privacy Policy/PrivacyPolicy'

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

            {/* Verify */}
            <Route path='/verify' element={
                <VerifyRoute>
                    <Verify />
                </VerifyRoute>
            } />

            {/* Privacy Policy */}
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />

            {/* Not Found */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes
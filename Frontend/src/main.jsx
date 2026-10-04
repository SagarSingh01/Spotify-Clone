import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './Components/Register/Login.jsx'
import Signup from './Components/Register/Signup.jsx'
import { AuthProvider } from './Context Api/AuthContext.jsx'
import ProtectedRoute from './Components/Protected/ProtectedRoute.jsx'
import PublicRoute from './Components/Protected/PublicRoute.jsx'
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <AuthProvider>
      <Toaster position='top-center' />
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
      </Routes>
    </AuthProvider>
  </BrowserRouter>
)

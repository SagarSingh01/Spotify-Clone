import axios from 'axios'
import React, { useState } from 'react'
import { FaSpotify, FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import useAuth, { API } from '../../Context Api/AuthContext'
import toast from 'react-hot-toast'

function Login() {

  const { checkAuth } = useAuth()
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await API.post("/api/auth/login", formData, { withCredentials: true })
      await checkAuth()
      toast.success(res?.data.message || "Login Successful")
      navigate("/")
    }

    catch (err) {
      toast.error(err?.response.data.message || "Login Failed")
    }

    finally {
      setLoading(false)
    }

  }

  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white">

      <div className="mx-auto flex min-h-[90vh] max-w-md items-center justify-center">

        <div className="w-full rounded-2xl bg-zinc-900 px-6 py-8 shadow-2xl sm:px-10">

          {/* Logo */}
          <div className="mb-7 flex justify-center">
            <FaSpotify className="text-5xl text-green-500" />
          </div>

          {/* Heading */}
          <h1 className="text-center text-3xl font-bold">
            Welcome back
          </h1>

          <p className="mt-2 text-center text-sm text-zinc-400">
            Log in to continue listening
          </p>

          {/* FORM */}
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

            {/* Username */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handlechange}
                placeholder="Enter your username"
                required
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handlechange}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 pr-12 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-white"
                >
                  {showPassword
                    ? <FaEyeSlash />
                    : <FaEye />
                  }
                </button>

              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-zinc-400 underline underline-offset-4 hover:text-white"
              >
                Forgot password?
              </button>
            </div>

            {/* Login */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-full bg-[#1ed760] py-3 font-bold text-black transition hover:bg-[#1fdf64] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
              ) : (
                "Log In"
              )}
            </button>

          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-700" />
            <span className="text-xs text-zinc-500">OR</span>
            <div className="h-px flex-1 bg-zinc-700" />
          </div>

          {/* Signup */}
          <p className="text-center text-sm text-zinc-400">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-semibold text-white underline underline-offset-4 transition hover:text-green-400"
            >
              Sign up
            </Link>
          </p>

        </div>

      </div>
    </div>
  )
}

export default Login
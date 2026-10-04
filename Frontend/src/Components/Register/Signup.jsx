import axios from 'axios'
import React, { useState } from 'react'
import { FaSpotify, FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import useAuth, { API } from "../../Context Api/AuthContext"
import toast from 'react-hot-toast'

function Signup() {

  const navigate = useNavigate()

  const { checkAuth } = useAuth()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user"
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!/^[a-zA-Z0-9_]{3,20}$/.test(formData.username)) {
      newErrors.username = "Username must be 3-20 characters and contain only letters, numbers or _"
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address"
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    setLoading(true)

    try {
      const res = await API.post("/api/auth/register", formData, { withCredentials: true })
      await checkAuth()
      toast.success(res?.data.message || "User Registered Successfully")
      navigate("/")
    }

    catch (err) {
      toast.error(err?.response.data.message || "User Already Exist")
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

          <h1 className="text-center text-3xl font-bold">
            Create your account
          </h1>

          <p className="mt-2 text-center text-sm text-zinc-400">
            Join and start listening to your favorite music
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
                onChange={handleChange}
                placeholder="Choose a username"
                required
                className={`w-full rounded-lg border ${errors.username ? "border-red-500" : "border-zinc-700"
                  } bg-zinc-800 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-500 focus:ring-1 focus:ring-green-500`}
              />

              {errors.username && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.username}
                </p>
              )}
            </div>


            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className={`w-full rounded-lg border ${errors.email ? "border-red-500" : "border-zinc-700"
                  } bg-zinc-800 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-500 focus:ring-1 focus:ring-green-500`}
              />

              {errors.email && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>


            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  className={`w-full rounded-lg border ${errors.password ? "border-red-500" : "border-zinc-700"
                    } bg-zinc-800 px-4 py-3 pr-12 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-500 focus:ring-1 focus:ring-green-500`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-white"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.password}
                </p>
              )}
            </div>


            {/* Account Role */}
            <div>
              <label className="mb-3 block text-sm font-semibold">
                Choose your account type
              </label>

              <div className="grid grid-cols-2 gap-3">

                {/* Listener */}
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${formData.role === "user"
                    ? "border-green-500 bg-green-500/10"
                    : "border-zinc-700 bg-zinc-800 hover:border-zinc-500"
                    }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={formData.role === "user"}
                    onChange={handleChange}
                    className="accent-green-500"
                  />

                  <div>
                    <p className="font-semibold text-white">
                      Listener
                    </p>

                    <p className="text-xs text-zinc-400">
                      Listen to music
                    </p>
                  </div>
                </label>


                {/* Artist */}
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${formData.role === "artist"
                    ? "border-green-500 bg-green-500/10"
                    : "border-zinc-700 bg-zinc-800 hover:border-zinc-500"
                    }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="artist"
                    checked={formData.role === "artist"}
                    onChange={handleChange}
                    className="accent-green-500"
                  />

                  <div>
                    <p className="font-semibold text-white">
                      Artist
                    </p>

                    <p className="text-xs text-zinc-400">
                      Share your music
                    </p>
                  </div>
                </label>

              </div>

              {errors.role && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.role}
                </p>
              )}
            </div>


            {/* Terms */}
            <p className="text-xs leading-5 text-zinc-500">
              By creating an account, you agree to our Terms of
              Service and Privacy Policy.
            </p>


            {/* Register */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-full bg-[#1ed760] py-3 font-bold text-black transition hover:bg-[#1fdf64] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
              ) : (
                "Create Account"
              )}
            </button>

          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-700" />
            <span className="text-xs text-zinc-500">OR</span>
            <div className="h-px flex-1 bg-zinc-700" />
          </div>

          {/* Login */}
          <p className="text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-white underline underline-offset-4 transition hover:text-green-400"
            >
              Log in
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Signup
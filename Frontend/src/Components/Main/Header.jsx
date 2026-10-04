import React, { useState } from 'react'
import { FaSpotify, FaSearch, FaHome, FaUser, FaBars } from "react-icons/fa";
import { FiBell, FiDownload, FiLogOut, FiUser } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import useAuth from "../../Context Api/AuthContext"
import { API } from "../../Context Api/AuthContext"
import toast from 'react-hot-toast';

const Header = () => {

    const navigate = useNavigate()
    const { user, setUser } = useAuth()

    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogout = async () => {
        try {
            const res = await API.post("/api/auth/logout")
            setUser(null)
            setMenuOpen(false)
            toast.success(res?.data.message)
            navigate("/login")
        }
        catch (err) {
            toast.error(err?.response.data.message)
        }
    }

    return (
        <header className="sticky top-0 z-50 border-b border-white/6 bg-[#080808]/95 px-4 py-3 text-white backdrop-blur-2xl sm:px-6 lg:px-8">

            <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">

                {/* Logo + Home */}
                <div className="flex shrink-0 items-center gap-5">

                    <div
                        className="group flex cursor-pointer items-center gap-2"
                        onClick={() => navigate("/")}
                    >
                        <FaSpotify
                            size={34}
                            className="text-[#1ed760] transition-transform duration-300 group-hover:scale-110"
                        />

                        <span className="hidden text-xl font-bold tracking-[-0.8px] sm:block">
                            Spotify
                        </span>
                    </div>

                    <button
                        onClick={() => navigate("/")}
                        className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#1b1b1b] text-zinc-400 transition hover:bg-[#292929] hover:text-white sm:flex"
                        aria-label="Home"
                    >
                        <FaHome size={19} />
                    </button>

                </div>


                {/* Search Bar */}
                <div className="flex min-w-0 max-w-2xl flex-1 items-center">

                    <div className="group hidden h-11 w-full items-center rounded-full border border-white/6 bg-[#1b1b1b] transition-all duration-300 focus-within:border-white/20 focus-within:bg-[#242424] md:flex">

                        <FaSearch
                            size={17}
                            className="ml-4 shrink-0 text-zinc-400 transition-colors group-focus-within:text-white"
                        />

                        <input
                            type="text"
                            placeholder="What do you want to play?"
                            className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-zinc-500"
                        />

                        <button
                            className="mr-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-zinc-500 transition hover:bg-white/10 hover:text-white"
                            aria-label="Search"
                        >
                            <FaSearch size={14} />
                        </button>

                    </div>

                </div>


                {/* Right Actions */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-4">

                    {/* Install App */}
                    <button
                        className="hidden items-center gap-2 text-sm font-semibold text-zinc-400 transition hover:text-white lg:flex"
                    >
                        <FiDownload size={17} />
                        Install App
                    </button>


                    {/* Notification */}
                    <button
                        className="hidden h-10 w-10 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white md:flex"
                        aria-label="Notifications"
                    >
                        <FiBell size={19} />
                    </button>


                    <div className="hidden h-6 w-px bg-white/10 md:flex" />


                    {/* User */}
                    <div className="relative">

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0fa341] text-xl font-black text-white transition-all duration-300 hover:scale-102 hover:bg-[#3a3a3a]"
                            aria-label="User menu"
                        >
                            {user?.username?.[0]?.toUpperCase() || "U"}
                        </button>


                        {/* User Dropdown */}
                        {menuOpen && (
                            <div className="absolute right-0 top-13 w-56 overflow-hidden rounded-xl border border-white/10 bg-[#282828] p-1.5 shadow-2xl">

                                {/* User Information */}
                                <div className="border-b border-white/10 px-3 py-3">

                                    <p className="truncate text-sm font-bold text-white">
                                        {user?.username || "User"}
                                    </p>

                                    <p className="truncate text-xs text-zinc-400">
                                        {user?.email || "Account"}
                                    </p>

                                </div>


                                {/* Profile */}
                                <button
                                    onClick={() => {
                                        setMenuOpen(false)
                                    }}
                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
                                >
                                    <FiUser size={17} />
                                    Profile
                                </button>


                                {/* Logout */}
                                <button
                                    onClick={handleLogout}
                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
                                >
                                    <FiLogOut size={17} />
                                    Log out
                                </button>

                            </div>
                        )}

                    </div>


                    {/* Mobile Menu */}
                    <button className="md:hidden">
                        <FaBars size={20} />
                    </button>

                </div>

            </div>

        </header>
    )
}

export default Header
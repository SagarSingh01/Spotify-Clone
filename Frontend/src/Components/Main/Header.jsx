import React, { useState } from 'react'
import { FaSpotify, FaSearch, FaHome } from "react-icons/fa"
import { FiBell, FiDownload, FiLogOut, FiUser, FiX } from "react-icons/fi"
import { useNavigate } from 'react-router-dom'
import useAuth, { API } from "../../Context Api/AuthContext"
import toast from 'react-hot-toast'

function Header() {

    const navigate = useNavigate()
    const { user, setUser } = useAuth()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogout = async () => {
        try {
            const res = await API.post("/api/auth/logout")
            setUser(null)
            setMenuOpen(false)
            toast.success(res?.data?.message)
            navigate("/login")
        } catch (err) {
            toast.error(err?.response?.data?.message || "Logout failed")
        }
    }

    const menuItems = [
        { name: "Home", icon: FaHome, action: () => navigate("/") },
        { name: "Search", icon: FaSearch, action: () => navigate("/search") },
        { name: "Notifications", icon: FiBell, action: () => navigate("/Notifications") },
        { name: "Install App", icon: FiDownload, action: () => navigate("/InstallApp") },
        { name: "Profile", icon: FiUser, action: () => navigate("/Profile") },
        { name: "Log out", icon: FiLogOut, action: ()=> handleLogout() }
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-white/6 bg-[#080808]/95 px-4 py-3 text-white backdrop-blur-2xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">

                {/* Logo + Home */}
                <div className="flex shrink-0 items-center gap-5">
                    <div onClick={() => navigate("/")} className="group flex cursor-pointer items-center gap-2">
                        <FaSpotify size={34} className="text-[#1ed760] transition-transform duration-300 group-hover:scale-110" />
                        <span className="hidden text-xl font-bold tracking-[-0.8px] sm:block">Spotify</span>
                    </div>

                    <button
                        onClick={() => navigate("/")}
                        className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#1b1b1b] text-zinc-400 transition hover:bg-[#292929] hover:text-white sm:flex"
                        aria-label="Home"
                    >
                        <FaHome size={19} />
                    </button>
                </div>

                {/* Search */}
                <div className="flex min-w-0 max-w-2xl flex-1 items-center">
                    <div className="group hidden h-11 w-full items-center rounded-full border border-white/6 bg-[#1b1b1b] transition-all duration-300 focus-within:border-white/20 focus-within:bg-[#242424] md:flex">
                        <FaSearch size={17} className="ml-4 shrink-0 text-zinc-400 transition-colors group-focus-within:text-white" />
                        <input type="text" placeholder="What do you want to play?" className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-zinc-500" />
                        <button className="mr-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-zinc-500 transition hover:bg-white/10 hover:text-white" aria-label="Search">
                            <FaSearch size={14} />
                        </button>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-4">
                    <button className="hidden items-center gap-2 text-sm font-semibold text-zinc-400 transition hover:text-white lg:flex">
                        <FiDownload size={17} />
                        Install App
                    </button>

                    <button className="hidden h-10 w-10 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white md:flex" aria-label="Notifications">
                        <FiBell size={19} />
                    </button>

                    <div className="hidden h-6 w-px bg-white/10 md:flex" />

                    {/* Profile */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0fa341] text-xl font-black text-white transition-all duration-300 hover:bg-[#3a3a3a]"
                        aria-label="User menu"
                    >
                        {user?.username?.[0]?.toUpperCase() || "U"}
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            {menuOpen && (
                <>
                    <div onClick={() => setMenuOpen(false)} className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm" />
                    <aside className="fixed right-0 top-0 z-70 flex h-screen w-80 max-w-[85vw] flex-col border-l border-white/10 bg-[#121212] shadow-2xl duration-300 transition-all">
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
                            <div>
                                <h2 className="text-lg font-bold text-white">Your Account</h2>
                                <p className="mt-1 text-xs text-zinc-500">Manage your Spotify experience</p>
                            </div>

                            <button
                                onClick={() => setMenuOpen(false)}
                                className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white"
                            >
                                <FiX size={20} />
                            </button>
                        </div>

                        {/* User */}
                        <div className="p-4">
                            <div className="flex items-center gap-3 rounded-xl bg-[#1b1b1b] p-3">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1ed760] text-lg font-black text-black">
                                    {user?.username?.[0]?.toUpperCase() || "U"}
                                </div>

                                <div className="min-w-0">
                                    <p className="truncate text-sm font-bold text-white">{user?.username || "User"}</p>
                                    <p className="truncate text-xs text-zinc-500">{user?.email || "Account"}</p>
                                </div>
                            </div>
                        </div>

                        {/* Menu */}
                        <nav className="flex-1 overflow-y-auto px-3">
                            <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-zinc-600">Menu</p>

                            {menuItems.map((item, i) => {
                                const Icon = item.icon

                                return (
                                    <button
                                        key={i}
                                        onClick={() => item.action()}
                                        className={`group flex w-full items-center gap-4 rounded-lg px-3 py-3 text-sm font-medium transition ${item.name === "Log out" ? "text-red-400 hover:bg-red-500/10" : "text-zinc-300 hover:bg-white/10 hover:text-white"}`}
                                    >
                                        <Icon size={19} />
                                        {item.name}
                                    </button>
                                )
                            })}
                        </nav>
                    </aside>
                </>
            )}
        </header>
    )
}

export default Header
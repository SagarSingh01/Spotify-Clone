import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaEnvelope } from "react-icons/fa"
import { toast } from "react-hot-toast"
import useAuth, { API } from "../../Context Api/AuthContext"

function Verify() {
    const navigate = useNavigate()
    const { setUser } = useAuth()
    const [otp, setOtp] = useState("")
    const [loading, setLoading] = useState(false)

    const email = localStorage.getItem("verifyEmail")

    const handleVerify = async (e) => {
        e.preventDefault()

        if (otp.length !== 6) {
            return toast.error("Enter a valid 6-digit OTP")
        }

        try {
            setLoading(true)
            const response = await API.post("/api/auth/verify", { otp, email }, { withCredentials: true })
            setUser(response?.data.user)
            toast.success(response?.data.message || "Email verified successfully")
            navigate("/", { replace: true })
            localStorage.removeItem("verifyEmail")
        } catch (err) {
            toast.error(err?.response.data.message || "Verification failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-4 py-10 text-white">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl sm:p-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1ed760]/10 ring-1 ring-[#1ed760]/30">
                        <FaEnvelope className="text-2xl text-[#1ed760]" />
                    </div>

                    <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
                        Check your email
                    </h1>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400">
                        We sent a 6-digit verification code to {email} {" "}. Enter it below to
                        finish setting up your account.
                    </p>
                </div>

                <form onSubmit={handleVerify} className="mt-8">
                    {/* Six boxes for display, one real input stretched invisibly over them */}
                    <div className="group relative">
                        <div
                            className={`flex justify-center gap-2 transition-opacity sm:gap-3 ${loading ? "opacity-60" : ""
                                }`}
                            aria-hidden="true"
                        >
                            {Array.from({ length: 6 }).map((_, i) => {
                                const char = otp[i]
                                const isActive = !loading && i === Math.min(otp.length, 5)
                                return (
                                    <div
                                        key={i}
                                        className={`flex aspect-4/5 max-w-12 flex-1 select-none items-center justify-center rounded-xl border bg-zinc-800 text-2xl font-bold tabular-nums transition-all sm:text-3xl ${i === 2 ? "mr-2 sm:mr-3" : ""
                                            } ${char
                                                ? "border-[#1ed760]/60 bg-zinc-800 text-white"
                                                : "border-zinc-700 text-zinc-600"
                                            } ${isActive
                                                ? "group-focus-within:border-[#1ed760] group-focus-within:ring-4 group-focus-within:ring-[#1ed760]/20"
                                                : ""
                                            }`}
                                    >
                                        {char}
                                        {isActive && !char && (
                                            <span className="hidden h-7 w-0.5 animate-pulse rounded-full bg-[#1ed760] group-focus-within:block motion-reduce:animate-none" />
                                        )}
                                    </div>
                                )
                            })}
                        </div>

                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            autoComplete="one-time-code"
                            autoFocus
                            maxLength={6}
                            value={otp}
                            readOnly={loading}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                            required
                            aria-label="6-digit verification code"
                            className="absolute inset-0 h-full w-full cursor-text opacity-0"
                        />
                    </div>

                    {/* Progress + live helper text */}
                    <div className="mt-5">
                        <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-800">
                            <div
                                className="h-full rounded-full bg-[#1ed760] transition-all duration-300"
                                style={{ width: `${(otp.length / 6) * 100}%` }}
                            />
                        </div>
                        <p aria-live="polite" className="mt-2 text-center text-xs text-zinc-500">
                            {otp.length === 0
                                ? "Type or paste your code"
                                : otp.length === 6
                                    ? "Ready to verify"
                                    : `${6 - otp.length} more ${6 - otp.length === 1 ? "digit" : "digits"}`}
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || otp.length !== 6}
                        className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#1ed760] py-3.5 font-bold text-black transition hover:scale-[1.02] hover:bg-[#3be477] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1ed760]/40 active:scale-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
                    >
                        {loading && (
                            <span className="flex h-5 items-end gap-0.75" aria-hidden="true">
                                <span className="h-2 w-0.75 animate-pulse rounded-full bg-black" />
                                <span className="h-5 w-0.75 animate-pulse rounded-full bg-black [animation-delay:150ms]" />
                                <span className="h-3 w-0.75 animate-pulse rounded-full bg-black [animation-delay:300ms]" />
                                <span className="h-4 w-0.75 animate-pulse rounded-full bg-black [animation-delay:450ms]" />
                            </span>
                        )}
                        {loading ? "Verifying..." : "Verify email"}
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs leading-relaxed text-zinc-500">
                    <p>Didn't get the code? Check your spam or junk folder.</p>
                    <p className="mt-1">For your security, never share this code with anyone.</p>
                </div>
            </div>
        </div>
    )
}

export default Verify
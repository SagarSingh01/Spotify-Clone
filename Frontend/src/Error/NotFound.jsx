import { FaSpotify, FaHome, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-3xl"></div>

            <div className="relative z-10 flex max-w-lg flex-col items-center text-center">

                {/* Logo */}
                <div className="mb-8 flex items-center gap-2">
                    <FaSpotify className="text-4xl text-green-500" />
                    <span className="text-2xl font-bold tracking-tight">
                        Spotify
                    </span>
                </div>

                {/* 404 */}
                <h1 className="text-[120px] font-black leading-none tracking-tighter text-white sm:text-[150px]">
                    404
                </h1>

                {/* Message */}
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                    Page not found
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400 sm:text-base">
                    Looks like you've taken a wrong turn. The page you're
                    looking for doesn't exist or may have been moved.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3 font-semibold text-black transition hover:scale-105 hover:bg-green-400"
                    >
                        <FaHome />
                        Go Home
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center gap-2 rounded-full border border-zinc-700 px-7 py-3 font-semibold text-white transition hover:bg-zinc-900"
                    >
                        <FaArrowLeft />
                        Go Back
                    </button>

                </div>

                {/* Bottom text */}
                <p className="mt-10 text-xs text-zinc-600">
                    Error 404 • Nothing to play here
                </p>

            </div>
        </div>
    );
}

export default NotFound;
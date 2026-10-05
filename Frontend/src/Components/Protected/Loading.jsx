import { FaSpotify } from "react-icons/fa"

function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black">
            <div className="relative flex items-center justify-center">
                {/* Spinning Ring */}
                <div className="absolute h-20 w-20 animate-spin rounded-full border-4 border-gray-800 border-t-green-500" />
                {/* Spotify Logo */}
                <FaSpotify className="animate-pulse text-4xl text-green-500" />
            </div>
        </div>
    )
}

export default Loading
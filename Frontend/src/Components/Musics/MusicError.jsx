import { FaExclamationCircle } from "react-icons/fa";

const MusicError = () => {
    return (
        <div className="flex min-h-75 w-full flex-col items-center justify-center gap-4 rounded-xl bg-[#181818] px-5 py-10 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
                <FaExclamationCircle className="text-3xl text-red-500" />
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">
                    Something went wrong
                </h2>
                <p className="max-w-sm text-sm text-gray-400">
                    We couldn't load your music. Please check your internet
                    connection and try again.
                </p>
            </div>

            <button
                onClick={() => window.location.reload()}
                className="mt-2 rounded-full bg-[#1ed760] px-6 py-2.5 text-sm font-semibold text-black transition hover:scale-105 hover:bg-[#1fdf64] active:scale-95"
            >
                Try Again
            </button>
        </div>
    );
};

export default MusicError;
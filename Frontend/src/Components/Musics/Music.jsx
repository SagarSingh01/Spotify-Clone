import useFetch from '../../Custom Hooks/useFetch'
import { FaMusic } from "react-icons/fa";

const Music = () => {

    const [music] = useFetch("/api/music")

    return (
        <div className='p-5 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center'>

            {
                music?.map((song) => (
                    <div
                        key={song._id}
                        className="relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 p-4 shadow-white hover:shadow-md hover:-translate-y-1 duration-300 transition-all"
                    >
                        <div className="flex h-56 flex-col items-center justify-center rounded-xl bg-linear-to-br from-green-500 to-emerald-900">
                            <FaMusic className="text-white/90" size={60} />
                        </div>

                        <div className="mt-4">
                            <h2 className="truncate text-lg font-semibold text-white">
                                {song.title}
                            </h2>
                            <p className="text-sm text-zinc-400">Your Music • Track</p>
                        </div>

                        <audio
                            src={song.uri}
                            controls
                            className="mt-4 w-full"
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Music
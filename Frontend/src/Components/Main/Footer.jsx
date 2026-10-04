import {
    FaSpotify,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaGithub
} from 'react-icons/fa'

function Footer() {

    return (
        <footer className="mt-16 border-t border-zinc-800 bg-black px-6 py-10 text-zinc-400">

            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 text-white">
                        <FaSpotify className="text-3xl text-green-500" />
                        <span className="text-xl font-bold">Spotify</span>
                    </div>

                    <p className="mt-4 max-w-xs text-sm leading-6">
                        Listen to your favorite music and discover something new
                        every day.
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                        Company
                    </h3>

                    <div className="space-y-3 text-sm">
                        <a href="#" className="block transition hover:text-white">
                            About
                        </a>
                        <a href="#" className="block transition hover:text-white">
                            Careers
                        </a>
                        <a href="#" className="block transition hover:text-white">
                            Contact
                        </a>
                    </div>
                </div>

                {/* Support */}
                <div>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                        Support
                    </h3>

                    <div className="space-y-3 text-sm">
                        <a href="#" className="block transition hover:text-white">
                            Help Center
                        </a>
                        <a href="#" className="block transition hover:text-white">
                            Privacy
                        </a>
                        <a href="#" className="block transition hover:text-white">
                            Terms
                        </a>
                    </div>
                </div>

                {/* Social */}
                <div>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                        Follow Us
                    </h3>

                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition hover:bg-zinc-800 hover:text-white"
                        >
                            <FaInstagram size={18} />
                        </a>

                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition hover:bg-zinc-800 hover:text-white"
                        >
                            <FaTwitter size={18} />
                        </a>

                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition hover:bg-zinc-800 hover:text-white"
                        >
                            <FaYoutube size={18} />
                        </a>

                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition hover:bg-zinc-800 hover:text-white"
                        >
                            <FaGithub size={18} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-zinc-800 pt-6 text-xs sm:flex-row">
                <p>© {new Date().getFullYear()} Spotify. All rights reserved.</p>

                <p>
                    Made with <span className="text-green-500">♥</span> for music lovers
                </p>
            </div>

        </footer>
    )
}

export default Footer
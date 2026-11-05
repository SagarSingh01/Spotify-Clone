import { useRef } from "react"
import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import {
    FaSpotify,
    FaArrowLeft,
    FaShieldAlt,
    FaLock,
    FaKey,
    FaCookieBite,
    FaEnvelope,
} from "react-icons/fa"

const LAST_UPDATED = "November 5, 2026"
const CONTACT_EMAIL = "sagar12378089@gmail.com"
const HEADER_OFFSET = -96 

const highlights = [
    { icon: FaLock, title: "Passwords are hashed", text: "We never store your password in plain text." },
    { icon: FaKey, title: "Codes are protected", text: "Verification codes are hashed and deleted once used." },
    { icon: FaCookieBite, title: "Secure sessions", text: "Login sessions use HTTP-only cookies." },
]

const sections = [
    {
        id: "information",
        title: "Information We Collect",
        content: "We collect information you provide during registration, including your username, email address, and password. Passwords are hashed before storage. We may also store account and authentication information required to operate the application.",
    },
    {
        id: "verification",
        title: "Email Verification",
        content: "We use Nodemailer and Gmail with Google OAuth 2.0 to send six-digit OTP verification codes to registered email addresses. OTPs are stored in hashed form and used for email verification. They are deleted after successful verification.",
    },
    {
        id: "usage",
        title: "How We Use Your Information",
        content: "Your information is used to create and manage accounts, verify email addresses, authenticate users, provide application features, maintain security, and improve application functionality.",
    },
    {
        id: "cookies",
        title: "Cookies and Authentication",
        content: "We use HTTP-only authentication cookies to maintain login sessions and protect account-related features. Clearing these cookies may sign you out of the application.",
    },
    {
        id: "security",
        title: "Data Storage and Security",
        content: "We use reasonable security measures to protect user information. Passwords and OTPs are hashed before storage, authentication tokens are handled through secure cookies, and sensitive credentials are stored in environment variables. However, no online system can guarantee complete security.",
    },
    {
        id: "services",
        title: "Third-Party Services",
        content: "Our application uses MongoDB Atlas for database storage, Render for backend hosting, Vercel for frontend hosting, and Gmail with Google OAuth 2.0 for sending verification emails. These services may process information necessary to provide their functionality and are subject to their respective privacy policies.",
    },
    {
        id: "rights",
        title: "Data Retention and Your Rights",
        content: "We retain account information as necessary to provide our services. You may request access to, correction of, or deletion of your personal information by contacting us. Requests are handled subject to applicable legal and technical requirements.",
    },
    {
        id: "children",
        title: "Children's Privacy",
        content: "This application is not knowingly intended to collect personal information from children in violation of applicable laws. Please contact us if you believe a child has provided personal information.",
    },
    {
        id: "updates",
        title: "Changes to This Policy",
        content: "We may update this Privacy Policy when our application or data practices change. Updated versions will be published on this page with a revised date.",
    },
]

const pad = (i) => String(i + 1).padStart(2, "0")
const navLinks = [...sections, { id: "contact", title: "Contact Us" }]

// Table of contents with smooth scrolling and active-section highlighting (react-scroll)
function Toc({ className = "", onNavigate }) {
    return (
        <nav aria-label="Table of contents" className={className}>
            {navLinks.map((s, i) => (
                <ScrollLink
                    key={s.id}
                    to={s.id}
                    href={`#${s.id}`}
                    spy
                    smooth
                    duration={400}
                    offset={HEADER_OFFSET}
                    activeClass="active"
                    onClick={onNavigate}
                    className="block cursor-pointer border-l-2 border-transparent py-1.5 pl-4 text-sm text-zinc-500 transition hover:border-[#1ed760] hover:text-white [&.active]:border-[#1ed760] [&.active]:text-white"
                >
                    {i < sections.length ? `${pad(i)}. ` : ""}
                    {s.title}
                </ScrollLink>
            ))}
        </nav>
    )
}

function PrivacyPolicy() {
    const mobileMenu = useRef(null)

    return (
        <main className="min-h-screen bg-[#090909] text-white">
            {/* Header */}
            <header className="sticky top-0 z-10 border-b border-white/10 bg-[#090909]/90 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                    <Link to="/" className="flex items-center gap-3">
                        <FaSpotify className="text-3xl text-[#1ed760]" />
                        <span className="text-lg font-bold tracking-tight">Spotify</span>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-[#1ed760]/50 hover:text-white"
                    >
                        <FaArrowLeft className="text-xs" /> Back to Home
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="border-b border-white/10">
                <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#1ed760]/20 bg-[#1ed760]/10">
                        <FaShieldAlt className="text-2xl text-[#1ed760]" />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                        How we collect, use, store, and protect your information when you use
                        Spotify Clone.
                    </p>
                    <p className="mt-5 inline-block rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">
                        Last updated: {LAST_UPDATED}
                    </p>

                    {/* At a glance */}
                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        {highlights.map(({ icon: Icon, title, text }) => (
                            <div
                                key={title}
                                className="rounded-xl border border-white/10 bg-white/3 p-5"
                            >
                                <Icon className="text-lg text-[#1ed760]" />
                                <h2 className="mt-3 text-sm font-semibold">{title}</h2>
                                <p className="mt-1 text-sm leading-6 text-zinc-400">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content */}
            <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-[220px_1fr]">
                {/* Sidebar (desktop) */}
                <aside className="hidden lg:block">
                    <div className="sticky top-24">
                        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                            On this page
                        </p>
                        <Toc className="border-l border-white/10" />
                    </div>
                </aside>

                <div className="min-w-0">
                    {/* Dropdown (mobile), closes after picking a section */}
                    <details
                        ref={mobileMenu}
                        className="mb-8 rounded-xl border border-white/10 bg-white/3 p-4 lg:hidden"
                    >
                        <summary className="cursor-pointer text-sm font-semibold">
                            On this page
                        </summary>
                        <Toc
                            className="mt-3 border-l border-white/10"
                            onNavigate={() => mobileMenu.current?.removeAttribute("open")}
                        />
                    </details>

                    {/* Policy sections */}
                    <div className="divide-y divide-white/10">
                        {sections.map((s, i) => (
                            <section key={s.id} id={s.id} className="scroll-mt-24 py-8 first:pt-0">
                                <h2 className="flex items-baseline gap-3 text-lg font-semibold tracking-tight sm:text-xl">
                                    <span className="font-mono text-xs text-[#1ed760]">{pad(i)}</span>
                                    {s.title}
                                </h2>
                                <p className="mt-3 pl-8 text-sm leading-7 text-zinc-400 sm:text-[15px]">
                                    {s.content}
                                </p>
                            </section>
                        ))}
                    </div>

                    {/* Contact */}
                    <section
                        id="contact"
                        className="mt-10 scroll-mt-24 rounded-2xl border border-[#1ed760]/20 bg-[#1ed760]/5 p-6 sm:p-8"
                    >
                        <h2 className="flex items-center gap-3 text-xl font-bold">
                            <FaEnvelope className="text-[#1ed760]" /> Contact Us
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-zinc-400">
                            Questions about your personal information or this policy? Reach out
                            and we'll get back to you.
                        </p>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="mt-5 inline-flex rounded-full bg-[#1ed760] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#3be477]"
                        >
                            Contact Support
                        </a>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/10">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-center sm:flex-row sm:text-left">
                    <Link to="/" className="flex items-center gap-2 text-sm font-semibold">
                        <FaSpotify className="text-xl text-[#1ed760]" /> Spotify Clone
                    </Link>
                    <p className="text-xs leading-6 text-zinc-400">
                        © {new Date().getFullYear()} Spotify Clone. Independent educational
                        project, not affiliated with Spotify AB.
                    </p>
                </div>
            </footer>
        </main>
    )
}

export default PrivacyPolicy
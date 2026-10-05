import React from "react";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error Boundary caught an error:", error);
        console.error("Component Stack:", errorInfo.componentStack);
    }

    handleRetry = () => {
        window.location.reload();
    };

    handleHome = () => {
        window.location.href = "/";
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">

                    {/* Background Glow */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-[120px]" />

                    {/* Main Content */}
                    <div className="relative z-10 w-full max-w-xl text-center">

                        {/* Error Icon */}
                        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
                            <FaExclamationTriangle className="text-3xl text-red-500" />
                        </div>

                        {/* Label */}
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
                            Unexpected Error
                        </p>

                        {/* Heading */}
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Something went wrong
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-gray-400">
                            Something unexpected happened while loading this
                            page. Please try again or return to the home page.
                        </p>

                        {/* Buttons */}
                        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

                            {/* Try Again */}
                            <button
                                onClick={this.handleRetry}
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 font-semibold text-black transition-all duration-200 hover:scale-105 hover:bg-green-400 active:scale-95 sm:w-auto"
                            >
                                <FaRedo className="text-sm" />
                                Try Again
                            </button>

                            {/* Go Home */}
                            <button
                                onClick={this.handleHome}
                                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white transition-all duration-200 hover:border-white/20 hover:bg-white/10 active:scale-95 sm:w-auto"
                            >
                                <FaHome className="text-sm" />
                                Go Home
                            </button>

                        </div>

                        {/* Footer */}
                        <div className="mt-10 border-t border-white/5 pt-6">
                            <p className="text-xs leading-5 text-gray-600">
                                If the problem continues, try refreshing the
                                page or come back again later.
                            </p>
                        </div>

                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
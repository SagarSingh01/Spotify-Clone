const MusicSkeleton = () => {
    return (
        <section className="w-full space-y-6 animate-pulse p-4">
            {/* Music Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="rounded-xl bg-[#181818] p-3 space-y-3">
                        {/* Album Cover */}
                        <div className="aspect-square w-full rounded-lg bg-[#282828]" />

                        {/* Song Title */}
                        <div className="h-4 w-3/4 rounded bg-[#282828]" />

                        {/* Artist Name */}
                        <div className="h-3 w-1/2 rounded bg-[#282828]" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MusicSkeleton;
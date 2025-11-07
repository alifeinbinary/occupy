import useAnalyticsEventTracker from "../useAnalyticsEventTracker";

export default function Card() {
    const gaEventTracker = useAnalyticsEventTracker('Card');
    return (
        <div className="flex flex-col w-full xl:w-2/5 text-center justify-center overflow-y-hidden sm:leading-tight md:leading-loose">
            <div className="hero-otm p-6 md:p-8 rounded-xl shadow-lg text-white">
                <h1 className="my-4 text-3xl md:text-5xl text-white font-bold leading-normal">
                    Watch the award-winning documentary about the
                    <span className="">
                        &nbsp;Occupy Wall Street&nbsp;
                    </span>
                    movement
                </h1>
                <p className="leading-normal md:text-2xl mb-8 text-center text-red-200">
                    When dissent is duty
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://www.youtube.com/watch?v=p9dukgDjTEI"
                        target="_blank"
                        rel="noopener"
                        onClick={() => gaEventTracker('watch_youtube_cta')}
                        className="inline-block px-8 py-3 rounded-md bg-red-700 text-white font-semibold shadow hover:bg-red-800 transform hover:scale-105 transition"
                        aria-label="Watch the full film on YouTube"
                    >
                        Watch on YouTube
                    </a>
                    <a
                        href="#watch"
                        onClick={() => gaEventTracker('more_ways_cta')}
                        className="inline-block px-8 py-3 rounded-md border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transform hover:scale-105 transition bg-white/90"
                        aria-label="See more ways to watch"
                    >
                        More ways to watch
                    </a>
                </div>
            </div>
        </div>
    );
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faApple, faVimeo, faAmazon, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import useAnalyticsEventTracker from "../useAnalyticsEventTracker";

export default function Watch() {
    const gaEventTracker = useAnalyticsEventTracker('Watch');
    return (
        <div id="watch" className="mx-auto md:pt-12 sm:pt-0">
            <p className="text-bergundy text-3xl font-bold pt-8 text-center">
                Or watch it on
            </p>
            <div className="w-full mx-auto grid grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 justify-center md:justify-start pb-12 lg:pb-0 fade-in">
                <div className="mb-4">
                    <a id="youtube" aria-label="Watch on YouTube" href="https://www.youtube.com/watch?v=p9dukgDjTEI" target="_blank" rel="noopener" onClick={() => gaEventTracker('youtube')} className="flex items-center justify-center md:px-2 sm:px-4 sm:py-6 transform hover:scale-110 duration-300 ease-in-out">
                        <FontAwesomeIcon icon={faYoutube} className="text-red-600" size="3x" />
                    </a>
                </div>
                <div className="mb-4">
                    <a id="itunes" aria-label="Watch on Apple TV" href="https://tv.apple.com/ca/movie/occupy-the-movie/umc.cmc.5rqca6mfld6yjupka2otm5f83" target="_blank" rel="noopener" onClick={() => gaEventTracker('itunes')} className="flex items-center justify-center md:px-2 sm:px-4 sm:py-6 transform hover:scale-110 duration-300 ease-in-out">
                        <FontAwesomeIcon icon={faApple} className="text-black" size="3x" />
                    </a>
                </div>
                <div className="mb-4">
                    <a id="vimeo" aria-label="Watch on Vimeo" href="https://vimeo.com/ondemand/occupythemovie" target="_blank" rel="noopener" onClick={() => gaEventTracker('vimeo')} className="flex items-center justify-center md:px-2 sm:px-4 sm:py-6 transform hover:scale-110 duration-300 ease-in-out">
                        <FontAwesomeIcon icon={faVimeo} className="text-sky-600" size="3x" />
                    </a>
                </div>
                <div className="mb-4">
                    <a id="amazonprime" aria-label="Watch on Amazon" href="http://a.co/0ip1qCw" target="_blank" rel="noopener" onClick={() => gaEventTracker('amazonprime')} className="flex items-center justify-center md:px-2 sm:px-4 sm:py-6 transform hover:scale-110 duration-300 ease-in-out">
                        <FontAwesomeIcon icon={faAmazon} className="text-black" size="3x" />
                    </a>
                </div>
                <div className="mb-4">
                    <a id="googleplay" aria-label="Watch on Google Play" href="https://play.google.com/store/movies/details/Occupy_The_Movie?id=p9dukgDjTEI&hl=en_GB" target="_blank" rel="noopener" onClick={() => gaEventTracker('googleplay')} className="flex items-center justify-center md:px-2 sm:px-4 sm:py-6 transform hover:scale-110 duration-300 ease-in-out">
                        <FontAwesomeIcon icon={faGooglePlay} className="text-emerald-600" size="3x" />
                    </a>
                </div>
            </div>
        </div>
    );
}
import useAnalyticsEventTracker from "../useAnalyticsEventTracker";
import { Email } from "react-obfuscate-email";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faImdb } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const gaEventTracker = useAnalyticsEventTracker('Footer');
    return (
        <footer id="footer" className="mt-24 sm:mt-6 px-4 py-2 w-full bg-white rounded-lg shadow md:flex md:items-center md:justify-between" role="contentinfo">
            <div className="text-sm sm:mt-4 text-gray-500 sm:text-center">© 2022 Occupy: The Movie. <br />All Rights Reserved.
                <p className="text-gray-500 text-xs text-center mt-2">Site made by <a href="https://www.strangeways.dev" className="hover:underline">Strangeways.dev</a></p>
            </div>
            <div className="py-6 lg:py-0">
                <img className="mx-auto w-12" width="160" height="150" alt='Wall Street Bull' src="img/bull.png" aria-label="Wall Street Bull logo" />
            </div>
            <div className="sm:mt-4 flex flex-wrap items-center mt-3 text-sm text-gray-500">
                <div className="">
                    <span id="contact" className="px-2 inline-block">
                        <Email className="hover:underline" email="occupythemovie@gmail.com" subject="A message from occupythemovie.com" onClick={() => gaEventTracker('contact')}>Contact</Email>
                    </span>
                    <span className='px-2'>
                        <a id="licensing" onClick={() => gaEventTracker('licensing')} href="https://www.journeyman.tv/film/6524/occupy-the-movie" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </span>
                </div>
                <div className='sm:w-1/2 md:w-56 text-right'>
                    <a id="imdb" onClick={() => gaEventTracker('imdb')} className="inline-block text-bergundy no-underline hover:text-stone-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://www.imdb.com/title/tt2401752/?ref_=ext_shr_lnk" aria-label="IMDb">
                        <FontAwesomeIcon icon={faImdb} size="2x" />
                    </a>
                    <a id="twitter" onClick={() => gaEventTracker('twitter')} className="inline-block text-bergundy no-underline hover:text-stone-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/TheOccupyMovie" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a id="facebook" onClick={() => gaEventTracker('facebook')} className="inline-block text-bergundy no-underline hover:text-stone-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://www.facebook.com/OccupyTheMovie" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
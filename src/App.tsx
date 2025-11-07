import { useEffect } from 'react';
import './App.css';
import { Email } from "react-obfuscate-email";
import ReactGA from 'react-ga';
import useAnalyticsEventTracker from './useAnalyticsEventTracker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faApple, faVimeo, faAmazon, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function App() {
  const TRACKING_ID = "G-C5R969J4P5";
  ReactGA.initialize(TRACKING_ID);
  const gaEventTracker = useAnalyticsEventTracker('Home');
  useEffect(() => {
    // 👇️ adding multiple classes to body tag
    document.body.classList.add(
      'leading-normal',
      'tracking-normal',
      'text-black',
      'm-6',
      'bg-cover',
      'bg-fixed',
      'bg-image',
    );
  }, []);
  return (
    <div className="App">
      <div className="h-full">
        {/* <!--Main--> */}
        <div className="container pt-6 md:pt-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full xl:w-2/5 text-center justify-center overflow-y-hidden sm:leading-tight md:leading-loose">
            <h1 className="my-4 text-3xl md:text-5xl text-black opacity-75 font-bold leading-normal">
              Watch the award-winning documentary about the
              <span className="bg-clip-text text-transparent bg-linear-to-r from-red-400 via-gray-800 to-red-300">
                &nbsp;Occupy Wall Street&nbsp;
              </span>
              movement
            </h1>
            <p className="leading-normal md:text-2xl mb-8 text-center text-red">
              When dissent is duty
            </p>
          </div>
          {/* <!--Right Col--> */}
          <div className="flex flex-col w-full xl:w-3/5 2xl:p-12 lg:p-12 md:p-12 sm:p-0">
            <div className="relative h-0 overflow-hidden max-w-full w-full aspect-video">
              <iframe className="absolute top-0 left-0 w-full h-full" width="1920" height="1080" src="https://www.youtube.com/embed/HmGZS4ac7qQ?si=IFtS7mFOntg6qaYh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              {/* <iframe className="absolute top-0 left-0 w-full h-full" width="1920" height="1080" src="https://www.youtube.com/embed/HR3Ejz2Dti4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            </div>
          </div>
          <div className="mx-auto md:pt-12 sm:pt-0">
            <p className="text-bergundy text-3xl font-bold pb-8 lg:pb-6 text-center">
              Or watch it on
            </p>
            <div className="w-10/12 mx-auto grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 justify-center md:justify-start pb-12 lg:pb-0 fade-in">
              <div className="mb-4">
                <a id="youtube" aria-label="Watch on YouTube" href="https://www.youtube.com/watch?v=p9dukgDjTEI" onClick={() => gaEventTracker('youtube')} className="flex items-center justify-center md:px-2 sm:px-4 sm:py-6 transform hover:scale-110 duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faYoutube} className="text-red-600" size="6x" />
                </a>
              </div>
              <div className="mb-4">
                <a id="itunes" aria-label="Watch on Apple TV" href="https://tv.apple.com/ca/movie/occupy-the-movie/umc.cmc.5rqca6mfld6yjupka2otm5f83" onClick={() => gaEventTracker('itunes')} className="flex items-center justify-center md:px-2 sm:px-4 sm:py-6 transform hover:scale-110 duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faApple} className="text-black" size="6x" />
                </a>
              </div>
              <div className="mb-4">
                <a id="vimeo" aria-label="Watch on Vimeo" href="https://vimeo.com/ondemand/occupythemovie" onClick={() => gaEventTracker('vimeo')} className="flex items-center justify-center md:px-2 sm:px-4 sm:py-6 transform hover:scale-110 duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faVimeo} className="text-sky-600" size="6x" />
                </a>
              </div>
              <div className="mb-4">
                <a id="amazonprime" aria-label="Watch on Amazon" href="http://a.co/0ip1qCw" onClick={() => gaEventTracker('amazonprime')} className="flex items-center justify-center md:px-2 sm:px-4 sm:py-6 transform hover:scale-110 duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faAmazon} className="text-black" size="6x" />
                </a>
              </div>
              <div className="mb-4">
                <a id="googleplay" aria-label="Watch on Google Play" href="https://play.google.com/store/movies/details/Occupy_The_Movie?id=p9dukgDjTEI&hl=en_GB" onClick={() => gaEventTracker('googleplay')} className="flex items-center justify-center md:px-2 sm:px-4 sm:py-6 transform hover:scale-110 duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faGooglePlay} className="text-emerald-600" size="6x" />
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-full mx-auto flex align-items py-4 columns-5">
            <div className="w-1/5 sm:w-1/2 mr-4"><img src="img/OTM_DOXA13.png" alt='DOXA Film Festival' className="aspect-auto" /></div>
            <div className="w-1/5 sm:w-1/2 mr-4"><img src="img/OTM_hotdocs13.png" alt='HotDocs Film Festival' className="aspect-auto" /></div>
            <div className="w-1/5 sm:w-1/2 mr-4"><img src="img/OTM_LEOS13.png" alt='Leo Awards' className="aspect-auto" /></div>
            <div className="w-1/5 sm:w-1/2 mr-4"><img src="img/OTM_phoenix13.png" alt='Phoenix International Film Festival' className="aspect-auto" /></div>
            <div className="w-1/5 sm:w-1/2"><img src="img/OTM_SBFF13.png" alt='Santa Barbara Film Festival' className="aspect-auto" /></div>
          </div>
          {/* <!--Footer--> */}
          <section className="credits justify-center w-full py-3">
            <p className="text-gray-500 text-xs text-center">An <a href="https://www.coreyogilvie.com/" className="hover:underline">Ogilvie Film</a> and <a href="https://www.strangeways.co" className="hover:underline">Strangeways Studios</a> production</p>
          </section>
          <footer className="mt-24 sm:mt-6 px-4 py-2 w-full bg-white rounded-lg shadow md:flex md:items-center md:justify-between">
            <div className="text-sm sm:mt-4 text-gray-500 sm:text-center">© 2022 Occupy: The Movie. <br />All Rights Reserved.
              <p className="text-gray-500 text-xs text-center mt-2">Site made by <a href="https://www.strangeways.dev" className="hover:underline">Strangeways.dev</a></p>
            </div>
            <div className="py-6 lg:py-0">
              <img className="mx-auto w-12" alt='Wall Street Bull' src="img/bull.png" />
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
              <div className='sm:w-1/2 md:w-48 text-right'>
                <a id="twitter" onClick={() => gaEventTracker('twitter')} className="inline-block text-bergundy no-underline hover:text-stone-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/TheOccupyMovie">
                  <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path
                      d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                    ></path>
                  </svg>
                </a>
                <a id="facebook" onClick={() => gaEventTracker('facebook')} className="inline-block text-bergundy no-underline hover:text-stone-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://www.facebook.com/OccupyTheMovie">
                  <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

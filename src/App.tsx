import ReactGA from 'react-ga';
import useAnalyticsEventTracker from './useAnalyticsEventTracker';
import Watch from './components/Watch';
import Video from './components/Video';
import Header from './components/Header';
import Quotes from './components/Quotes';
import About from './components/About';
import Awards from './components/Awards';
import Press from './components/Press';
import Credits from './components/Credits';
import Footer from './components/Footer';
import './App.css';

function App() {
  const TRACKING_ID = "G-C5R969J4P5";
  ReactGA.initialize(TRACKING_ID);
  const gaEventTracker = useAnalyticsEventTracker('Home');

  return (
    <div className="bg-image">
      <div className="container pt-6 md:pt-6 mx-auto flex flex-wrap flex-col md:flex-row items-center text-center p-6 md:p-10">
        <Header />
        <Video />
        <Watch />
        <Quotes />
        <About />
        <Awards />
        <Press />
        <Credits />
        <Footer />
      </div>
    </div>
  );
}

export default App;

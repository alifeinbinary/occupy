import { useEffect } from 'react';
import ReactGA from 'react-ga';
import useAnalyticsEventTracker from './useAnalyticsEventTracker';
import Watch from './components/Watch';
import Video from './components/Video';
import Card from './components/Card';
import Quotes from './components/Quotes';
import Synopsis from './components/Synopsis';
import Laurels from './components/Laurels';
import Credits from './components/Credits';
import Footer from './components/Footer';
import './App.css';

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
        <div className="container pt-6 md:pt-6 mx-auto flex flex-wrap flex-col md:flex-row items-center p-6 md:p-10">
          <Card />
          <Video />
          <Watch />
          <Quotes />
          <Synopsis />
          <Laurels />
          <Credits />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

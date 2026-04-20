import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsSATT from './components/WhatIsSATT';
import JourneyBegins from './components/JourneyBegins';
import AboutSATT from './components/AboutSATT';
import PathForward from './components/PathForward';
import WhereAwareness from './components/WhereAwareness';
import JoinACircle from './components/JoinACircle';
import Reflections from './components/Reflections';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      <Navbar />
      <Hero />
      <WhatIsSATT />
      <JourneyBegins />
      <AboutSATT />
      <PathForward />
      <WhereAwareness />
      <JoinACircle />
      <Reflections />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
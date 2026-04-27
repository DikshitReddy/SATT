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
import LifeMapReflection from './components/LifeMapReflection';

function App() {
  return (
    <div className=" w-full overflow-x-hidden bg-[#F6F5F4] min-h-screen">
      <Navbar />
      <Hero />
      <WhatIsSATT />
      <JourneyBegins />
      <AboutSATT />
      <PathForward />
      <LifeMapReflection />
      <WhereAwareness />
      <JoinACircle />
      <Reflections />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
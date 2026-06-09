import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Research from '@/components/sections/Research';
import Timeline from '@/components/sections/Timeline';
import Achievements from '@/components/sections/Achievements';
import Education from '@/components/sections/Education';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

function App() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Research />
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <Achievements />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

export default App;

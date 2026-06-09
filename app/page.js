import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/sections/Hero';
import ResearchPreview from '@/components/sections/ResearchPreview';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import LeadershipImpact from '@/components/sections/LeadershipImpact';
import WorkWithMePreview from '@/components/sections/WorkWithMePreview';
import ContactPreview from '@/components/sections/ContactPreview';
import Footer from '@/components/sections/Footer';

function App() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <SectionDivider />
      <ResearchPreview />
      <SectionDivider />
      <FeaturedProjects />
      <SectionDivider />
      <LeadershipImpact />
      <SectionDivider />
      <WorkWithMePreview />
      <SectionDivider />
      <ContactPreview />
      <Footer />
    </main>
  );
}

function SectionDivider() {
  return <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />;
}

export default App;

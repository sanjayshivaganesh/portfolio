import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/sections/Hero';
import FocusAreas from '@/components/sections/FocusAreas';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ResearchPreview from '@/components/sections/ResearchPreview';
import LeadershipImpact from '@/components/sections/LeadershipImpact';
import CollaborateWithMe from '@/components/sections/CollaborateWithMe';
import ContactPreview from '@/components/sections/ContactPreview';
import Footer from '@/components/sections/Footer';

// Homepage flow (locked):
// 1. Identity (Hero)
// 2. Focus areas (clarity in 3 seconds)
// 3. Proof (Featured Projects)
// 4. Depth (Research)
// 5. Credibility (Impact & Leadership)
// 6. Conversion (Collaborate With Me + Contact)
function App() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <SectionDivider />
      <FocusAreas />
      <SectionDivider />
      <FeaturedProjects />
      <SectionDivider />
      <ResearchPreview />
      <SectionDivider />
      <LeadershipImpact />
      <SectionDivider />
      <CollaborateWithMe />
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

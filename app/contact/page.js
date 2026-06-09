import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import PageHero from '@/components/PageHero';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch for research collaborations, software projects, and select freelance engagements.',
};

export default function ContactPage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation."
        description="Reach out for research collaborations, product builds, or anything at the intersection of quantum computing, AI, and software."
      />
      <Contact />
      <Footer />
    </main>
  );
}

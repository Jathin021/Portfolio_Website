import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import GitHubSection from '@/components/GitHubSection';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CircuitBackground from '@/components/CircuitBackground';
import ScrollProgress from '@/components/ScrollProgress';
import QuickNav from '@/components/QuickNav';
import CursorFollower from '@/components/CursorFollower';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Cursor follower */}
      <CursorFollower />
      
      {/* Quick navigation */}
      <QuickNav />
      
      {/* Animated circuit background */}
      <CircuitBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubSection />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

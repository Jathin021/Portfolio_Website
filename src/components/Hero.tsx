import { ArrowDown, FileDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in hover:border-primary/50 hover:bg-secondary/70 transition-all duration-300 cursor-default group">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow group-hover:scale-125 transition-transform" />
            <code className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
              <span className="text-accent">const</span> enthusiast = <span className="text-primary">"Embedded & IoT"</span>;
            </code>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Embedded & IoT Enthusiast</span>
            <br />
            <span className="gradient-text">Building Real-World</span>
            <br />
            <span className="text-foreground">Hardware Solutions</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Specializing in <span className="text-primary">Microcontrollers</span>, <span className="text-primary">Sensors</span>, and <span className="text-primary">Real-time Systems</span>. 
            Transforming concepts into functional embedded solutions.
          </p>

          {/* Name badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border mb-10 animate-fade-in hover:border-primary/50 hover:shadow-glow-sm transition-all duration-300 cursor-default" style={{ animationDelay: '0.3s' }}>
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" />
            <span className="font-mono text-lg">
              <span className="text-muted-foreground">~/</span>
              <span className="text-foreground font-semibold">Jathin Pusuluri</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" onClick={scrollToProjects} className="group hover:scale-105 transition-transform duration-300">
              View Projects
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="group hover:scale-105 transition-transform duration-300">
              <a href="#contact">
                <FileDown className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://www.linkedin.com/in/jathin-pusuluri021/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm group hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:scale-110" />
            </a>
            <a
              href="https://github.com/Jathin021"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-accent/10 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow-accent group hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors group-hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Cpu, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Cpu className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="font-bold text-foreground">Jathin Pusuluri</span>
              <p className="text-xs text-muted-foreground">Embedded & IoT Enthusiast</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/jathin-pusuluri021/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://github.com/Jathin021"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all"
            >
              <Github className="h-4 w-4 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="mailto:jathin.pusuluri@email.com"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all"
            >
              <Mail className="h-4 w-4 text-muted-foreground hover:text-primary" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-4 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-glow-md z-40 ${
              showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-y-[-2px] transition-all" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jathin Pusuluri. Built with passion for embedded systems.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            <span className="terminal-text">{'<Embedded.IoT.Enthusiast />'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

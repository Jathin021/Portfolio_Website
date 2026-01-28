import { Cpu, Wifi, Zap, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Deep expertise in microcontroller programming and real-time system design',
    },
    {
      icon: Wifi,
      title: 'IoT Architecture',
      description: 'End-to-end IoT solutions from sensor integration to cloud connectivity',
    },
    {
      icon: Zap,
      title: 'Hardware Integration',
      description: 'Bridging hardware and software for seamless embedded solutions',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Turning complex engineering challenges into practical implementations',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - About text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-sm font-mono text-muted-foreground">About Me</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-foreground">Electrical Enthusiast with a </span>
              <span className="gradient-text">Passion for Embedded Systems</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an <span className="text-primary font-medium">Electrical & Electronics Engineering</span> undergraduate 
                with hands-on experience in designing and implementing embedded systems and IoT solutions. 
                My approach combines theoretical knowledge with practical, project-driven learning.
              </p>
              <p>
                From programming <span className="text-primary font-medium">ESP32 and Arduino microcontrollers</span> to 
                building distributed IoT architectures, I focus on creating solutions that work in real-world conditions. 
                Every project I undertake prioritizes reliability, efficiency, and practical application.
              </p>
              <p>
                My experience spans across <span className="text-accent font-medium">ESP-IDF, FreeRTOS, sensor integration, 
                and wireless communication protocols</span>. I'm constantly exploring new technologies and pushing 
                the boundaries of what's possible with embedded systems.
              </p>
            </div>

            {/* Terminal-style quote */}
            <div className="p-4 rounded-lg bg-card border border-border font-mono text-sm hover:border-primary/50 hover:shadow-glow-sm transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <span className="w-3 h-3 rounded-full bg-destructive/60 group-hover:bg-destructive transition-colors" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60 group-hover:bg-yellow-500 transition-colors" />
                <span className="w-3 h-3 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
                <span className="ml-2 text-xs group-hover:text-foreground transition-colors">philosophy.txt</span>
              </div>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                <span className="text-accent">$</span> echo <span className="text-primary">"Build it. Test it. Deploy it."</span>
              </p>
            </div>
          </div>

          {/* Right column - Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-glow p-6 space-y-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

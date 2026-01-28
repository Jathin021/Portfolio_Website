import { Github, GitBranch, Code, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GitHubSection = () => {
  const repos = [
    {
      name: 'AutoDine-Smart-Restaurant-IoT',
      description: 'ESP32-based IoT platform for autonomous table-side food ordering and real-time kitchen coordination',
      language: 'C',
      stars: 0,
      url: 'https://github.com/Jathin021/AutoDine-Smart-Restaurant-Table-to-Kitchen-Coordination-Platform-using-IoT',
    },
    {
      name: 'Smart-EV-Accident-Detection',
      description: 'Arduino-based EV safety system with accident detection, GPS+SMS alerts, and battery monitoring',
      language: 'C',
      stars: 0,
      url: 'https://github.com/Jathin021/Smart-EV-Accident-Detection-Emergency-Alert-System',
    },
    {
      name: 'STM32_Basics',
      description: 'STM32F103C6 "Blue Pill" beginner projects using STM32CubeIDE with OLED, ultrasonic sensor, and GPIO',
      language: 'C',
      stars: 2,
      url: 'https://github.com/Jathin021/STM32_Basics',
    },
    {
      name: 'ESP32_Industry_Style',
      description: 'ESP-IDF projects with industry-style embedded C, PWM, timing, and state machine design patterns',
      language: 'C',
      stars: 0,
      url: 'https://github.com/Jathin021/Esp32_basics_Industry_Style-LED-Buzzer-',
    },
    {
      name: 'Embedded-Project-Ideas',
      description: 'Curated collection of practical embedded systems and IoT projects with real-world relevance',
      language: 'C++',
      stars: 0,
      url: 'https://github.com/Jathin021/embedded-project-ideas',
    },
    {
      name: 'Arduino-Basics',
      description: 'Foundational Arduino projects covering GPIO, sensors, and basic embedded programming concepts',
      language: 'C++',
      stars: 0,
      url: 'https://github.com/Jathin021/Arduino-Basics',
    },
  ];

  const languageColors: Record<string, string> = {
    'C': 'bg-muted-foreground',
    'C++': 'bg-destructive',
    'Python': 'bg-primary',
  };

  return (
    <section id="github" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-4">
            <Github className="h-4 w-4 text-accent" />
            <span className="text-sm font-mono text-muted-foreground">Open Source</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">GitHub </span>
            <span className="gradient-text">Repositories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Embedded systems projects, IoT solutions, and microcontroller experiments — all open source
          </p>
        </div>

        {/* Repository grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {repos.map((repo, index) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow p-5 group animate-fade-in hover:border-primary/40 transition-colors"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-muted-foreground" />
                  <span className="font-mono text-sm text-primary group-hover:text-primary/80 transition-colors truncate max-w-[180px]">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {repo.description}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || 'bg-muted'}`} />
                  <span>{repo.language}</span>
                </div>
                {repo.stars > 0 && (
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    <span>{repo.stars}</span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* GitHub profile CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-xl bg-card border border-border">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Code className="h-7 w-7 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">More on GitHub</p>
              <p className="text-sm text-muted-foreground">STM32, ESP32, Arduino & IoT projects</p>
            </div>
            <Button variant="outline" asChild>
              <a href="https://github.com/Jathin021" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Visit Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;

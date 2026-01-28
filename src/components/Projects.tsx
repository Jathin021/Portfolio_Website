import { ExternalLink, Github, Cpu, Utensils, Car, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AutoDine - Smart Restaurant IoT Platform',
      subtitle: 'ESP32 + ESP-IDF + WiFi',
      description: 'An ESP32-based IoT platform that enables autonomous table-side food ordering and real-time table-to-kitchen coordination. Customers place orders via an embedded interface with OLED display, while the kitchen manages order status through a browser-based dashboard.',
      problem: 'Traditional restaurant ordering relies on manual waiter service, leading to delays, miscommunication, and inefficient table-to-kitchen coordination during peak hours.',
      solution: 'Dual ESP32 distributed architecture where one device serves as the customer table unit (OLED + buttons) and another as the host unit running an embedded web server. Orders flow via WiFi with real-time status updates back to the table.',
      hardware: ['ESP32 DevKit V1', 'SSD1306 OLED Display', 'Push Buttons', 'WiFi Module'],
      software: ['ESP-IDF', 'Embedded C', 'HTTP Server', 'JSON Parsing', 'WiFi Communication'],
      impact: 'Eliminates manual order-taking, reduces miscommunication, and enables real-time kitchen coordination for smart restaurants.',
      icon: Utensils,
      featured: true,
      github: 'https://github.com/Jathin021/AutoDine-Smart-Restaurant-Table-to-Kitchen-Coordination-Platform-using-IoT',
    },
    {
      id: 2,
      title: 'Smart EV Accident Detection System',
      subtitle: 'Arduino + GPS + GSM + Multi-Sensor',
      description: 'A comprehensive Arduino-based EV safety system with real-time accident detection, GPS+SMS emergency alerts, alcohol sensing, battery monitoring, temperature management, and post-accident automatic window opening for enhanced road safety.',
      problem: 'Electric vehicles lack integrated safety systems that can detect accidents, alert emergency services, monitor driver sobriety, and manage critical systems like battery temperature in real-time.',
      solution: 'Multi-sensor integration with tilt sensor for collision detection, GPS+GSM for location-based SMS alerts, alcohol sensor for driver monitoring, DHT11 for thermal management, and voltage/current sensors for battery health tracking.',
      hardware: ['Arduino UNO', 'Tilt Sensor', 'DHT11', 'GSM SIM800L', 'GPS Module', 'LCD 16x2', 'ACS712 Current Sensor', 'DC Motor', 'Relay Module'],
      software: ['Embedded C', 'GPS NMEA Parsing', 'GSM AT Commands', 'Sensor Fusion', 'LCD I2C'],
      impact: 'Enhances EV road safety through automation and instant emergency response with published research references in IConSCEPT 2024.',
      icon: Car,
      featured: true,
      github: 'https://github.com/Jathin021/Smart-EV-Accident-Detection-Emergency-Alert-System',
    },
    {
      id: 3,
      title: 'Smart Home Automation',
      subtitle: 'IoT + Wireless Control',
      description: 'A modular home automation system enabling remote control of appliances via wireless communication with real-time status monitoring and energy-efficient operation.',
      problem: 'Traditional home appliances lack remote monitoring and control capabilities, leading to energy waste and inconvenience.',
      solution: 'Microcontroller-based system with relay modules for appliance control. Wireless communication enables remote operation with status feedback through LED indicators and display.',
      hardware: ['Arduino', 'ESP8266 WiFi Module', 'Multi-channel Relay', 'Current Sensors', 'LED Indicators'],
      software: ['Embedded C', 'WiFi AT Commands', 'HTTP Requests', 'State Management'],
      impact: 'Enables energy-efficient home management with estimated 20% reduction in unnecessary power consumption.',
      icon: Radio,
      featured: false,
      github: 'https://github.com/Jathin021',
    },
    {
      id: 4,
      title: 'ESP32 Industry-Style Projects',
      subtitle: 'ESP-IDF + PWM + State Machines',
      description: 'A collection of beginner-to-intermediate ESP32 projects using ESP-IDF framework, focusing on LED and buzzer applications with industry-style embedded C, timing, PWM, and state machine design patterns.',
      problem: 'Most tutorials teach Arduino-style code that doesn\'t translate well to industry embedded development practices.',
      solution: 'Projects structured using ESP-IDF with proper FreeRTOS patterns, state machines, and industry-standard coding practices for professional embedded development.',
      hardware: ['ESP32 DevKit', 'LEDs', 'Buzzer', 'Push Buttons'],
      software: ['ESP-IDF', 'FreeRTOS', 'PWM Driver', 'State Machine Design'],
      impact: 'Bridges the gap between hobby projects and industry-ready embedded development skills.',
      icon: Cpu,
      featured: false,
      github: 'https://github.com/Jathin021/Esp32_basics_Industry_Style-LED-Buzzer-',
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-sm font-mono text-muted-foreground">Project Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Featured </span>
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world embedded systems projects showcasing hardware-software integration and practical problem-solving
          </p>
        </div>

        {/* Featured projects - detailed cards */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card-glow p-6 md:p-8 animate-fade-in hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project info */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <project.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-primary font-mono text-sm">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Problem & Solution */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                      <h4 className="text-sm font-semibold text-destructive mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-destructive" />
                        Problem
                      </h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                      <h4 className="text-sm font-semibold text-accent mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        Solution
                      </h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="text-sm font-semibold text-primary mb-1">Real-World Impact</h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>
                </div>

                {/* Technical details sidebar */}
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-primary" />
                      Hardware Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.hardware.map((item) => (
                        <span key={item} className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Github className="h-4 w-4 text-accent" />
                      Software Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.software.map((item) => (
                        <span key={item} className="px-2 py-1 text-xs rounded bg-accent/10 text-accent border border-accent/20">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group hover:scale-105 transition-transform duration-300" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects - compact cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className="card-glow p-6 animate-fade-in hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <project.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <p className="text-accent font-mono text-xs">{project.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.hardware.slice(0, 4).map((item) => (
                  <span key={item} className="px-2 py-0.5 text-xs rounded bg-secondary text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="w-full group hover:scale-105 transition-transform duration-300" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  View Code
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/Jathin021" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Cpu, Wifi, CircuitBoard, Code } from 'lucide-react';
import { useState, useMemo } from 'react';
import AnimatedCounter from './AnimatedCounter';
import SkillFilter from './SkillFilter';

const Skills = () => {
  const [filter, setFilter] = useState('');

  const skillCategories = [
    {
      icon: Cpu,
      title: 'Embedded Systems',
      color: 'primary',
      skills: ['Arduino', 'Microcontrollers', 'Embedded C', 'Real-time Systems', 'Firmware Development', 'UART/SPI/I2C'],
    },
    {
      icon: Wifi,
      title: 'IoT & Communication',
      color: 'accent',
      skills: ['GSM Modules', 'GPS Integration', 'IoT Architecture', 'Wireless Protocols', 'MQTT', 'Sensor Networks'],
    },
    {
      icon: CircuitBoard,
      title: 'Hardware & Electronics',
      color: 'primary',
      skills: ['Circuit Design', 'Sensors & Actuators', 'Relay Control', 'PCB Basics'],
    },
    {
      icon: Code,
      title: 'Programming & Tools',
      color: 'accent',
      skills: ['C/C++', 'Python', 'Arduino IDE', 'Git/GitHub', 'Basic Web (HTML/CSS)'],
    },
  ];

  const filteredCategories = useMemo(() => {
    if (!filter) return skillCategories;
    
    return skillCategories.map(category => ({
      ...category,
      skills: category.skills.filter(skill => 
        skill.toLowerCase().includes(filter) || category.title.toLowerCase().includes(filter)
      )
    })).filter(category => category.skills.length > 0);
  }, [filter]);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-mono text-muted-foreground">Technical Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Technical </span>
            <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive skill set spanning embedded development, IoT systems, and hardware integration
          </p>
          
          {/* Skill Filter */}
          <SkillFilter onFilterChange={setFilter} />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-glow p-6 animate-fade-in hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  category.color === 'primary' 
                    ? 'bg-primary/10 border border-primary/20 group-hover:bg-primary/20' 
                    : 'bg-accent/10 border border-accent/20 group-hover:bg-accent/20'
                }`}>
                  <category.icon className={`h-6 w-6 transition-transform duration-300 hover:scale-110 ${
                    category.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-badge group/skill hover:scale-105 transition-all duration-200"
                    style={{ animationDelay: `${(index * 0.1 + skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {filter && filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No skills found matching "{filter}"</p>
          </div>
        )}

        {/* Additional metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: '4+', label: 'Projects Completed' },
            { value: '2+', label: 'Years Learning' },
            { value: '8+', label: 'Technologies' },
            { value: '∞', label: 'Curiosity' },
          ].map((stat, index) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={400 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

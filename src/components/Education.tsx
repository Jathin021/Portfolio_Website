import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Electrical & Electronics Engineering',
      institution: 'SASTRA DEEMED TO BE UNIVERSITY',
      period: '2022 - 2026',
      highlights: [
        'Focus on Embedded Systems and Control Theory',
        'Hands-on projects with microcontrollers by building various projects like Smart EV Accident Detection System, AutoDine - Smart Restaurant IoT Platform, etc.',
        'Hosted and organized technical workshops and events via Daksh Workshops and Hospitality Club',
      ],
    },
  ];

  const certifications = [
    {
      title: 'Foundation course on Embedded C programming using STM32 Microcontroller.',
      issuer: 'Online Certification - Udemy',
      year: '2025',
    },
    {
      title: 'Mastering Microcontroller and Embedded Driver Development',
      issuer: 'Online Certification - Udemy',
      year: '2025',
    },
    {
      title: 'IoT Fundamentals',
      issuer: 'Online Certification - Pantech Solutions',
      year: '2026',
    },
  ];

  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">Education</span>
            </div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="card-glow p-6 animate-fade-in"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.field}</p>
                    <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-sm font-mono text-muted-foreground">Certifications & Training</span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="card-glow p-4 flex items-center gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-sm font-mono text-primary">{cert.year}</span>
                </div>
              ))}
            </div>

            {/* Technical Workshops note */}
            <div className="mt-6 p-4 rounded-lg bg-card border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">Continuous Learning: </span>
                Active participation in technical workshops, hackathons, and hands-on training programs focused on embedded systems and IoT technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

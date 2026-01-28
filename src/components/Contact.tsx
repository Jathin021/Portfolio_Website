import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'p.jathin021@gmail.com',
      href: 'mailto:p.jathin021@gmail.com',
      color: 'primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Jathin Pusuluri',
      href: 'https://www.linkedin.com/in/jathin-pusuluri021/',
      color: 'primary',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Jathin021',
      href: 'https://github.com/Jathin021',
      color: 'accent',
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-4">
            <Send className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Let's </span>
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in discussing embedded systems, IoT projects, or collaboration opportunities? I'd love to hear from you.
          </p>
        </div>

        {/* Contact cards */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow p-6 text-center group animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                contact.color === 'primary'
                  ? 'bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:shadow-glow-sm'
                  : 'bg-accent/10 border border-accent/20 group-hover:bg-accent/20 group-hover:shadow-glow-accent'
              }`}>
                <contact.icon className={`h-6 w-6 ${
                  contact.color === 'primary' ? 'text-primary' : 'text-accent'
                }`} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{contact.label}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl" asChild className="group hover:scale-105 transition-transform duration-300">
            <a href="mailto:jathin.pusuluri@email.com">
              <Mail className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Send a Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

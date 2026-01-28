import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
  delay?: number;
}

const AnimatedCounter = ({ value, label, delay = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseInt(value.replace(/\D/g, ''));
    if (isNaN(numericValue)) {
      // For non-numeric values like "∞", show immediately
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    const stepDuration = duration / steps;

    let current = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    
    const timer = setTimeout(() => {
      intervalId = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          if (intervalId) clearInterval(intervalId);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isVisible, value, delay]);

  const displayValue = value.includes('∞') ? value : value.replace(/\d+/, count.toString());

  return (
    <div
      ref={elementRef}
      className="text-center p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm group"
    >
      <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
        {displayValue}
      </div>
      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;

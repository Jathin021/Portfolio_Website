import { useEffect, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  Icon: LucideIcon;
  className?: string;
  delay?: number;
}

const AnimatedIcon = ({ Icon, className = '', delay = 0 }: AnimatedIconProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
      }`}
    >
      <Icon className={className} />
    </div>
  );
};

export default AnimatedIcon;

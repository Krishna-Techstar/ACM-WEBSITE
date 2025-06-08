
import { useState } from 'react';

const navItems = [
  { name: 'Home', icon: '⌂' },
  { name: 'Events', icon: '📅' },
  { name: 'Blogs', icon: '📝' },
  { name: 'ACM-W', icon: '👥' },
  { name: 'DSP', icon: '🔬' },
  { name: 'FAQ', icon: '❓' },
  { name: 'Contact', icon: '📞' },
];

export const NavigationButtons = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 mb-16 max-w-6xl mx-auto">
      {navItems.map((item, index) => (
        <button
          key={item.name}
          onMouseEnter={() => setActiveButton(item.name)}
          onMouseLeave={() => setActiveButton(null)}
          className="holo-button group relative h-20 md:h-24 flex flex-col items-center justify-center space-y-2 transform transition-all duration-300 hover:scale-105"
          style={{ 
            animationDelay: `${index * 100}ms`,
            animation: 'fade-in 0.6s ease-out forwards'
          }}
        >
          {/* Icon */}
          <div className="text-2xl md:text-3xl mb-1 transition-transform duration-300 group-hover:scale-110">
            {item.icon}
          </div>
          
          {/* Text */}
          <span className="text-xs md:text-sm font-medium text-tech-blue group-hover:text-tech-cyan transition-colors duration-300">
            {item.name}
          </span>
          
          {/* Active indicator */}
          {activeButton === item.name && (
            <div className="absolute inset-0 rounded-lg border-2 border-tech-cyan animate-glow-pulse"></div>
          )}
          
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-tech-blue to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </button>
      ))}
    </div>
  );
};


import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', icon: '⌂', path: '/' },
  { name: 'Events', icon: '📅', path: '/events' },
  { name: 'Blogs', icon: '📝', path: '/blogs' },
  { name: 'ACM-W', icon: '👥', path: '/acm-w' },
  { name: 'FAQ', icon: '❓', path: '/faq' },
  { name: 'Contact', icon: '📞', path: '/contact' },
];

export const NavigationButtons = () => {
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16 max-w-6xl mx-auto">
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.name}
            to={item.path}
            onMouseEnter={() => setActiveButton(item.name)}
            onMouseLeave={() => setActiveButton(null)}
            className={`holo-button group relative h-20 md:h-24 flex flex-col items-center justify-center space-y-2 transform transition-all duration-300 hover:scale-105 ${
              isActive ? 'border-tech-cyan bg-tech-cyan/10' : ''
            }`}
            style={{ 
              animationDelay: `${index * 100}ms`,
              animation: 'fade-in 0.6s ease-out forwards'
            }}
          >
            <div className="text-2xl md:text-3xl mb-1 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            
            <span className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
              isActive ? 'text-tech-cyan' : 'text-tech-blue group-hover:text-tech-cyan'
            }`}>
              {item.name}
            </span>
            
            {(activeButton === item.name || isActive) && (
              <div className="absolute inset-0 rounded-lg border-2 border-tech-cyan animate-glow-pulse"></div>
            )}
            
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-tech-blue to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </Link>
        )
      })}
    </div>
  );
};

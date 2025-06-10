
import { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { NavigationButtons } from './NavigationButtons';
import { CircuitBackground } from './CircuitBackground';
import { TechOverlay } from './TechOverlay';

export const PageLayout = ({ children, title, subtitle }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-200 to-slate-400 dark:from-tech-dark dark:to-slate-900 overflow-hidden transition-all duration-500"
    >
      <CircuitBackground />
      <TechOverlay />
      <ThemeToggle />
      
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-4 pt-16">
        <div className="text-center mb-8 space-y-4">
          <div className="tech-glass rounded-2xl p-6 scan-effect">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-tech-blue to-tech-cyan bg-clip-text text-transparent mb-2">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base md:text-lg text-slate-700 dark:text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <NavigationButtons />

        <div className="w-full max-w-6xl mx-auto">
          {children}
        </div>
      </div>

      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-tech-blue opacity-50 dark:opacity-30"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-tech-blue opacity-50 dark:opacity-30"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-tech-blue opacity-50 dark:opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-tech-blue opacity-50 dark:opacity-30"></div>
    </div>
  );
};

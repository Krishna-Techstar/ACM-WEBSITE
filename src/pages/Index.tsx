
import { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import { NavigationButtons } from '../components/NavigationButtons';
import { AIRobot } from '../components/AIRobot';
import { HologramLogo } from '../components/HologramLogo';
import { CircuitBackground } from '../components/CircuitBackground';
import { TechOverlay } from '../components/TechOverlay';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
      className="relative min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 dark:from-tech-dark dark:to-slate-900 overflow-hidden transition-all duration-500"
    >
      {/* Circuit Background */}
      <CircuitBackground />
      
      {/* Tech Overlay Effects */}
      <TechOverlay />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="tech-glass rounded-2xl p-8 scan-effect">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-tech-blue to-tech-cyan bg-clip-text text-transparent mb-4">
              ACM Student Chapter BVDUDET NM
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-muted-foreground max-w-2xl mx-auto">
              Welcome to the future of technology. Experience our advanced computing interface.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <NavigationButtons />

        {/* AI Robot */}
        <AIRobot mousePosition={mousePosition} />

        {/* Hologram Logo */}
        <HologramLogo mousePosition={mousePosition} />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-tech-blue opacity-50 dark:opacity-30"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-tech-blue opacity-50 dark:opacity-30"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-tech-blue opacity-50 dark:opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-tech-blue opacity-50 dark:opacity-30"></div>
    </div>
  );
};

export default Index;

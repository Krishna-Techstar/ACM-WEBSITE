
import { useEffect, useState } from 'react';

export const AIRobot = ({ mousePosition }) => {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [isWalking, setIsWalking] = useState(false);

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = mousePosition.x - centerX;
    const deltaY = mousePosition.y - centerY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 200;
    
    if (distance > 50) {
      const normalizedX = deltaX / distance;
      const normalizedY = deltaY / distance;
      
      const targetDistance = Math.min(distance - 100, maxDistance);
      
      setRobotPosition({
        x: normalizedX * targetDistance,
        y: normalizedY * targetDistance
      });
      
      setIsWalking(true);
      
      const timeout = setTimeout(() => setIsWalking(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [mousePosition]);

  return (
    <div 
      className={`fixed top-1/2 left-1/2 z-20 pointer-events-none transition-all duration-700 ease-out ${isWalking ? 'animate-robot-walk' : ''}`}
      style={{
        transform: `translate(calc(-50% + ${robotPosition.x}px), calc(-50% + ${robotPosition.y}px))`
      }}
    >
      <div className="relative">
        <div className="w-20 h-16 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-200 dark:to-gray-300 rounded-3xl mx-auto mb-2 relative shadow-lg">
          <div className="absolute inset-2 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
            <div className="flex space-x-3">
              <div className="w-3 h-3 bg-tech-blue rounded-full animate-pulse shadow-lg"></div>
              <div className="w-3 h-3 bg-tech-blue rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
        
        <div className="w-24 h-28 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-200 dark:via-gray-300 dark:to-gray-400 rounded-3xl relative shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-tech-blue font-bold text-lg tracking-wider">ACM</span>
          </div>
          
          <div className="absolute top-2 left-2 right-2 h-1 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-2 left-2 right-2 h-1 bg-black/10 rounded-full"></div>
        </div>
        
        <div className="absolute top-20 -left-4 w-3 h-12 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-200 dark:to-gray-400 rounded-full shadow-md"></div>
        <div className="absolute top-20 -right-4 w-3 h-12 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-200 dark:to-gray-400 rounded-full shadow-md"></div>
        
        <div className={`absolute -bottom-2 left-3 w-3 h-8 bg-gradient-to-b from-gray-200 to-gray-400 dark:from-gray-300 dark:to-gray-500 rounded-full shadow-md transition-all duration-300 ${isWalking ? 'transform rotate-12' : ''}`}></div>
        <div className={`absolute -bottom-2 right-3 w-3 h-8 bg-gradient-to-b from-gray-200 to-gray-400 dark:from-gray-300 dark:to-gray-500 rounded-full shadow-md transition-all duration-300 ${isWalking ? 'transform -rotate-12' : ''}`}></div>
        
        <div className="absolute inset-0 rounded-3xl border border-tech-blue/30 animate-glow-pulse"></div>
        <div className="absolute inset-0 rounded-3xl border border-tech-cyan/20 animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

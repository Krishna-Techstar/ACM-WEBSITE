
import { useEffect, useState } from 'react';

interface AIRobotProps {
  mousePosition: { x: number; y: number };
}

export const AIRobot = ({ mousePosition }: AIRobotProps) => {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [isWalking, setIsWalking] = useState(false);

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Calculate distance from center to mouse
    const deltaX = mousePosition.x - centerX;
    const deltaY = mousePosition.y - centerY;
    
    // Move robot towards cursor (with some offset to stay away from cursor)
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
      
      // Stop walking animation after movement
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
      {/* Robot Body */}
      <div className="relative">
        {/* Main Body */}
        <div className="w-16 h-20 md:w-20 md:h-24 tech-glass rounded-2xl relative overflow-hidden">
          {/* Head */}
          <div className="w-8 h-8 md:w-10 md:h-10 tech-glass rounded-full mx-auto mt-2 relative">
            {/* Eyes */}
            <div className="flex justify-center space-x-2 mt-2">
              <div className="w-1.5 h-1.5 bg-tech-blue rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-tech-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          
          {/* Body Pattern */}
          <div className="absolute inset-x-2 top-12 bottom-2 space-y-1">
            <div className="h-1 bg-gradient-to-r from-transparent via-tech-blue to-transparent rounded-full"></div>
            <div className="h-1 bg-gradient-to-r from-transparent via-tech-cyan to-transparent rounded-full"></div>
            <div className="h-1 bg-gradient-to-r from-transparent via-tech-blue to-transparent rounded-full"></div>
          </div>
          
          {/* Chest Light */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-tech-cyan rounded-full animate-glow-pulse"></div>
        </div>
        
        {/* Arms */}
        <div className="absolute top-4 -left-3 w-2 h-8 tech-glass rounded-full"></div>
        <div className="absolute top-4 -right-3 w-2 h-8 tech-glass rounded-full"></div>
        
        {/* Legs */}
        <div className={`absolute bottom-0 left-2 w-2 h-6 tech-glass rounded-full transition-all duration-300 ${isWalking ? 'transform rotate-12' : ''}`}></div>
        <div className={`absolute bottom-0 right-2 w-2 h-6 tech-glass rounded-full transition-all duration-300 ${isWalking ? 'transform -rotate-12' : ''}`}></div>
        
        {/* Holographic Aura */}
        <div className="absolute inset-0 rounded-2xl border border-tech-blue opacity-30 animate-glow-pulse"></div>
        <div className="absolute inset-0 rounded-2xl border border-tech-cyan opacity-20 animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Speech Bubble */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 tech-glass rounded-lg px-3 py-1 text-xs text-tech-blue whitespace-nowrap">
        Following cursor...
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 tech-glass border-r border-b border-tech-blue"></div>
      </div>
    </div>
  );
};

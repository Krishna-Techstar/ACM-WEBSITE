
interface HologramLogoProps {
  mousePosition: { x: number; y: number };
}

export const HologramLogo = ({ mousePosition }: HologramLogoProps) => {
  return (
    <div 
      className="fixed pointer-events-none z-30 transition-all duration-300 ease-out"
      style={{
        left: mousePosition.x - 50,
        top: mousePosition.y - 50,
      }}
    >
      {/* ACM Logo */}
      <div className="relative w-24 h-24 animate-holo-float">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-2 border-tech-blue rounded-full opacity-60 animate-spin"></div>
        <div className="absolute inset-2 border border-tech-cyan rounded-full opacity-40 animate-spin" style={{ animationDirection: 'reverse' }}></div>
        
        {/* Center Logo */}
        <div className="absolute inset-6 tech-glass rounded-full flex items-center justify-center">
          <span className="text-tech-blue font-bold text-sm">ACM</span>
        </div>
        
        {/* Orbiting Particles */}
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-tech-blue rounded-full animate-spin origin-bottom" style={{ transformOrigin: '0 48px' }}>
          <div className="w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-tech-cyan rounded-full animate-spin origin-left" style={{ transformOrigin: '-48px 0', animationDelay: '0.5s' }}>
          <div className="w-1.5 h-1.5 bg-tech-cyan rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-tech-blue rounded-full animate-spin origin-top" style={{ transformOrigin: '0 -48px', animationDelay: '1s' }}>
          <div className="w-1 h-1 bg-tech-blue rounded-full animate-pulse"></div>
        </div>
        
        {/* Holographic Effect Lines */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-tech-blue to-transparent animate-scan-line"></div>
        </div>
      </div>
    </div>
  );
};

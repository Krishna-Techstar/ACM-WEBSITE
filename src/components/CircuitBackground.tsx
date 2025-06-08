
export const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base circuit pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      
      {/* Animated circuit flows */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-blue to-transparent animate-circuit-flow"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-cyan to-transparent animate-circuit-flow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-blue to-transparent animate-circuit-flow" style={{ animationDelay: '2s' }}></div>
      
      {/* Vertical flows */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-tech-blue to-transparent animate-circuit-flow" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-tech-cyan to-transparent animate-circuit-flow" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-tech-blue to-transparent animate-circuit-flow" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Circuit nodes */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-tech-cyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-tech-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Corner circuit elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border border-tech-blue opacity-30">
        <div className="absolute top-2 left-2 w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-tech-cyan rounded-full animate-pulse"></div>
      </div>
      
      <div className="absolute top-8 right-8 w-16 h-16 border border-tech-cyan opacity-30">
        <div className="absolute top-2 right-2 w-2 h-2 bg-tech-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-tech-blue rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

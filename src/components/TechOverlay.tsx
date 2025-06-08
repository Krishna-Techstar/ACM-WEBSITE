
export const TechOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Scanning lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-blue to-transparent animate-scan-line"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-cyan to-transparent animate-scan-line" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px'
      }}></div>
      
      {/* Floating tech elements */}
      <div className="absolute top-1/3 left-1/6 tech-glass w-4 h-4 rounded-full animate-holo-float"></div>
      <div className="absolute top-2/3 right-1/6 tech-glass w-6 h-6 rounded-full animate-holo-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/12 tech-glass w-3 h-3 rounded-full animate-holo-float" style={{ animationDelay: '2s' }}></div>
      
      {/* HUD-style corner elements */}
      <div className="absolute top-16 left-16 hidden md:block">
        <div className="tech-glass rounded-lg p-3 space-y-1">
          <div className="w-16 h-1 bg-tech-blue rounded-full"></div>
          <div className="w-12 h-1 bg-tech-cyan rounded-full"></div>
          <div className="w-20 h-1 bg-tech-blue rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute top-16 right-16 hidden md:block">
        <div className="tech-glass rounded-lg p-3 text-xs text-tech-blue">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

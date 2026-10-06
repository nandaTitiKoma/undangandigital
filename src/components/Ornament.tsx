export const FlowerCorner = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={`w-32 h-32 text-gold drop-shadow-[0_0_8px_rgba(226,176,74,0.3)] opacity-60 ${className}`}>
    <path fill="currentColor" opacity="0.08" d="M0 0 L200 0 C150 0 100 50 100 100 C100 150 50 200 0 200 Z" />
    <path fill="currentColor" opacity="0.12" d="M0 0 L150 0 C100 0 75 50 75 100 C75 150 25 200 0 200 Z" />
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" d="M0 40 C40 40 80 80 80 140 C80 170 50 200 0 200" opacity="0.4" />
    <path fill="none" stroke="currentColor" strokeWidth="1" d="M0 20 C60 20 120 60 120 140 C120 160 100 200 0 200" opacity="0.6" />
    
    <g transform="translate(35, 35)">
      <circle cx="0" cy="0" r="4" fill="currentColor" />
      <path fill="currentColor" d="M0 -20 C 4 -10 4 -4 0 0 C -4 -4 -4 -10 0 -20 Z" />
      <path fill="currentColor" d="M0 20 C 4 10 4 4 0 0 C -4 4 -4 10 0 20 Z" />
      <path fill="currentColor" d="M-20 0 C -10 4 -4 4 0 0 C -4 -4 -10 -4 -20 0 Z" />
      <path fill="currentColor" d="M20 0 C 10 4 4 4 0 0 C 4 -4 10 -4 20 0 Z" />
    </g>
    <g transform="translate(90, 50) scale(0.6)">
      <circle cx="0" cy="0" r="4" fill="currentColor" />
      <path fill="currentColor" d="M0 -20 C 4 -10 4 -4 0 0 C -4 -4 -4 -10 0 -20 Z" />
      <path fill="currentColor" d="M0 20 C 4 10 4 4 0 0 C -4 4 -4 10 0 20 Z" />
      <path fill="currentColor" d="M-20 0 C -10 4 -4 4 0 0 C -4 -4 -10 -4 -20 0 Z" />
      <path fill="currentColor" d="M20 0 C 10 4 4 4 0 0 C 4 -4 10 -4 20 0 Z" />
    </g>
    <g transform="translate(50, 90) scale(0.5)">
      <circle cx="0" cy="0" r="4" fill="currentColor" />
      <path fill="currentColor" d="M0 -20 C 4 -10 4 -4 0 0 C -4 -4 -4 -10 0 -20 Z" />
      <path fill="currentColor" d="M0 20 C 4 10 4 4 0 0 C -4 4 -4 10 0 20 Z" />
      <path fill="currentColor" d="M-20 0 C -10 4 -4 4 0 0 C -4 -4 -10 -4 -20 0 Z" />
      <path fill="currentColor" d="M20 0 C 10 4 4 4 0 0 C 4 -4 10 -4 20 0 Z" />
    </g>
  </svg>
);

export const GoldDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center w-full my-8 opacity-90 ${className}`}>
    <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
    <div className="mx-4 text-gold flex items-center gap-2">
      <span className="text-xs opacity-80 animate-pulse">✦</span>
      <span className="text-2xl drop-shadow-[0_0_5px_rgba(226,176,74,0.5)]">❖</span>
      <span className="text-xs opacity-80 animate-pulse">✦</span>
    </div>
    <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
  </div>
);

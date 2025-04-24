
const NetworkMountains = () => {
  return (
    <div className="relative w-full h-[200px] overflow-hidden bg-[#0b0e11]">
      <svg 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full"
        style={{ filter: 'brightness(0.7)' }}
      >
        {/* Background mountain silhouettes */}
        <path 
          d="M0 320L48 304C96 288 192 256 288 234.7C384 213 480 203 576 186.7C672 171 768 149 864 160C960 171 1056 213 1152 224C1248 235 1344 213 1392 202.7L1440 192V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0Z"
          fill="#1a1a1a"
        />
        <path 
          d="M0 320L48 298.7C96 277 192 235 288 213.3C384 192 480 192 576 202.7C672 213 768 235 864 245.3C960 256 1056 256 1152 240C1248 224 1344 192 1392 176L1440 160V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0Z"
          fill="#151515"
        />
      </svg>

      {/* Network nodes and lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 800 200" className="w-full max-w-4xl">
          {/* Connecting lines */}
          <line x1="200" y1="80" x2="300" y2="120" stroke="#444" strokeWidth="1" />
          <line x1="300" y1="120" x2="400" y2="60" stroke="#444" strokeWidth="1" />
          <line x1="400" y1="60" x2="500" y2="100" stroke="#444" strokeWidth="1" />
          <line x1="500" y1="100" x2="600" y2="70" stroke="#444" strokeWidth="1" />

          {/* Network nodes */}
          <circle cx="200" cy="80" r="4" fill="#F7931A" />
          <circle cx="300" cy="120" r="3" fill="#888" />
          <circle cx="400" cy="60" r="4" fill="#F7931A" />
          <circle cx="500" cy="100" r="3" fill="#888" />
          <circle cx="600" cy="70" r="4" fill="#F7931A" />
        </svg>
      </div>
    </div>
  );
};

export default NetworkMountains;

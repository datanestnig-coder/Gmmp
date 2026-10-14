import React from 'react';

interface GmmpLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'responsive';
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export const GmmpLogo: React.FC<GmmpLogoProps> = ({
  className = '',
  size = 'responsive',
  showText = true,
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {/* Official GMMP circular icon mark */}
      <div className="shrink-0">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`drop-shadow-xs select-none ${
            size === 'sm'
              ? 'w-8 h-8'
              : size === 'md'
              ? 'w-10 h-10'
              : size === 'lg'
              ? 'w-12 h-12 sm:w-14 sm:h-14'
              : size === 'xl'
              ? 'w-16 h-16 sm:w-20 sm:h-20'
              : 'w-8 h-8 sm:w-11 sm:h-11' // responsive default
          }`}
          aria-label="GMMP Logo Emblem"
        >
          {/* Background circle hint */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill={isDark ? '#1F2937' : '#FFFFFF'}
            stroke={isDark ? '#374151' : '#F3F4F6'}
            strokeWidth="1.5"
          />

          {/* The Black 'G' curve */}
          <path
            d="M 62 20 
               C 45 13 25 24 19 42 
               C 13 60 23 80 43 85 
               C 63 90 82 77 84 57
               L 52 57
               L 52 46
               L 94 46
               C 94 76 68 97 38 92
               C 12 87 -4 60 2 34
               C 8 13 32 -3 58 2
               C 65 3 71 6 76 10
               Z"
            fill={isDark ? '#F9FAFB' : '#111827'}
          />

          {/* The Vibrant Red Heart forming the upper interior curve */}
          <path
            d="M 64 21 
               C 60 17 53 19 50 24 
               C 47 19 40 17 36 21 
               C 30 26 31 34 36 40 
               L 50 53 
               L 64 40 
               C 69 34 70 26 64 21 Z"
            fill="#E11D48"
            transform="scale(1.2) translate(-9, -4)"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col select-none leading-tight">
          <div className="flex items-baseline gap-1">
            <span
              className={`font-serif-brand font-bold tracking-wider text-rose-600 ${
                size === 'sm'
                  ? 'text-xs'
                  : size === 'lg'
                  ? 'text-lg sm:text-xl'
                  : size === 'xl'
                  ? 'text-xl sm:text-2xl'
                  : 'text-xs sm:text-base'
              }`}
            >
              GET MARRIED
            </span>
          </div>
          <span
            className={`font-sans uppercase tracking-[0.2em] font-semibold text-[8px] sm:text-[10px] -mt-0.5 ${
              isDark ? 'text-stone-300' : 'text-stone-800'
            }`}
          >
            Matchmaking Platform
          </span>
          <span
            className={`font-script-brand font-bold -mt-1 tracking-wide text-xs sm:text-sm ${
              isDark ? 'text-stone-400' : 'text-stone-600'
            }`}
          >
            GMMP
          </span>
        </div>
      )}
    </div>
  );
};

"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="relative w-8 h-16 rounded-md border border-dashed border-theme-border overflow-hidden bg-transparent"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Theme Toggle Bar with vertical line */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Vertical line */}
        <div 
          className={`absolute h-full w-[3px] ${
            theme === 'dark' 
              ? 'bg-theme-line-dark' 
              : 'bg-theme-line-light'
          } transition-colors duration-300`}
        />
        
        {/* Moon Icon - Shows in dark mode at top */}
        <div 
          className={`absolute top-2 w-4 h-4 flex items-center justify-center transition-all duration-300`}
        >
          <div 
            className={`w-4 h-4 rounded-full ${
              theme === 'dark' 
                ? 'border-[2px] border-theme-moon-dark' 
                : 'border-[2px] border-theme-moon-light'
            } transition-colors duration-300`}
          />
        </div>
        
        {/* Sun/Small dot - Shows at bottom */}
        <div 
          className={`absolute bottom-2 w-3 h-3 flex items-center justify-center transition-all duration-300`}
        >
          <div 
            className={`w-3 h-3 rounded-full ${
              theme === 'dark' 
                ? 'border-[2px] border-theme-sun-dark' 
                : 'border-[2px] border-theme-sun-light'
            } transition-colors duration-300`}
          />
        </div>
      </div>
    </button>
  );
}
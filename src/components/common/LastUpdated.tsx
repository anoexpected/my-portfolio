'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { cn } from '@/utils/classNames';

export default function LastUpdated() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Set mounted to true and initialize time only on client side
    setMounted(true);
    setCurrentTime(new Date());

    // Update time every second for live clock
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Manual last update date - update this when you make changes to the portfolio
  const lastUpdatedDate = '10/12/2025';

  // Format time string
  const timeString = currentTime
    ? currentTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }) + ' IST'
    : '';

  return (
    <div className={cn(
      "py-8 px-4 sm:px-6 border-t",
      theme === 'dark' 
        ? "border-gray-800 bg-gray-900/50" 
        : "border-gray-200 bg-gray-50"
    )}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        {/* Left: Last Updated */}
        <div className={cn(
          "flex items-center gap-2",
          theme === 'dark' ? "text-gray-400" : "text-gray-600"
        )}>
          <div className={cn(
            "w-2 h-2 rounded-full",
            theme === 'dark' ? "bg-green-500" : "bg-green-600",
            "animate-pulse"
          )} />
          <span>Updated {lastUpdatedDate}</span>
        </div>

        {/* Right: Live Timestamp - Only render after mount to avoid hydration mismatch */}
        {mounted && (
          <div className={cn(
            "font-mono text-xs",
            theme === 'dark' ? "text-gray-500" : "text-gray-400"
          )}>
            {timeString}
          </div>
        )}
      </div>
    </div>
  );
}


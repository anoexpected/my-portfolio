'use client';

import { useState } from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { cn } from '@/utils/classNames';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  caption?: string;
}

export default function YouTubeEmbed({
  videoId,
  title,
  caption
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  if (!videoId) return null;

  return (
    <div className="w-full space-y-4">
      {/* Video Container */}
      <div className="relative w-full rounded-lg overflow-hidden bg-black aspect-video shadow-lg">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Caption */}
      {caption && (
        <p className={cn(
          "text-center text-sm",
          theme === 'dark' ? 'text-text-secondary-dark' : 'text-text-secondary-light'
        )}>
          {caption}
        </p>
      )}
    </div>
  );
}


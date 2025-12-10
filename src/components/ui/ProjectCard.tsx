'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/portfolio';
import { useTheme } from '@/providers/ThemeProvider';
import { cn } from '@/utils/classNames';

interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
  inView?: boolean;
}

export default function ProjectCard({ project, animationDelay = 0, inView = true }: ProjectCardProps) {
  const { theme } = useTheme();
  
  // Get short description (max 1 line, ~50 chars)
  const getShortDescription = () => {
    if (project.shortDescription) {
      return project.shortDescription;
    }
    return project.description.substring(0, 50) + (project.description.length > 50 ? '...' : '');
  };

  return (
    <Link href={`/projects/${project.id}`} className="block h-full">
      <div
        className={cn(
          "flex flex-col h-full rounded-lg overflow-hidden",
          "transition-all duration-300 cursor-pointer group",
          "hover:-translate-y-1",
          inView ? "animate-fade-in-up" : "opacity-0",
          theme === 'dark'
            ? "bg-dark-secondary border border-cyan-primary/20 hover:border-cyan-primary/30 hover:shadow-[0_20px_40px_rgba(34,211,238,0.2),0_0_20px_rgba(34,211,238,0.1)]"
            : "bg-white border border-gray-200 hover:border-cyan-dark/30 hover:shadow-lg"
        )}
        style={{ 
          animationDelay: `${animationDelay}ms`
        }}
      >
        {/* IMAGE SECTION - Fixed height */}
        <div className={cn(
          "relative w-full h-48 overflow-hidden",
          theme === 'dark' ? "bg-gray-700" : "bg-gray-200"
        )}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className={cn(
              "w-full h-full bg-gradient-to-br",
              theme === 'dark' 
                ? "from-gray-600 to-gray-700" 
                : "from-gray-300 to-gray-400"
            )} />
          )}
        </div>

        {/* TEXT SECTION - Flexible height */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          {/* Title & Description */}
          <div className="mb-4">
            {/* Project Title */}
            <h3 className={cn(
              "text-xl font-bold mb-2 line-clamp-2",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              {project.title}
            </h3>
            {/* Short Description - MAX 1 line */}
            <p className={cn(
              "text-sm line-clamp-1",
              theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
            )}>
              {getShortDescription()}
            </p>
          </div>

          {/* View Details Button */}
          <button className="w-full bg-cyan-400 text-dark-navy font-semibold py-2.5 rounded-lg hover:bg-cyan-300 transition-colors duration-300">
            View Details →
          </button>
        </div>
      </div>
    </Link>
  );
}

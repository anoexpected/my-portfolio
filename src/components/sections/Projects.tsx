"use client"

import { FC } from "react"
import { portfolioContent } from "@/config/content"
import { useInView } from "@/hooks/useScrollAnimation"
import { useTheme } from "@/providers/ThemeProvider"
import { cn } from "@/utils/classNames"
import ProjectCard from "@/components/ui/ProjectCard"

const Projects: FC = () => {
  const { theme } = useTheme()
  const [projectsInViewRef, projectsInView] = useInView(0.2)
  const allProjects = portfolioContent.projects

  return (
    <section
      id="projects"
      className={cn(
        "py-16 md:py-20 transition-colors duration-300",
        theme === 'dark' ? "bg-dark-navy" : "bg-light-bg"
      )}
      aria-label="Projects section"
    >
      <div ref={projectsInViewRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-16 ${projectsInView ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold mb-4",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}
          >
            Projects
          </h2>
          <p
            className={cn(
              "text-lg md:text-xl max-w-3xl mx-auto",
              theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
            )}
          >
            A collection of my recent work showcasing my skills in web development, AI, and
            software engineering.
          </p>
        </div>

        {/* Projects Grid - All Projects Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              animationDelay={index * 100}
              inView={projectsInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


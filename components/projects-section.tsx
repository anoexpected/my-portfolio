"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { useInView } from "@/hooks/animations"
import { projectsData } from "@/data/projects"

const ProjectsSection = () => {
  const [projectsInViewRef, projectsInView] = useInView(0.2)
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Python", "Next.js"]

  const filteredProjects =
    activeFilter === "All" ? projectsData : projectsData.filter((project) => project.tech.includes(activeFilter))

  return (
    <section id="projects" className="py-16 md:py-20 bg-[#FFF8DC]">
      <div ref={projectsInViewRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 ${projectsInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1F2937]">Projects</h2>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto">
            A collection of my recent work showcasing my skills in web development, AI, and software engineering.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-lg transition-all duration-200 ${filter === activeFilter
                ? "bg-[#FFA500] text-white shadow-md"
                : "bg-white text-[#FFA500] border border-[#FFA500] hover:bg-orange-100"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${projectsInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#1F2937]">{project.title}</h3>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-[#6B7280] text-xs font-mono rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#FFA500] text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md text-sm md:text-base"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

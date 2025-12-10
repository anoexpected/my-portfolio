"use client"

import { FC, useState } from "react"
import { Code2, Brain, Cloud, Layers, Database } from "lucide-react"
import { portfolioContent } from "@/config/content"
import { useInView } from "@/hooks/useScrollAnimation"
import { useTheme } from "@/providers/ThemeProvider"
import { cn } from "@/utils/classNames"
import Badge from "@/components/ui/Badge"
import Card from "@/components/ui/Card"

const Skills: FC = () => {
  const { theme } = useTheme()
  const [skillsInViewRef, skillsInView] = useInView(0.2)
  const [activeView, setActiveView] = useState<"badge" | "detailed">("badge")

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    code: Code2,
    layers: Layers,
    cloud: Cloud,
    brain: Brain,
    database: Database,
  }

  const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    "Programming Languages": Code2,
    "Frameworks & Libraries": Layers,
    "AI/ML Technologies": Brain,
    "Cloud & Tools": Cloud,
  }

  return (
    <section
      id="skills"
      className={cn(
        "py-16 md:py-20 transition-colors duration-300",
        theme === 'dark' ? "bg-dark-secondary" : "bg-light-bg"
      )}
      aria-label="Skills section"
    >
      <div ref={skillsInViewRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-16 ${
            skillsInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
          )}>
            Skills & Expertise
          </h2>
          <p className={cn(
            "text-lg md:text-xl",
            theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
          )}>
            My technical proficiencies and tools for building solutions
          </p>
        </div>

        {/* View Toggle */}
        <div
          className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12"
          role="tablist"
          aria-label="Skills view toggle"
        >
          <button
            onClick={() => setActiveView("badge")}
            className={cn(
              "px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
              activeView === "badge"
                ? theme === 'dark'
                  ? "bg-cyan-primary text-dark-navy"
                  : "bg-cyan-dark text-white"
                : theme === 'dark'
                  ? "bg-dark-tertiary text-cyan-primary border border-cyan-primary/30 hover:bg-dark-secondary"
                  : "bg-light-card text-cyan-dark border border-cyan-dark/30 hover:bg-light-bg"
            )}
            role="tab"
            aria-selected={activeView === "badge"}
            aria-controls="skills-badge-view"
          >
            Badge View
          </button>
          <button
            onClick={() => setActiveView("detailed")}
            className={cn(
              "px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
              activeView === "detailed"
                ? theme === 'dark'
                  ? "bg-cyan-primary text-dark-navy"
                  : "bg-cyan-dark text-white"
                : theme === 'dark'
                  ? "bg-dark-tertiary text-cyan-primary border border-cyan-primary/30 hover:bg-dark-secondary"
                  : "bg-light-card text-cyan-dark border border-cyan-dark/30 hover:bg-light-bg"
            )}
            role="tab"
            aria-selected={activeView === "detailed"}
            aria-controls="skills-detailed-view"
          >
            Detailed View
          </button>
        </div>

        {activeView === "badge" && (
          <div
            id="skills-badge-view"
            role="tabpanel"
            aria-labelledby="tab-badge"
            className={`flex flex-wrap justify-center gap-3 md:gap-4 ${
              skillsInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {portfolioContent.skillBadges.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2
              return (
                <span
                  key={index}
                  className={cn(
                    "inline-flex items-center px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-lg shadow-md hover:scale-105 transition-transform duration-200",
                    theme === 'dark'
                      ? "bg-dark-secondary text-text-primary-dark"
                      : "bg-light-card text-text-primary-light"
                  )}
                >
                  <IconComponent className="w-5 h-5 mr-2" aria-hidden="true" />
                  {skill.name}
                </span>
              )
            })}
          </div>
        )}

        {activeView === "detailed" && (
          <div
            id="skills-detailed-view"
            role="tabpanel"
            aria-labelledby="tab-detailed"
            className={`grid sm:grid-cols-2 gap-6 md:gap-8 ${
              skillsInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {portfolioContent.skills.map((skillCategory, index) => {
              const IconComponent =
                categoryIcons[skillCategory.category] || Layers
              return (
                <Card
                  key={index}
                  variant="elevated"
                  className="p-4 md:p-6"
                >
                  <h3
                    className={cn(
                      "text-lg md:text-xl font-semibold mb-4 flex items-center",
                      theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                    )}
                  >
                    <IconComponent className="w-5 h-5 mr-2" aria-hidden="true" />
                    {skillCategory.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={cn(
                          theme === 'dark'
                            ? "bg-dark-tertiary text-text-primary-dark hover:bg-dark-secondary"
                            : "bg-light-bg text-text-primary-light hover:bg-light-card"
                        )}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills


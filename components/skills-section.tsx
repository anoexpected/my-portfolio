"use client"

import { useState } from "react"
import { Code2, Brain, Cloud, Layers } from "lucide-react"
import { useInView } from "@/hooks/animations"
import { skillsData } from "@/data/skills"

const SkillsSection = () => {
  const [skillsInViewRef, skillsInView] = useInView(0.2)
  const [activeView, setActiveView] = useState<"badge" | "detailed">("badge")

  return (
    <section id="skills" className="py-16 md:py-20 bg-[#191970] text-white">
      <div ref={skillsInViewRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 ${skillsInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <p className="text-lg md:text-xl text-gray-300">
            My technical proficiencies and tools for building solutions
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          <button
            onClick={() => setActiveView("badge")}
            className={`px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-lg transition-colors duration-200 ${
              activeView === "badge"
                ? "bg-[#FFA500] text-white"
                : "bg-white text-[#FFA500] border border-[#FFA500] hover:bg-orange-100"
            }`}
          >
            Badge View
          </button>
          <button
            onClick={() => setActiveView("detailed")}
            className={`px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-lg transition-colors duration-200 ${
              activeView === "detailed"
                ? "bg-[#FFA500] text-white"
                : "bg-white text-[#FFA500] border border-[#FFA500] hover:bg-orange-100"
            }`}
          >
            Detailed View
          </button>
        </div>

        {activeView === "badge" && (
          <div
            className={`flex flex-wrap justify-center gap-3 md:gap-4 ${skillsInView ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {skillsData.badges.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white text-[#191970] rounded-full font-semibold text-sm md:text-lg shadow-md hover:scale-105 transition-transform duration-200"
              >
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        )}

        {activeView === "detailed" && (
          <div className={`grid sm:grid-cols-2 gap-6 md:gap-8 ${skillsInView ? "animate-fade-in-up" : "opacity-0"}`}>
            {Object.entries(skillsData.detailed).map(([category, skills], index) => (
              <div
                key={index}
                className="bg-[#2A2A80] rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#FFA500] flex items-center">
                  {category === "Programming Languages" && <Code2 className="w-5 h-5 mr-2" />}
                  {category === "Frameworks & Libraries" && <Layers className="w-5 h-5 mr-2" />}
                  {category === "AI/ML Technologies" && <Brain className="w-5 h-5 mr-2" />}
                  {category === "Cloud & Tools" && <Cloud className="w-5 h-5 mr-2" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700 text-white rounded-full text-xs md:text-sm font-mono hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SkillsSection

"use client"

import { FC, useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { portfolioContent } from "@/config/content"
import { useInView } from "@/hooks/useScrollAnimation"
import { useTheme } from "@/providers/ThemeProvider"
import { cn } from "@/utils/classNames"
import ExperienceCard from "@/components/ui/ExperienceCard"
import ExperienceTimeline from "@/components/ui/ExperienceTimeline"
import Card from "@/components/ui/Card"
import { Education, Certification } from "@/types/portfolio"

type TabType = "experience" | "education" | "certifications"

const Experience: FC = () => {
  const { theme } = useTheme()
  const [experienceInViewRef, experienceInView] = useInView(0.3)
  const [activeTab, setActiveTab] = useState<TabType>("experience")

  const tabs: { id: TabType; label: string }[] = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
  ]

  const formatDate = (date: string) => {
    if (date === "present" || !date) return "Present"
    const [year, month] = date.split("-")
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    return `${monthNames[parseInt(month) - 1]} ${year}`
  }

  return (
    <section
      id="experience"
      className={cn(
        "py-16 md:py-20 transition-colors duration-300",
        theme === 'dark' ? "bg-dark-navy" : "bg-light-bg"
      )}
      aria-label="Experience and education section"
    >
      <div ref={experienceInViewRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-16 ${
            experienceInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}
          >
            Experience & Education
          </h2>
          <p className={cn(
            "text-lg md:text-xl",
            theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
          )}>
            My professional journey, academic background, and certifications
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12"
          role="tablist"
          aria-label="Experience tabs"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
                activeTab === tab.id
                  ? theme === 'dark'
                    ? "bg-cyan-primary text-dark-navy"
                    : "bg-cyan-dark text-white"
                  : theme === 'dark'
                    ? "bg-dark-secondary text-cyan-primary border border-cyan-primary/30 hover:bg-dark-tertiary"
                    : "bg-light-card text-cyan-dark border border-cyan-dark/30 hover:bg-light-bg"
              )}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <Card variant="elevated" className="p-6 md:p-8">
          {activeTab === "experience" && (
            <div
              id="tabpanel-experience"
              role="tabpanel"
              aria-labelledby="tab-experience"
              className={experienceInView ? "animate-fade-in-up" : "opacity-0"}
            >
              <ExperienceTimeline items={portfolioContent.experience} />
            </div>
          )}

          {activeTab === "education" && (
            <div
              id="tabpanel-education"
              role="tabpanel"
              aria-labelledby="tab-education"
              className={`space-y-6 ${
                experienceInView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              {portfolioContent.education.map((edu) => (
                <div
                  key={edu.id}
                  className="flex flex-col lg:flex-row lg:items-start gap-4"
                >
                  <div
                    className={cn(
                      "flex-shrink-0 text-base md:text-lg font-semibold lg:w-1/4",
                      theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                    )}
                  >
                    {edu.endDate ? formatDate(edu.endDate) : "Ongoing"}
                    {edu.startDate && ` - ${formatDate(edu.startDate)}`}
                  </div>
                  <div className="flex-grow">
                    <h3
                      className={cn(
                        "text-lg md:text-xl font-semibold",
                        theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                      )}
                    >
                      {edu.institution}
                    </h3>
                    <p
                      className={cn(
                        "text-base md:text-lg mb-2",
                        theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                      )}
                    >
                      {edu.degree}
                      {edu.cgpa && ` (CGPA of ${edu.cgpa})`}
                    </p>
                    <p className={cn(
                      "text-sm md:text-base",
                      theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                    )}>
                      {edu.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "certifications" && (
            <div
              id="tabpanel-certifications"
              role="tabpanel"
              aria-labelledby="tab-certifications"
              className={`space-y-6 ${
                experienceInView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              {portfolioContent.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col lg:flex-row lg:items-start gap-4"
                >
                  <div
                    className={cn(
                      "flex-shrink-0 text-base md:text-lg font-semibold lg:w-1/4",
                      theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                    )}
                  >
                    Issued: {cert.issueDate}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 md:gap-4 mb-2">
                      {cert.logo && (
                        <Image
                          src={cert.logo}
                          alt={`${cert.name} badge`}
                          width={80}
                          height={80}
                          className="rounded-md object-contain w-16 h-16 md:w-20 md:h-20 flex-shrink-0"
                        />
                      )}
                      <h3
                        className={cn(
                          "text-lg md:text-xl font-semibold",
                          theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                        )}
                      >
                        {cert.name}
                      </h3>
                    </div>
                    <p
                      className={cn(
                        "text-base md:text-lg mb-2",
                        theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                      )}
                    >
                      {cert.issuer}
                    </p>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "hover:underline flex items-center text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 rounded",
                        theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                      )}
                      aria-label={`Verify ${cert.name} credential (opens in new tab)`}
                    >
                      Verify Credential <ExternalLink className="w-4 h-4 ml-1" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}

export default Experience


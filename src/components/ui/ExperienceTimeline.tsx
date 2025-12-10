"use client"

import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { Experience } from "@/types/portfolio"
import { useTheme } from "@/providers/ThemeProvider"
import { cn } from "@/utils/classNames"
import Card from "./Card"

interface ExperienceTimelineProps {
  items: Experience[]
}

const ExperienceTimeline: FC<ExperienceTimelineProps> = ({ items }) => {
  const { theme } = useTheme()
  
  const formatDate = (date: string) => {
    if (date === "present") return "Present"
    const [year, month] = date.split("-")
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    return `${monthNames[parseInt(month) - 1]} ${year}`
  }

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className={cn(
        "absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b to-transparent hidden md:block",
        theme === 'dark' ? "from-cyan-primary/50" : "from-cyan-dark/50"
      )}></div>

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item) => (
          <div key={item.id} className="pl-0 md:pl-24 relative">
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-16 h-16 flex items-center justify-center hidden md:flex">
              <div
                className={cn(
                  "w-8 h-8 rounded-full border-4 shadow-lg transition-all duration-300 hover:scale-110",
                  theme === 'dark'
                    ? "bg-cyan-primary border-dark-navy"
                    : "bg-cyan-dark border-light-bg"
                )}
                style={{
                  boxShadow: theme === 'dark'
                    ? "0 0 20px rgba(34, 211, 238, 0.5)"
                    : "0 0 20px rgba(14, 116, 144, 0.5)",
                }}
              ></div>
            </div>

            {/* Content card */}
            <Card
              variant="elevated"
              className={cn(
                "transition-all duration-300",
                theme === 'dark'
                  ? "border border-cyan-primary/20 hover:border-cyan-primary/30"
                  : "border border-cyan-dark/20 hover:border-cyan-dark/30"
              )}
            >
              <div className="p-6">
                <div
                  className={cn(
                    "font-semibold text-sm md:text-base mb-2",
                    theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                  )}
                >
                  {formatDate(item.startDate)} - {formatDate(item.endDate)}
                </div>
                <div className="flex items-center gap-3 md:gap-4 mt-2 mb-1 flex-wrap sm:flex-nowrap">
                  {item.logo && (
                    item.website ? (
                      <Link
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${item.company} website`}
                        className="flex-shrink-0 transition-transform duration-300 hover:scale-110 cursor-pointer"
                      >
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          width={50}
                          height={50}
                          className="rounded-md object-contain w-[50px] h-auto"
                        />
                      </Link>
                    ) : (
                      <div className="flex-shrink-0">
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          width={50}
                          height={50}
                          className="rounded-md object-contain w-[50px] h-auto"
                        />
                      </div>
                    )
                  )}
                  <h3
                    className={cn(
                      "text-xl md:text-2xl font-bold",
                      theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                    )}
                  >
                    {item.company}
                  </h3>
                </div>
                <p
                  className={cn(
                    "text-base md:text-lg mb-3",
                    theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                  )}
                >
                  {item.position} | {item.location}
                </p>
                <div
                  className={cn(
                    "text-base md:text-lg mb-4 leading-[1.7] space-y-3",
                    theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                  )}
                >
                  {item.description.split('\n\n').map((line, index) => (
                    <p key={index} className="leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={cn(
                        "px-3 py-1 rounded-full text-sm",
                        theme === 'dark'
                          ? "bg-cyan-primary/20 text-cyan-primary"
                          : "bg-cyan-dark/20 text-cyan-dark"
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceTimeline


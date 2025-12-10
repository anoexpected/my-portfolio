"use client"

import { FC } from "react"
import { Experience } from "@/types/portfolio"
import { colors } from "@/config/colors"
import Badge from "./Badge"

interface ExperienceCardProps {
  experience: Experience
  animationDelay?: number
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  experience,
  animationDelay = 0,
}) => {
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
    <div
      className="flex flex-col lg:flex-row lg:items-start gap-4"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div
        className="flex-shrink-0 text-base md:text-lg font-semibold lg:w-1/4"
        style={{ color: colors.accent.primary }}
      >
        {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
      </div>
      <div className="flex-grow">
        <h3
          className="text-lg md:text-xl font-semibold"
          style={{ color: colors.text.primary }}
        >
          {experience.company}
        </h3>
        <p
          className="text-base md:text-lg mb-2"
          style={{ color: colors.text.muted }}
        >
          {experience.position} | {experience.location}
        </p>
        <p
          className="space-y-1 text-sm md:text-base mb-3"
          style={{ color: colors.text.muted }}
        >
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, index) => (
            <Badge key={index} variant="primary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard


"use client"

import { FC } from "react"
import Image from "next/image"
import { portfolioContent } from "@/config/content"
import { useInView } from "@/hooks/useScrollAnimation"
import { useTheme } from "@/providers/ThemeProvider"
import { cn } from "@/utils/classNames"

const About: FC = () => {
  const { theme } = useTheme()
  const [aboutInViewRef] = useInView(0.3)

  return (
    <section
      id="about"
      className={cn(
        "py-16 md:py-20 transition-colors duration-300",
        theme === 'dark' ? "bg-dark-navy" : "bg-light-bg"
      )}
      aria-label="About section"
    >
      <div ref={aboutInViewRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}
          >
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Professional Photo */}
          <div className="relative flex justify-center lg:justify-start">
            <div
              className={cn(
                "relative max-w-[280px] sm:max-w-xs lg:max-w-sm mx-auto lg:mx-0 rounded-xl overflow-hidden border-4 transition-all duration-300 hover:scale-[1.02]",
                theme === 'dark'
                  ? "border-cyan-primary shadow-[0_0_20px_rgba(34,211,238,0.3),inset_0_0_20px_rgba(34,211,238,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5),inset_0_0_20px_rgba(34,211,238,0.15)]"
                  : "border-cyan-dark shadow-[0_0_20px_rgba(14,116,144,0.3),inset_0_0_20px_rgba(14,116,144,0.1)] hover:shadow-[0_0_30px_rgba(14,116,144,0.5),inset_0_0_20px_rgba(14,116,144,0.15)]"
              )}
            >
              <Image
                src={portfolioContent.personal.profileImage}
                alt={`${portfolioContent.personal.name} - Professional Headshot`}
                width={400}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Krish Garg-style headline */}
            <h3
              className={cn(
                "text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.5] mb-8",
                theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
              )}
            >
              I am a{" "}
              <span 
                className={cn(
                  "italic underline font-semibold",
                  theme === 'dark'
                    ? "decoration-cyan-primary decoration-2 underline-offset-4"
                    : "decoration-cyan-dark decoration-2 underline-offset-4"
                )}
              >
                Software Engineer
              </span>
              <br />
              with experience building software across{" "}
              <span 
                className={cn(
                  "italic underline font-semibold",
                  theme === 'dark'
                    ? "decoration-cyan-primary decoration-2 underline-offset-4"
                    : "decoration-cyan-dark decoration-2 underline-offset-4"
                )}
              >
                AI systems, cloud infrastructure, and web platforms
              </span>
            </h3>
            
            {/* Body text */}
            <p
              className={cn(
                "text-lg md:text-xl leading-[1.8] max-w-[65ch]",
                theme === 'dark' ? "text-[#94a3b8]" : "text-[#475569]"
              )}
            >
              I&apos;ve worked on projects ranging from AI-powered applications to scalable web platforms, focusing on creating elegant solutions to complex problems. Final-year student at Aditya College of Engineering and Technology, graduating August 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


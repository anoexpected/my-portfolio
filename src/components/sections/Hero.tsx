"use client"

import { FC } from "react"
import { Github, Linkedin, GraduationCap } from "lucide-react"
import { portfolioContent } from "@/config/content"
import { useTypingAnimation, useInView } from "@/hooks/useScrollAnimation"
import { scrollToSection } from "@/hooks/useScrollAnimation"
import { useTheme } from "@/providers/ThemeProvider"
import { cn } from "@/utils/classNames"
import Button from "@/components/ui/Button"

// X (Twitter) Icon Component
const XIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const Hero: FC = () => {
  const { theme } = useTheme()
  const { displayText: heroText, isComplete } = useTypingAnimation(
    `Hi, I'm ${portfolioContent.personal.name}`,
    80
  )
  const [heroInViewRef, heroInView] = useInView(0.3)

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    x: XIcon,
    scholar: GraduationCap,
  }

  return (
    <section
      id="hero"
      className={cn(
        "min-h-screen flex items-center justify-center relative overflow-hidden pt-16 transition-colors duration-300",
        theme === 'dark' ? "bg-dark-navy" : "bg-light-bg"
      )}
      aria-label="Hero section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div 
          className={cn(
            "absolute top-1/4 left-1/4 w-32 h-32 md:w-40 md:h-40 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow",
            theme === 'dark' ? "bg-cyan-primary" : "bg-cyan-dark"
          )}
        ></div>
        <div 
          className={cn(
            "absolute bottom-1/4 right-1/4 w-32 h-32 md:w-40 md:h-40 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow delay-1000",
            theme === 'dark' ? "bg-slate-gray" : "bg-medium-slate"
          )}
        ></div>
        <div 
          className={cn(
            "absolute top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow delay-500 transform -translate-x-1/2 -translate-y-1/2",
            theme === 'dark' ? "bg-cyan-primary" : "bg-cyan-dark"
          )}
        ></div>
      </div>

      <div
        ref={heroInViewRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <div className="space-y-6 md:space-y-8">
          <h1
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight",
              heroInView ? "animate-fade-in-up animate-delay-1" : "opacity-0",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}
          >
            {heroText}
            {!isComplete && (
              <span className="animate-pulse" aria-hidden="true">
                |
              </span>
            )}
          </h1>
          <p
            className={cn(
              "text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto",
              heroInView ? "animate-fade-in-up animate-delay-2" : "opacity-0",
              theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
            )}
          >
            {portfolioContent.personal.title}
          </p>

          <div
            className={`flex flex-col items-center gap-4 mt-8 ${
              heroInView ? "animate-fade-in-up animate-delay-3" : "opacity-0"
            }`}
          >
            {/* Primary CTA */}
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("projects")}
              aria-label="View projects section"
              className="w-full sm:w-auto"
            >
              View My Projects
            </Button>
            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={portfolioContent.personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV (opens in new tab)"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Download CV
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                aria-label="Navigate to contact section"
                className="w-full sm:w-auto"
              >
                Let&apos;s Connect
              </Button>
            </div>
          </div>

          <div
            className={cn(
              "flex justify-center gap-6 mt-8",
              heroInView ? "animate-fade-in animate-delay-3" : "opacity-0"
            )}
          >
            {portfolioContent.socials.map((social) => {
                const IconComponent =
                  socialIcons[social.icon as keyof typeof socialIcons] || Github
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} Profile (opens in new tab)`}
                    className={cn(
                      "transition-colors hover:scale-110 transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded",
                      theme === 'dark'
                        ? "text-text-secondary-dark hover:text-cyan-primary"
                        : "text-text-secondary-light hover:text-cyan-dark"
                    )}
                  >
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
                  </a>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


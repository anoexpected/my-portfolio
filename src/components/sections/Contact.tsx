"use client"

import { FC } from "react"
import { Mail, Phone, Linkedin, Github, GraduationCap } from "lucide-react"
import { portfolioContent } from "@/config/content"
import { useInView } from "@/hooks/useScrollAnimation"
import { useTheme } from "@/providers/ThemeProvider"
import { cn } from "@/utils/classNames"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import ContactForm from "./ContactForm"

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

const Contact: FC = () => {
  const { theme } = useTheme()
  const [contactInViewRef, contactInView] = useInView(0.3)

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    x: XIcon,
    scholar: GraduationCap,
  }

  return (
    <section
      id="contact"
      className={cn(
        "py-16 md:py-20 transition-colors duration-300",
        theme === 'dark' ? "bg-dark-secondary" : "bg-light-bg"
      )}
      aria-label="Contact section"
    >
      <div ref={contactInViewRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-16 ${
            contactInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
          )}>
            Let&apos;s Connect
          </h2>
          <p className={cn(
            "text-lg md:text-xl",
            theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
          )}>
            I&apos;m open to internships, collaborations, and mentorship. Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Contact Info Card */}
          <div
            className={`w-full lg:w-1/2 ${
              contactInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Card
              variant="elevated"
              className="p-6 md:p-8 text-center"
            >
              <h3 className={cn(
                "text-xl md:text-2xl font-semibold mb-6",
                theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
              )}>
                Let&apos;s Connect Directly
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 justify-center">
                <div
                  className={cn(
                    "p-4 md:p-6 rounded-lg shadow-md",
                    theme === 'dark' ? "bg-dark-tertiary" : "bg-light-card"
                  )}
                >
                  <Mail
                    className={cn(
                      "w-8 h-8 md:w-10 md:h-10 mx-auto mb-3",
                      theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                    )}
                    aria-hidden="true"
                  />
                  <p className={cn(
                    "text-lg md:text-xl font-semibold mb-1",
                    theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                  )}>
                    Email
                  </p>
                  <p className={cn(
                    "text-xs md:text-sm mb-3",
                    theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                  )}>
                    {portfolioContent.personal.email}
                  </p>
                  <a
                    href={`mailto:${portfolioContent.personal.email}`}
                    aria-label={`Send email to ${portfolioContent.personal.email}`}
                  >
                    <Button variant="primary" size="sm" className="w-full">
                      Send Email
                    </Button>
                  </a>
                </div>
                <div
                  className={cn(
                    "p-4 md:p-6 rounded-lg shadow-md",
                    theme === 'dark' ? "bg-dark-tertiary" : "bg-light-card"
                  )}
                >
                  <Phone
                    className={cn(
                      "w-8 h-8 md:w-10 md:h-10 mx-auto mb-3",
                      theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                    )}
                    aria-hidden="true"
                  />
                  <p className={cn(
                    "text-lg md:text-xl font-semibold mb-1",
                    theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                  )}>
                    Phone
                  </p>
                  <p className={cn(
                    "text-xs md:text-sm mb-3",
                    theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                  )}>
                    {portfolioContent.personal.phone}
                  </p>
                  <a
                    href={`tel:${portfolioContent.personal.phone.replace(/\s/g, "")}`}
                    aria-label={`Call ${portfolioContent.personal.phone}`}
                  >
                    <Button variant="primary" size="sm" className="w-full">
                      Call Me
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex justify-center gap-4 md:gap-6 mt-6 md:mt-8">
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
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
                      </a>
                    )
                  })}
              </div>
              <p className={cn(
                "text-xs md:text-sm mt-4 md:mt-6",
                theme === 'dark' ? "text-text-muted-dark" : "text-text-muted-light"
              )}>
                I&apos;ll get back to you as soon as possible!
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div
            className={`w-full lg:w-1/2 ${
              contactInView ? "animate-fade-in-up animate-delay-2" : "opacity-0"
            }`}
          >
            <h3
              className={cn(
                "text-xl md:text-2xl font-semibold mb-6 text-center lg:text-left",
                theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
              )}
            >
              Send me a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


"use client"

import { FC, useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { portfolioContent } from "@/config/content"
import { scrollToSection } from "@/hooks/useScrollAnimation"
import { colors } from "@/config/colors"
import { cn } from "@/utils/classNames"
import { useTheme } from "@/providers/ThemeProvider"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

const Navbar: FC = () => {
  const { theme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "experience", "skills", "contact"]
    const navbarHeight = 64 // Height of fixed navbar

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + navbarHeight + 50 // Offset for navbar + some padding

      let currentSection = "hero"
      let minDistance = Infinity

      // Find the section closest to the top of the viewport
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const distance = Math.abs(scrollPosition - elementTop)

          // If we've scrolled past this section's top, it's a candidate
          if (scrollPosition >= elementTop - 100) {
            if (distance < minDistance) {
              minDistance = distance
              currentSection = id
            }
          }
        }
      })

      // Fallback: if at the very top, use hero
      if (window.scrollY < 100) {
        currentSection = "hero"
      }

      setActiveSection(currentSection)
    }

    // Initial check
    updateActiveSection()

    // Update on scroll with throttling for performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateActiveSection, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 shadow-lg backdrop-blur-sm transition-colors duration-300",
        theme === 'dark'
          ? "bg-dark-navy/95 border-b border-cyan-primary/20"
          : "bg-light-bg/95 border-b border-cyan-primary/10"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={cn(
            "font-bold text-xl",
            theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
          )}>
            {portfolioContent.personal.name}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {portfolioContent.navigation.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "transition-all duration-300 text-lg font-medium hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-4 py-2 relative",
                    isActive && "font-semibold",
                    theme === 'dark'
                      ? isActive 
                        ? "text-cyan-primary" 
                        : "text-text-primary-dark hover:text-text-secondary-dark"
                      : isActive
                        ? "text-cyan-dark"
                        : "text-text-primary-light hover:text-text-secondary-light"
                  )}
                  role="menuitem"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300",
                        theme === 'dark' ? "bg-cyan-primary" : "bg-cyan-dark"
                      )}
                    />
                  )}
                </button>
              )
            })}
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
                theme === 'dark'
                  ? "text-text-primary-dark hover:bg-dark-secondary"
                  : "text-text-primary-light hover:bg-light-card"
              )}
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden border-t shadow-lg",
            theme === 'dark'
              ? "border-cyan-primary/20 bg-dark-navy"
              : "border-cyan-primary/10 bg-light-bg"
          )}
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {portfolioContent.navigation.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-all duration-300 w-full text-left rounded-md focus:outline-none focus:ring-2 focus:ring-inset min-h-[44px]",
                    isActive && "font-semibold border-l-2",
                    theme === 'dark'
                      ? isActive
                        ? "text-cyan-primary bg-cyan-primary/20 border-cyan-primary"
                        : "text-text-primary-dark hover:bg-cyan-primary/15"
                      : isActive
                        ? "text-cyan-dark bg-cyan-dark/10 border-cyan-dark"
                        : "text-text-primary-light hover:bg-cyan-dark/10"
                  )}
                  role="menuitem"
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar


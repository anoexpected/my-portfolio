"use client"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useTypingAnimation, useInView } from "@/hooks/animations"

const HeroSection = () => {
  const { displayText: heroText } = useTypingAnimation("Hi, I'm Anotida Expected", 80)
  const [heroInViewRef, heroInView] = useInView(0.3)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-[#FFF8DC]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-40 md:h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-40 md:h-40 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div ref={heroInViewRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`space-y-6 md:space-y-8 ${heroInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#1F2937]">
            {heroText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto">
            AWS-Certified Developer | AI Researcher | Problem Solver
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#FFA500] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-base sm:text-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#FFA500] font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-[#FFA500] text-base sm:text-lg"
            >
              Contact Me
            </button>
            <a
              href="https://drive.google.com/file/d/1-C1EBAqnjyfdKDoJxX-rPuF3B-xnBlep/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#FFA500] font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-[#FFA500] text-base sm:text-lg"
            >
              Download CV
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-8 text-[#6B7280]">
            <a
              href="https://github.com/anoexpected"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-[#FFA500] transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://linkedin.com/in/anoexpected"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-[#FFA500] transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://twitter.com/anoexpected"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="hover:text-[#FFA500] transition-colors hover:scale-110 transform duration-200"
            >
              <Twitter className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

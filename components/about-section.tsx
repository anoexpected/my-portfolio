"use client"

const AboutSection = () => {
  // Removed animation logic as the hook could not be resolved
  // const [aboutInViewRef, aboutInView] = useInView(0.3)

  return (
    <section id="about" className="py-16 md:py-20 bg-[#FFF8DC]">
      <div /*ref={aboutInViewRef}*/ className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1F2937]">About Me</h2>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto">
            Get to know my background, skills, and aspirations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Professional Photo */}
          <div className="relative">
            <div className="relative max-w-xs mx-auto rounded-xl overflow-hidden shadow-xl border-4 border-[#FFA500]">
              <img
                src="/images/ano-profile.jpg"
                alt="Anotida Msiiwa - Professional Headshot"
                className="w-full h-auto object-cover"
              // The `width` and `height` properties from the Next.js Image component are not used with a standard <img> tag
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-[#1F2937]">
              <p>
                I&apos;m a Computer Science student at Aditya College of Engineering and Technology, currently working remotely as a Part-Time AI Researcher at Algoverse where I focus on large language model optimization and real-world deployment challenges.
                I build AI applications that work in practice—like PaperAI, a research assistant using RAG for document interaction, and Hikari Flash, a Japanese learning app powered by Llama 3.1. As an AWS Certified Developer, I&apos;ve built production systems including automated backup solutions with 99.9% reliability and cost-optimized cloud architectures.
                My approach focuses on making AI systems accessible and scalable, whether through efficient API usage, edge deployment, or designing for diverse user environments. I&apos;m particularly interested in bridging research innovations with practical applications that can scale globally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-[#1F2937]">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-sm md:text-base">Aditya College of Engineering and Technology</p>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  Bachelor of Computer Science and Engineering (CGPA of 8.17)
                </p>
                <p className="text-xs md:text-sm text-[#6B7280]">Expected Graduation August 2026</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Focus Areas</h3>
                <ul className="list-disc list-inside text-xs md:text-sm text-[#6B7280] space-y-1">
                  <li>AI Research & Development</li>
                  <li>Machine Learning</li>
                  <li>Cloud Computing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
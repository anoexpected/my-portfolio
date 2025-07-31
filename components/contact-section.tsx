"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Send, CheckCircle, AlertCircle, Mail, Phone, Linkedin, Github, Twitter } from "lucide-react"

// Placeholder for useInView hook if not available in this context
const useInView = (threshold: number = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, isInView] as const;
};


const ContactSection = () => {
  const [contactInViewRef, contactInView] = useInView(0.3)
  // Removed form-related state as the form is being removed
  // const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  // const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  // Removed handleSubmit function as the form is being removed
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setFormStatus("loading")

  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 1500))
  //     const success = Math.random() > 0.1
  //     if (success) {
  //       setFormStatus("success")
  //       setFormData({ name: "", email: "", message: "" })
  //     } else {
  //       setFormStatus("error")
  //     }
  //   } catch (error) {
  //     console.error("Form submission error:", error)
  //     setFormStatus("error")
  //   } finally {
  //     setTimeout(() => setFormStatus("idle"), 3000)
  //   }
  // }

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#191970] text-white">
      <div ref={contactInViewRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 ${contactInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let's Connect</h2>
          <p className="text-lg md:text-xl text-gray-300">
            I'm open to internships, collaborations, and mentorship. Feel free to reach out!
          </p>
        </div>

        {/* Removed the grid wrapper and centered the single direct contact block */}
        <div className="flex justify-center">
          {/* Direct Contact */}
          {/* Adjusted width for centering, using max-w-lg for a reasonable size */}
          <div className={`space-y-8 w-full max-w-lg ${contactInView ? "animate-fade-in-up" : "opacity-0"}`}> {/* Changed animation to fade-in-up for single block */}
            <div className="p-6 md:p-8 bg-[#2A2A80] rounded-xl shadow-lg text-center">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">Let's Connect Directly</h3>
              {/* Added justify-center to center the grid items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 justify-center">
                <div className="bg-[#191970] p-4 md:p-6 rounded-lg shadow-md">
                  <Mail className="w-8 h-8 md:w-10 md:h-10 text-[#FFA500] mx-auto mb-3" />
                  <p className="text-lg md:text-xl font-semibold text-white mb-1">Email</p>
                  <p className="text-xs md:text-sm text-gray-300 mb-3">anoexpected@gmail.com</p>
                  <a
                    href="mailto:anoexpected@gmail.com"
                    className="inline-flex items-center px-3 md:px-4 py-2 bg-[#FFA500] text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
                  >
                    Send Email
                  </a>
                </div>
                <div className="bg-[#191970] p-4 md:p-6 rounded-lg shadow-md">
                  <Phone className="w-8 h-8 md:w-10 md:h-10 text-[#FFA500] mx-auto mb-3" />
                  <p className="text-lg md:text-xl font-semibold text-white mb-1">Phone</p>
                  <p className="text-xs md:text-sm text-gray-300 mb-3">+91 9704442804</p>
                  <a
                    href="tel:+919704442804"
                    className="inline-flex items-center px-3 md:px-4 py-2 bg-[#FFA500] text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
                  >
                    Call Me
                  </a>
                </div>
              </div>

              <div className="flex justify-center gap-4 md:gap-6 mt-6 md:mt-8 text-gray-300">
                <a
                  href="https://linkedin.com/in/anoexpected"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFA500] transition-colors hover:scale-110 transform duration-200"
                >
                  <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <a
                  href="https://github.com/anoexpected"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFA500] transition-colors hover:scale-110 transform duration-200"
                >
                  <Github className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <a
                  href="https://x.com/anoexpected"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFA500] transition-colors hover:scale-110 transform duration-200"
                >
                  <Twitter className="w-6 h-6 md:w-8 md:h-8" />
                </a>
              </div>
              <p className="text-xs md:text-sm text-gray-400 mt-4 md:mt-6">I'll get back to you as soon as possible!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

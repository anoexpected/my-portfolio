"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { useInView } from "@/hooks/animations"

type TabType = "experience" | "education" | "certifications";

const ExperienceSection = () => {
  const [experienceInViewRef, experienceInView] = useInView(0.3)
  const [activeTab, setActiveTab] = useState<TabType>("experience")

  const tabs = [
    { id: "experience" as const, label: "Experience" },
    { id: "education" as const, label: "Education" },
    { id: "certifications" as const, label: "Certifications" },
  ]

  return (
    <section id="experience" className="py-16 md:py-20 bg-[#FFF8DC]">
      <div ref={experienceInViewRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 ${experienceInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1F2937]">Experience & Education</h2>
          <p className="text-lg md:text-xl text-[#6B7280]">
            My professional journey, academic background, and certifications
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-lg transition-colors duration-200 ${activeTab === tab.id
                ? "bg-[#FFA500] text-white"
                : "bg-white text-[#FFA500] border border-[#FFA500] hover:bg-orange-100"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
          {activeTab === "experience" && (
            <div className="space-y-6 md:space-y-8">
              <div className={`${experienceInView ? "animate-fade-in-right" : "opacity-0"}`}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-shrink-0 text-base md:text-lg font-semibold text-[#FFA500] lg:w-1/4">
                    July 2025 - Present
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold text-[#1F2937]">Algoverse</h3>
                    <p className="text-base md:text-lg text-[#6B7280] mb-2">Part-Time AI Researcher | Remote</p>
                    <p className="list-disc list-inside text-[#6B7280] space-y-1 text-sm md:text-base">
                      Actively engaged in research on tool-augmented large language models (TaLLMs), with a focus on dynamic API tool usage and real-world adaptation challenges. Contributing to the development of benchmarking methodologies that evaluate LLM performance under environmental perturbations, such as API failures and parameter shifts, while collaborating with interdisciplinary teams to explore AI agents with capabilities in reasoning, memory retention, and adaptive workflows.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${experienceInView ? "animate-fade-in-left" : "opacity-0"}`}
                style={{ animationDelay: "200ms" }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-shrink-0 text-base md:text-lg font-semibold text-[#FFA500] lg:w-1/4">
                    May 2024 - July 2024
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold text-[#1F2937]">Technical Hub Pvt Ltd</h3>
                    <p className="text-base md:text-lg text-[#6B7280] mb-2">
                      AWS Development Intern | Andhra Pradesh, India
                    </p>
                    <p className="list-disc list-inside text-[#6B7280] space-y-1 text-sm md:text-base">
                      Engineered and deployed a robust automated backup and restore system for AWS RDS, achieving 99.9% data durability while reducing Recovery Time Objective (RTO) by 60%. Collaborated with the team to design and implement scalable and secure cloud infrastructure, including Virtual Private Clouds (VPCs), security groups, and IAM roles. Additionally, developed automated monitoring solutions using CloudWatch alarms and SNS notifications to track backup status, significantly enhancing system reliability and operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className={`space-y-6 ${experienceInView ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-shrink-0 text-base md:text-lg font-semibold text-[#FFA500] lg:w-1/4">
                  Expected Graduation Aug 2026
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-[#1F2937]">
                    Aditya College of Engineering and Technology
                  </h3>
                  <p className="text-base md:text-lg text-[#6B7280] mb-2">
                    Bachelor of Computer Science and Engineering (CGPA of 8.17)
                  </p>
                  <p className="text-sm md:text-base text-[#6B7280]">Andhra Pradesh, India</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-shrink-0 text-base md:text-lg font-semibold text-[#FFA500] lg:w-1/4">
                  March 2019 - Feb 2021
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-[#1F2937]">Fletcher High School</h3>
                  <p className="text-base md:text-lg text-[#6B7280] mb-2">Mathematics, Physics and Chemistry (MPC)</p>
                  <p className="text-sm md:text-base text-[#6B7280]">Gweru, Zimbabwe</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "certifications" && (
            <div className={`space-y-6 ${experienceInView ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-shrink-0 text-base md:text-lg font-semibold text-[#FFA500] lg:w-1/4">
                  Issued: 2025
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-[#1F2937]">
                    AWS Certified Developer - Associate
                  </h3>
                  <p className="text-base md:text-lg text-[#6B7280] mb-2">Amazon Web Services</p>
                  <a
                    href="https://www.credly.com/badges/200adcbf-ae17-426b-8cd6-b370394e5b90/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFA500] hover:underline flex items-center text-sm md:text-base"
                  >
                    Verify Credential <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
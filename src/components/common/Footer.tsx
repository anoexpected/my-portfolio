"use client"

import { FC } from "react"
import { portfolioContent } from "@/config/content"
import { colors } from "@/config/colors"
import LastUpdated from "./LastUpdated"
import { useTheme } from "@/providers/ThemeProvider"
import { cn } from "@/utils/classNames"

const Footer: FC = () => {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()

  return (
    <footer
      className={cn(
        "text-center",
        theme === 'dark' 
          ? "border-t border-gray-800" 
          : "border-t border-gray-200"
      )}
      style={{
        backgroundColor: colors.background.primary,
        color: colors.text.muted,
      }}
      role="contentinfo"
    >
      {/* Last Updated Indicator */}
      <LastUpdated />

      {/* Copyright Section */}
      <div className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm md:text-base">
            &copy; {currentYear} {portfolioContent.personal.name}. All rights reserved.
          </p>
          <p className="mt-2 text-sm md:text-base">
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by {portfolioContent.personal.name.split(" ")[0]}.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


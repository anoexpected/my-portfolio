"use client"

import { FC, ReactNode, HTMLAttributes } from "react"
import { cn } from "@/utils/classNames"
import { useTheme } from "@/providers/ThemeProvider"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: "default" | "elevated" | "outlined"
  className?: string
}

const Card: FC<CardProps> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  const { theme } = useTheme()

  const getVariantClasses = (variant: "default" | "elevated" | "outlined") => {
    const baseClasses = "rounded-xl transition-all duration-300"
    
    if (theme === 'dark') {
      switch (variant) {
        case "default":
          return `${baseClasses} bg-dark-secondary`
        case "elevated":
          return `${baseClasses} bg-dark-secondary shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]`
        case "outlined":
          return `${baseClasses} bg-dark-secondary border border-cyan-primary/20`
        default:
          return baseClasses
      }
    } else {
      switch (variant) {
        case "default":
          return `${baseClasses} bg-light-card`
        case "elevated":
          return `${baseClasses} bg-light-card shadow-lg`
        case "outlined":
          return `${baseClasses} bg-light-card border border-cyan-primary/30`
        default:
          return baseClasses
      }
    }
  }

  return (
    <div
      className={cn(getVariantClasses(variant), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card


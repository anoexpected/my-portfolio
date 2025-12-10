"use client"

import { FC, ButtonHTMLAttributes, ReactNode, useState } from "react"
import { cn } from "@/utils/classNames"
import { colors } from "@/config/colors"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: ReactNode
  className?: string
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md hover:shadow-lg hover:scale-105"
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const getVariantStyle = () => {
    const baseStyle: React.CSSProperties = {}
    
    switch (variant) {
      case "primary":
        return {
          ...baseStyle,
          backgroundColor: isHovered ? "#06B6D4" : colors.accent.primary,
          color: colors.background.primary,
          border: "none",
        }
      case "secondary":
        return {
          ...baseStyle,
          backgroundColor: isHovered ? colors.background.secondary : colors.background.secondary,
          color: colors.accent.primary,
          border: `1px solid ${colors.accent.primary}`,
        }
      case "outline":
        return {
          ...baseStyle,
          backgroundColor: isHovered ? colors.accent.primary : "transparent",
          color: isHovered ? colors.background.primary : colors.accent.primary,
          border: `2px solid ${colors.accent.primary}`,
        }
    }
  }

  return (
    <button
      className={cn(baseStyles, sizes[size], className)}
      style={{
        ...getVariantStyle(),
        "--tw-ring-color": colors.accent.primary,
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button


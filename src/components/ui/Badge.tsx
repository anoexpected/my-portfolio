"use client"

import { FC, ReactNode } from "react"
import { cn } from "@/utils/classNames"
import { colors } from "@/config/colors"

interface BadgeProps {
  children: ReactNode
  variant?: "default" | "primary" | "secondary"
  className?: string
}

const Badge: FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: "#FFF4E6",
          color: "#CC6600",
          borderColor: "#FFE0B2",
        }
      case "secondary":
        return {
          backgroundColor: "#E3F2FD",
          color: "#1565C0",
          borderColor: "#BBDEFB",
        }
      default:
        return {
          backgroundColor: colors.gray[100],
          color: colors.gray[600],
          borderColor: colors.gray[200],
        }
    }
  }

  return (
    <span
      className={cn("px-3 py-1 text-xs font-mono rounded-full border", className)}
      style={getVariantStyle()}
    >
      {children}
    </span>
  )
}

export default Badge


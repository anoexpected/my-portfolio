"use client"

import { useState, useEffect, useRef } from "react"

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param threshold - Intersection threshold (0-1)
 * @param rootMargin - Root margin for the observer
 * @returns [ref, isInView] - Ref to attach to element and boolean indicating visibility
 */
export const useInView = (
  threshold: number = 0.1,
  rootMargin: string = "0px"
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Unobserve once in view if animation should only play once
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold, rootMargin }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return [ref, isInView]
}

/**
 * Custom hook for typing animation effect
 * @param text - Text to animate
 * @param speed - Typing speed in milliseconds
 * @returns Object with displayText and isComplete
 */
export const useTypingAnimation = (
  text: string,
  speed: number = 80
): { displayText: string; isComplete: boolean } => {
  // Initialize with full text to prevent hydration mismatch
  // Server and client will both render the full text initially
  const [displayText, setDisplayText] = useState(text)
  const [isComplete, setIsComplete] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Mark as mounted on client side
    setIsMounted(true)
    
    let typingTimer: NodeJS.Timeout | null = null
    
    // Reset and start animation after a brief delay to ensure hydration is complete
    const startTimer = setTimeout(() => {
      setDisplayText("")
      setIsComplete(false)
      
      let i = 0
      typingTimer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1))
          i++
        } else {
          setIsComplete(true)
          if (typingTimer) {
            clearInterval(typingTimer)
            typingTimer = null
          }
        }
      }, speed)
    }, 100)

    return () => {
      clearTimeout(startTimer)
      if (typingTimer) {
        clearInterval(typingTimer)
      }
    }
  }, [text, speed])

  // Return full text during SSR and before animation starts
  if (!isMounted) {
    return { displayText: text, isComplete: true }
  }

  return { displayText, isComplete }
}

/**
 * Utility function to scroll to a section smoothly
 * @param sectionId - ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}


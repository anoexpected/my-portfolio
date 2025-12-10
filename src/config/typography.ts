/**
 * Typography configuration
 * Font sizes, weights, and line heights used throughout the application
 * Following a 1.2 ratio scale for optimal readability
 */

export const typography = {
  fonts: {
    heading: {
      name: 'Inter',
      weights: {
        bold: 700,
        semibold: 600
      }
    },
    body: {
      name: 'Inter',
      weights: {
        regular: 400,
        medium: 500
      }
    },
    mono: {
      name: 'JetBrains Mono',
      weights: {
        regular: 400
      }
    }
  },
  
  // Size scale (following 1.2 ratio)
  sizes: {
    // Headings
    h1: {
      size: 56,        // 3.5rem
      lineHeight: 1.2,
      letterSpacing: -1.5,
      weight: 700
    },
    h2: {
      size: 36,        // 2.25rem
      lineHeight: 1.3,
      letterSpacing: -0.5,
      weight: 700
    },
    h3: {
      size: 24,        // 1.5rem
      lineHeight: 1.4,
      letterSpacing: 0,
      weight: 600
    },
    h4: {
      size: 20,        // 1.25rem
      lineHeight: 1.4,
      letterSpacing: 0,
      weight: 600
    },
    // Body text
    body: {
      size: 16,        // 1rem
      lineHeight: 1.6,
      letterSpacing: 0,
      weight: 400
    },
    bodySmall: {
      size: 14,        // 0.875rem
      lineHeight: 1.5,
      letterSpacing: 0.2,
      weight: 400
    },
    // Labels & captions
    label: {
      size: 12,        // 0.75rem
      lineHeight: 1.5,
      letterSpacing: 0.5,
      weight: 500
    },
    // Code
    code: {
      size: 14,
      lineHeight: 1.5,
      letterSpacing: 0,
      weight: 400,
      font: 'JetBrains Mono'
    }
  },
  
  // Legacy support
  fontFamily: {
    sans: "var(--font-inter)",
    mono: "var(--font-jetbrains-mono)",
  },
  fontSize: {
    xs: "0.75rem",      // 12px
    sm: "0.875rem",     // 14px
    base: "1rem",       // 16px
    lg: "1.125rem",     // 18px
    xl: "1.25rem",      // 20px
    "2xl": "1.5rem",    // 24px
    "3xl": "1.875rem",  // 30px
    "4xl": "2.25rem",   // 36px
    "5xl": "3rem",      // 48px
    "6xl": "3.75rem",   // 60px
    "7xl": "4.5rem",    // 72px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export type TypographyKey = keyof typeof typography;


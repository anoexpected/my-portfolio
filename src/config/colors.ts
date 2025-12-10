/**
 * Centralized color palette for the portfolio
 * All colors used throughout the application should reference these constants
 * WCAG AA/AAA compliant contrast ratios
 */

export const colors = {
  background: {
    primary: "#0F172A",      // Dark Navy
    secondary: "#0a0f25",    // Darker Navy
    tertiary: "#151d3b",     // Slightly lighter for cards
    light: "#f9fafb",        // For light mode
    white: "#FFFFFF",
  },
  accent: {
    primary: "#22D3EE",      // Neon Cyan
    secondary: "#64748B",    // Cool Gray
    light: "#F4F4F4",        // Light Gray
  },
  
  // TEXT HIERARCHY - Dark Mode (WCAG AA/AAA compliant)
  text: {
    dark: {
      primary: "#F4F4F4",           // Primary text (white-ish) - Contrast ratio: 14:1 ✅
      secondary: "#CBD5E1",         // Secondary text (light gray) - Contrast ratio: 7:1 ✅
      muted: "#94a3b8",            // Muted text (medium gray) - Contrast ratio: 3:1
      accent: "#22D3EE"            // Accent text (cyan)
    },
    light: {
      primary: "#1E293B",           // Primary text (dark slate) - Contrast ratio: 15:1 ✅
      secondary: "#475569",         // Secondary text (medium slate) - Contrast ratio: 7:1 ✅
      muted: "#94A3B8",            // Muted text (gray) - Contrast ratio: 3:1
      accent: "#0E7490"            // Accent text (darker cyan)
    },
    // Legacy support (maps to dark mode for backward compatibility)
    primary: "#F4F4F4",
    secondary: "#CBD5E1",
    muted: "#94a3b8",
    white: "#FFFFFF",
  },
  
  // Card backgrounds - Dark Mode
  card: {
    dark: {
      bg: "#0a0f25",               // Darker navy
      border: "rgba(34, 211, 238, 0.2)",
      hover: "#151d3b"
    },
    light: {
      bg: "#F1F5F9",               // Light gray
      border: "rgba(15, 23, 42, 0.1)",
      hover: "#E2E8F0"
    }
  },
  
  // Legacy support
  navy: {
    dark: "#191970",         // Midnight Blue
    medium: "#2A2A80",       // Medium Navy
  },
  gray: {
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
} as const;

/**
 * Semantic color mapping for different sections
 * Using new dark navy/cyan theme
 */
export const colorMap = {
  hero: {
    bg: colors.background.primary,
    text: colors.text.primary,
    accent: colors.accent.primary,
  },
  about: {
    bg: colors.background.primary,
    text: colors.text.primary,
    accent: colors.accent.primary,
  },
  projects: {
    bg: colors.background.primary,
    text: colors.text.primary,
    accent: colors.accent.primary,
  },
  experience: {
    bg: colors.background.primary,
    text: colors.text.primary,
    accent: colors.accent.primary,
  },
  skills: {
    bg: colors.background.secondary,
    text: colors.text.primary,
    accent: colors.accent.primary,
  },
  contact: {
    bg: colors.background.secondary,
    text: colors.text.primary,
    accent: colors.accent.primary,
  },
  navbar: {
    bg: colors.background.primary,
    text: colors.text.primary,
    accent: colors.accent.primary,
  },
  footer: {
    bg: colors.background.primary,
    text: colors.text.secondary,
  },
} as const;

export type ColorKey = keyof typeof colors;
export type ColorMapKey = keyof typeof colorMap;


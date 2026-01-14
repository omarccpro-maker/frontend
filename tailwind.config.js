/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#050505",
        foreground: "#EDEDED",
        primary: {
          DEFAULT: "#D4AF37",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          foreground: "#D4AF37",
        },
        accent: {
          DEFAULT: "#FFD700",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#2A2A2A",
          foreground: "#888888",
        },
        card: {
          DEFAULT: "#1A1A1A",
          foreground: "#EDEDED",
        },
        popover: {
          DEFAULT: "#1A1A1A",
          foreground: "#EDEDED",
        },
        border: "#333333",
        input: "#333333",
        ring: "#D4AF37",
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        gold: {
          dim: "#8A7028",
          DEFAULT: "#D4AF37",
          bright: "#FCEEAC",
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        'heading-ar': ['Noto Kufi Arabic', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

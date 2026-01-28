/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        primary: "#6366f1", // Indigo accent
        secondary: "#a1a1aa",
        border: "rgba(255, 255, 255, 0.1)",
        card: "rgba(255, 255, 255, 0.05)",
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 40 L40 40 L40 0 M0 0 L0 40' fill='none' stroke='white' stroke-opacity='0.1' stroke-width='1'/%3E%3C/svg%3E\")",
      },
      fontFamily: {
        geist: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        'spotlight': 'spotlight 2s ease-in-out infinite alternate',
      },
      keyframes: {
        spotlight: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.3 },
          '100%': { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 0.5 },
        }
      }
    },
  },
  plugins: [],
}

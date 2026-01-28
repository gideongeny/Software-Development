/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#f8fafc",
        card: "rgba(15, 23, 42, 0.6)",
        border: "rgba(255, 255, 255, 0.08)",
        primary: {
          DEFAULT: "#6366f1", // Indigo
          glow: "#818cf8",
        },
        secondary: {
          DEFAULT: "#94a3b8", // Slate
          light: "#e2e8f0",
        },
        accent: {
          DEFAULT: "#38bdf8", // Sky Blue
          purple: "#a855f7",
        }
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      },
      boxShadow: {
        'premium': '0 0 30px -10px rgba(99, 102, 241, 0.3)',
        'premium-hover': '0 0 40px -5px rgba(99, 102, 241, 0.4)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'slow-drift': 'slow-drift 20s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.6 },
        },
        'slow-drift': {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, 20px)' },
          '100%': { transform: 'translate(0, 0)' },
        }
      }
    },
  },
  plugins: [],
}

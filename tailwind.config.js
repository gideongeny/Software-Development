/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#020617", // Main background
        charcoal: "#0f172a", // Secondary dark
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        accent: {
          glow: "#6366f1", // Indigo core
          purple: "#a855f7",
          cyan: "#06b6d4"
        }
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
        'subtle-glow': 'radial-gradient(circle at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 4s infinite',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        }
      }
    },
  },
  plugins: [],
}

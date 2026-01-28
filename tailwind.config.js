/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#030712",
        charcoal: "#0f172a",
        luxury: {
          indigo: "#4f46e5",
          silver: "#94a3b8",
          gold: "#d4af37", // Used sparingly for accents
        },
        border: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
        'indigo-glow': 'radial-gradient(circle at center, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'float-slow': 'float 10s ease-in-out infinite',
        'reveal-text': 'reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        reveal: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}

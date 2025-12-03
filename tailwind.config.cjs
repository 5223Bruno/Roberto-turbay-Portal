// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Paleta final baseada nas escolhas do Bruno
        primary: {
          DEFAULT: "#0A5CA0", // azul de fundo (escolhido: opção B)
          900: "#083f73",
          800: "#0A4F8A",
          700: "#0A5CA0"
        },
        accent: {
          DEFAULT: "#F2C94C", // amarelo institucional (opção B)
          dark: "#C39100"
        },
        neutral: {
          white: "#FFFFFF",
          text: "#0F172A",
          muted: "#475569",
          border: "#E2E8F0",
          lightbg: "#E8ECF3"
        },
        brand: {
          light: "#DCEAFF",
          DEFAULT: "#0A5CA0",
          dark: "#083a73"
        }
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        'brand-sm': '0 8px 24px rgba(10,92,160,0.08)',
        'brand-md': '0 16px 48px rgba(10,92,160,0.12)'
      },
      borderRadius: {
        'card': '12px'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fadeUp 420ms cubic-bezier(.22,.9,.28,1) both',
        'float-slow': 'float 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

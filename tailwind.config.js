// // module.exports = {
// //   content: ["./src/**/*.{html,js}"],
// //   theme: {
// //     extend: {
// //       animation: {
// //         'gradient': 'gradientAnimation 15s ease infinite',
// //       },
// //       keyframes: {
// //         gradientAnimation: {
// //           '0%, 100%': { backgroundPosition: '0% 50%' },
// //           '50%': { backgroundPosition: '100% 50%' },
// //         }
// //       }
// //     }
// //   },
// //   plugins: [],
// // }

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       fontFamily: {
//         'poppins': ['Poppins', 'sans-serif'],
//       },
//       colors: {
//         'header-border': '#333',
//         'logo': '#FFF',
//         'dot-bg': '#FFD700',
//         'nav-item': '#FFF',
//         'nav-item-hover': '#FFD700',
//         'light-mode-bg': '#555',
//         'navigation-bg': 'rgba(217, 217, 217, 0.05)',
//         'about-para': '#b9b8b8',
//         'line': '#FFF',
//         'language-card-bg': '#1e1e1e',
//         'language-text': '#FFF',
//         'skill-card-bg': '#1e1e1e',
//         'skill-text': '#FFF',
//         'skill-desc': '#b9b8b8',
//         'project-card-bg': '#171717',
//         'project-border': '#555',
//         'project-text': '#FFF',
//         'project-overlay-bg': 'rgba(0, 0, 0, 0.8)',
//         'project-link-bg': '#3b3b3b',
//         'project-link-hover-bg': '#555',
//         'title': '#FFF',
//         'title-desc': '#b9b8b8',
//         'contact-bg': 'rgba(217, 217, 217, 0.08)',
//         'contact-text': '#FFF',
//         'contact-input-bg': 'rgba(16, 17, 17, 0.78)',
//         'placeholder': 'rgba(255, 255, 255, 0.31)',
//         'btn-txt': '#000',
//         'btn-bg': '#FFF',
//         'btn-hover-bg': '#0e0e0e',
//         'btn-hover-border': '#b9b8b8',
//         'dot': '#EEC01E',
//         'footer-border-top': '#FDFDFD',
//         'footer-text': '#b9b8b8',
//         'footer-p': '#FFF',
//         'skill-popup-bg': 'rgba(255, 215, 0, 0.9)',
//         'skill-popup-text': '#101111',
//       },
//       backgroundImage: {
//         'gradient-dark': 'linear-gradient(135deg, #141416, #000000)',
//         'gradient-light': 'linear-gradient(135deg, #ffffff, #f5f5f5, #ebebeb, #e0e0e0)',
//       },
//     },
//   },
//   plugins: [],
// }


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(14, 165, 233, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

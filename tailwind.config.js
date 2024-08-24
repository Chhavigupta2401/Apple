/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#F0E4D1",
        custom_gray: '#919191',
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
      fontFamily:{
    custom:["Foldit", "sans-serif"],
    arvo:["Michroma", "sans-serif"]

      },
      fontWeight:{
        400: '400',
        600:'600',
        700:"700"
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [ ],
};
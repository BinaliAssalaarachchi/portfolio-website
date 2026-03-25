/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 4s ease-in-out infinite",
        rotateSlow: "rotateSlow 12s linear infinite",
        scan: "scan 3s linear infinite",
        robotReact: "robotReact 0.7s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
        robotReact: {
          "0%": { transform: "translateY(0px) scale(1)" },
          "35%": { transform: "translateY(-6px) scale(1.05)" },
          "70%": { transform: "translateY(2px) scale(0.98)" },
          "100%": { transform: "translateY(0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};







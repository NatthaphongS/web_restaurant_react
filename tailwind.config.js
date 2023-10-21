/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#272727",
      primaryLight: "#3B3B3B",
      primaryDark: "#0B0B0B",
      secondary: "#FF5A36",
      secondaryLight: "#FF7B5F",
      secondaryDark: "#D94626",
      myblue: "#0EA5E9",
      myyellow: "#FFC633",
      mybackground: "#FFFBF2",
      darktext: "#171717",
      whitetext: "#FFFBF2",
      mygreen: "#94CE61",
      red: "#ff3333",
    },
    fontWeight: {
      light: "200",
      normal: "400",
      semibold: "600",
      bold: "800",
    },
  },
  plugins: [],
};

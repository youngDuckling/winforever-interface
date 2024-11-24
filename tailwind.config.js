/* eslint-disable */

const range = require("lodash/range");
const fromPairs = require("lodash/fromPairs");
const merge = require("lodash/merge");
const defaultConfig = require("tailwindcss/defaultConfig");

const colors = {
  blue: {
    // GMX version
    // 300: "#7885ff",
    // 400: "#4d5ffa",
    // 500: "#3d51ff",
    // 600: "#2d42fc",
    // 700: "#2e3dcd",

    // F1 version
    300: "#1E1E1E", 
    400: "#00FF7F", // @note hover over connect wallet
    500: "#1E1E1E",
    600: "#FF4B0D", //@note long/shot/connect wallet buttons
    700: "#FFD700",
  },
  //GMX version
  // "cold-blue": {
  //   500: "#3a3f79",
  //   700: "#3a3f798f",
  //   900: "#1e203e",

  // F1 version
  "cold-blue": {
    500: "#2A2A2A", //@note contour of "pay box" when inputting numbers
    700: "#999999", //@note hover short/long buttons
    900: "#141414", //@note token conversion windown bg left side gradient
  },
  // GMX version
  // "pale-blue": {
  //   100: "rgba(180,187,255, 0.1)",
  //   600: "rgba(180,187,255, 0.6)",
  // },

  // F1 version
  "pale-blue": {
    100: "#1C1111",
    600: "#ffffff",
  },
  slate: {
    // orange version
    // 100: "#ffc4a0", /* Light orange */
    // 500: "#614b3e", /* Mid-dark orange-brown */
    // 600: "#583f37", /* Darker orange-brown */
    // 700: "#3b2723", /* Very dark orange-brown */
    // // 800: "#2e1816", /* Deep orange-brown */ //@note changes component bg in exchange"trade"
    // 800: "#4A2220", /* Deep orange-brown */ 
    // 900: "#241410", /* Very deep orange-brown */
    // // 950: "#1b0908", /* Almost black orange-brown */
    // 950: "#1A0D0B", /* Almost black orange-brown */

    /// F1 version
    100: "#E2E2E2", //@note header text
    500: "#141414", //@note token conversion windown bg right side gradient
    600: "#FF1801", //@note slider tip
    700: "#23263b",
    800: "#1C1C1C",//@note changes component bg in exchange"trade"
    900: "#141414",
    950: "#0A0A0A",
    
    /// GMX version
    // 100: "#a0a3c4",
    // 500: "#3e4361",
    // 600: "#373c58",
    // 700: "#23263b",
    // 800: "#16182e",//@note changes component bg in exchange"trade"
    // 900: "#101124",
    // 950: "#08091b",
  },
  gray: {
    50: "rgba(255, 255, 255, 0.95)",
    100: "rgba(255, 255, 255, 0.9)",
    200: "rgba(255, 255, 255, 0.8)",
    300: "rgba(255, 255, 255, 0.7)",
    400: "rgba(255, 255, 255, 0.6)",
    500: "rgba(255, 255, 255, 0.5)",
    600: "rgba(255, 255, 255, 0.4)",
    700: "rgba(255, 255, 255, 0.3)",
    800: "#4A2A1D",//"rgba(255, 255, 255, 0.2)",
    900: "rgba(255, 255, 255, 0.1)",
    950: "rgba(255, 255, 255, 0.05)",
  },
  orange: {
    300: "#E85C0E",
    400: "#FF8534",
    500: "#3d51ff",
    600: "#F26B1D",
    700: "#2e3dcd",
    900: "#481E14"
  },
  // "slateorange": {
  //   100: "#FFF1E7",
  //   500: "#3e4361",
  //   600: "#373c58",
  //   700: "#23263b",
  //   800: "#2D1810",
  //   900: "#101124",
  //   950: "#08091b",
  // },
  "cold-orange": {
    500: "#3a3f79",
    700: "#542F20",
    900: "#FF8C00",
  },
  "pale-orange": {
    100: "rgba(180,187,255, 0.1)",
    600: "rgba(180,187,255, 0.6)",
  },
  yellow: {
    300: "#ffe166",
    500: "#f3b50c",
  },
  red: {
    400: "#ff637a",
    500: "#ff506a",
  },
  green: {
    300: "#56dba8",
    500: "#0ecc83",
  },
  white: "#ffffff",
  black: "#000000",
};
// const colors = require('tailwindcss/colors')

// module.exports = {
//   theme: {
//     colors: {
//       transparent: 'transparent',
//       current: 'currentColor',
//       black: colors.black,
//       white: colors.white,
//       gray: colors.gray,
//       emerald: colors.emerald,
//       indigo: colors.indigo,
//       yellow: colors.yellow,
//       slate: colors.slate,
//       blue: colors.blue,
//     },
//   },
// }
/**
 * @type {import('tailwindcss/types/config').PluginCreator}
 */
function injectColorsPlugin({ addBase, theme }) {
  function extractColorVars(colorObj, colorGroup = "") {
    return Object.keys(colorObj).reduce((vars, colorKey) => {
      const value = colorObj[colorKey];

      const visualColorKey = colorKey === "DEFAULT" ? "" : `-${colorKey}`;

      const newVars =
        typeof value === "string"
          ? { [`--color${colorGroup}${visualColorKey}`]: value }
          : extractColorVars(value, `-${colorKey}`);

      return { ...vars, ...newVars };
    }, {});
  }

  addBase({
    ":root": extractColorVars(theme("colors")),
  });
}

/**
 * @type {import('tailwindcss/types/config').PluginCreator}
 */
function customUtilsPlugin({ addUtilities, theme }) {
  addUtilities({
    ".scrollbar-hide": {
      "scrollbar-width": "none",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  });
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // @see https://tailwindcss.com/docs/customizing-spacing
    spacing: fromPairs(range(0, 96 + 1).map((spacing) => [spacing, `${spacing}px`])),
    borderRadius: merge(fromPairs(range(0, 96 + 1).map((borderRadius) => [borderRadius, `${borderRadius}px`])), {
      full: "9999px",
    }),
    fontSize: {
      12: "1.2rem",
      14: "1.4rem",
      15: "1.5rem",
      16: "1.6rem",
      24: "2.4rem",
      34: "3.4rem",
    },
    lineHeight: {
      1: "1",
      2: "2",
      // Normal is browser dependent. See https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#normal
      base: "normal",
    },
    // @see https://tailwindcss.com/docs/customizing-colors
    colors: colors,
    textDecorationColor: colors,
    placeholderColor: {
      ...colors,
      gray: "rgb(117, 117, 117)",
    },
    // @see https://tailwindcss.com/blog/tailwindcss-v3-2#max-width-and-dynamic-breakpoints
    // "these features will only be available if your project uses a simple screens configuration."
    // So we just copy the default screens config
    screens: defaultConfig.theme.screens,
    extend: {
      gridTemplateColumns: fromPairs(
        range(200, 501, 50).map((space) => [`auto-fill-${space}`, `repeat(auto-fill, minmax(${space}px, 1fr))`])
      ),
    },
  },
  plugins: [injectColorsPlugin, customUtilsPlugin],
};

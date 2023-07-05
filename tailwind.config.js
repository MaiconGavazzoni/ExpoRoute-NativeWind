const { colors } = require("tailwindcss/colors")
/** @type {import('tailwindcss').Config} */

const valeo = {
  green: {
    50: "#eaeaea",
    100: "#bebebf",
    200: "#9e9ea0",
    300: "#727275",
    400: "#56565a",
    500: "#2c2c31",
    600: "#28282d",
    700: "#1f1f23",
    800: "#18181b",
    900: "#121215",
  },
  sky: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
}

const datasystem = {
  green: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
}

const themeValeo = {
  ["valeo-primary"]: "#ec4899",
  ["valeo-secondary"]: "#9f1239",
}

const themeValeoDark = {
  ["valeo-primary-dark"]: "#2e1065",
  ["valeo-secondary-dark"]: "#a21caf",
}

const themeDatasystem = {
  ["datasystem-primary"]: "#00fffa",
  ["datasystem-secondary"]: "#ff2100",
}
const themeDatasystemDark = {
  ["datasystem-primary-dark"]: "#4d7a7a",
  ["datasystem-secondary-dark"]: "#f4b7b7",
}

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        ...themeDatasystem,
        ...themeDatasystemDark,
        ...themeValeo,
        ...themeValeoDark,
      },
    },
  },
  plugins: [],
}

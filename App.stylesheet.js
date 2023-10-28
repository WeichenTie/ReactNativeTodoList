import { StyleSheet } from "react-native";

export const Colours = {
  primary50: "#E0E8F9",
  primary100: "#BED0F7",
  primary200: "#98AEEB",
  primary300: "#7B93DB",
  primary400: "#647ACB",
  primary500: "#4C63B6",
  primary600: "#4055A8",
  primary700: "#35469C",
  primary800: "#2D3A8C",
  primary900: "#19216C",

  secondary50: "#FFFBEA",
  secondary100: "#FFF3C4",
  secondary200: "#FCE588",
  secondary300: "#FADB5F",
  secondary400: "#F7C948",
  secondary500: "#F0B429",
  secondary600: "#DE911D",
  secondary700: "#CB6E17",
  secondary800: "#B44D12",
  secondary900: "#8D2B0B",

  accent50: "",
  accent100: "",
  accent200: "",
  accent300: "",
  accent400: "",
  accent500: "",
  accent600: "",
  accent700: "",
  accent800: "",
  accent900: "",

  grey50: "#F5F7FA",
  grey100: "#E4E7EB",
  grey200: "#CBD2D9",
  grey300: "#9AA5B1",
  grey400: "#7B8794",
  grey500: "#616E7C",
  grey600: "#52606D",
  grey700: "#3E4C59",
  grey800: "#323F4B",
  grey900: "#1F2933",
};

const REM = 16;
export const Sizes = {
  0: 0,
  px: 1,
  0.25: 0.0625 * REM,
  0.5: 0.125 * REM,
  0.75: 0.1875 * REM,
  1: 0.25 * REM,
  1.5: 0.375 * REM,
  2: 0.5 * REM,
  2.5: 0.625 * REM,
  3: 0.75 * REM,
  3.5: 0.875 * REM,
  4: 1 * REM,
  4.5: 1.125 * REM,
  5: 1.25 * REM,
  6: 1.5 * REM,
  7: 1.75 * REM,
  8: 2 * REM,
  9: 2.25 * REM,
  10: 2.5 * REM,
  11: 2.75 * REM,
  12: 3 * REM,
  14: 3.5 * REM,
  16: 4 * REM,
  20: 5 * REM,
  24: 6 * REM,
  28: 7 * REM,
  32: 8 * REM,
  36: 9 * REM,
  40: 10 * REM,
  44: 11 * REM,
  48: 12 * REM,
  52: 13 * REM,
  56: 14 * REM,
  60: 15 * REM,
  64: 16 * REM,
  72: 18 * REM,
  80: 20 * REM,
  96: 24 * REM,
  full: "100%",
};

export const Borders = {
  none: 0,
  sm: 0.125 * REM,
  norm: 0.25 * REM,
  md: 0.375 * REM,
  lg: 0.5 * REM,
  xl: 0.75 * REM,
  xl2: 1 * REM,
  xl3: 1.5 * REM,
  full: 999999,
};

export const Shadows = StyleSheet.create({
  sm: {
    shadowColor: "rgb(0,0,0)",
    elevation: 20,
    shadowOffset: {
      width: 10,
      height: 11,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  // } 0 1px 2px 0 rgb(0 0 0 / 0.05);
  // norm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  // md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  // lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  // xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  // '2xl': 0 25px 50px -12px rgb(0 0 0 / 0.25);
});

export const FontSizes = StyleSheet.create({
  xs: { fontSize: 0.75 * REM, lineHeight: 1 * REM },
  sm: { fontSize: 0.875 * REM, lineHeight: 1.25 * REM },
  base: { fontSize: 1 * REM, lineHeight: 1.5 * REM },
  lg: { fontSize: 1.125 * REM, lineHeight: 1.75 * REM },
  xl: { fontSize: 1.25 * REM, lineHeight: 1.75 * REM },
  "2xl": { fontSize: 1.5 * REM, lineHeight: 2 * REM },
  "3xl": { fontSize: 1.875 * REM, lineHeight: 2.25 * REM },
  "4xl": { fontSize: 2.25 * REM, lineHeight: 2.5 * REM },
  "5xl": { fontSize: 3 * REM, lineHeight: 1 },
  "6xl": { fontSize: 3.75 * REM, lineHeight: 1 },
  "7xl": { fontSize: 4.5 * REM, lineHeight: 1 },
  "8xl": { fontSize: 6 * REM, lineHeight: 1 },
  "9xl": { fontSize: 8 * REM, lineHeight: 1 },
});

export const FontsFamilies = {
  logo: "Fredoka-Semibold",
  primary: "Fredoka-Regular",
  primaryBold: "Fredoka-Semibold",
  secondary: "",
};

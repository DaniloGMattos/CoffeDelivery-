export const defaultTheme = {
  background: "#FAFAFA",
  "base-button": "#E6E5E5",
  "base-card": "#F3F2F2",
  "base-hover": "#D7D5D5",
  "base-input": "#EDEDED",
  "base-label": "#8D8686",
  "base-subtitle": "#403937",
  "base-text": "#574F4D",
  "base-title": "#272221",
  white: "#FFFFFF",
  yellow: "#DBAC2C",
  "yellow-dark": "#C47F17",
  purple: "#8047F8",
  "purple-dark": "#4B2995",
  "purple-light": "#EBE5F9",
  "yellow-light": "#F1E9C9",
};

export type ThemeColors = keyof typeof defaultTheme;
export const defaultBreakPoint = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1000px",
  laptopM: "1300px",
  laptopL: "1440px",
  desktop: "2000px",
  desktopL: "2560px",
};
export const device = {
  mobileS: `(min-width: ${defaultBreakPoint.mobileS})`,
  mobileM: `(min-width: ${defaultBreakPoint.mobileM})`,
  mobileL: `(min-width: ${defaultBreakPoint.mobileL})`,
  tablet: `(min-width: ${defaultBreakPoint.tablet})`,
  laptop: `(min-width: ${defaultBreakPoint.laptop})`,
  laptopM: `(min-width: ${defaultBreakPoint.laptopM})`,
  laptopL: `(min-width: ${defaultBreakPoint.laptopL})`,
  desktop: `(min-width: ${defaultBreakPoint.desktop})`,
  desktopL: `(min-width: ${defaultBreakPoint.desktopL})`,
};
export type ThemeDevices = keyof typeof device;

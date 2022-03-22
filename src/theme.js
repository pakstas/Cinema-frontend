export const Theme = {
  color: {
    lightred: "rgb(240, 40, 87)",
    red: "rgb(226, 18, 67)", // main secondary color
    darkred: "rgb(189, 15, 56)",
    white: "rgb(255, 255, 255)",
    blue: "rgb(11, 19, 42)", // main primary color
    lightblue: "rgb(22, 33, 63)", // sub theme color
    yellow: "rgb(232, 175, 23)", // sub theme color
    purple: "rgb(91, 5, 106)",
    grey: "rgb(180, 180, 180)",
    lightgrey: "rgb(242, 242, 242)",
    darkergrey: "rgb(230, 230, 230)",
    black: "rgb(4, 12, 35)", // sub theme color
    mink: "rgb(226, 205, 184)",
    tint: {
      white30: "rgba(255, 255, 255, 0.3)",
      white45: "rgba(255, 255, 255, 0.45)",
    },
    gradient:
      "linear-gradient(180deg, rgba(11,19,42,1) 0%, rgba(255,255,255,0.2553221972382703) 100%)",
  },
  primary: {
    background: "rgb(11, 19, 42)",
    color: "rgb(226, 18, 67)",
    hover: {
      background: "rgb(22, 33, 63)",
      color: "rgb(226, 18, 67)",
    },
  },
  secondary: {
    background: "rgb(226, 18, 67)",
    color: "rgb(255, 255, 255)",
    hover: {
      background: "rgb(189, 15, 56)",
      color: "rgb(255, 255, 255)",
    },
  },
  screens: {
    mobile: "768px",
    desktop: "1000px",
  },
};

export default Theme;

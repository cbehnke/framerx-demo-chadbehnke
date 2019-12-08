export const brandTheme = {
  richBlack: "#04061B",
  purpleMountainMajesty: "#9D77BA",
  grape: "#8125A4",
  pixiePowder: "#230E97",
  paleCerulean: "#96B8E5",
  error: [
    "#FFF2F4",
    "#FFB2BC",
    "#FF8292",
    "#FF4961",
    "#E02840",
    "#6B262F",
    "#1C0609"
  ],
  warning: [
    "#FFF4E6",
    "#FFE7C6",
    "#FFD499",
    "#FFC06A",
    "#EFA237",
    "#844D00",
    "#261905"
  ],
  success: [
    "#E6FFF6",
    "#ADFFE2",
    "#52F2BA",
    "#28D094",
    "#18996C",
    "#12543D",
    "#091F17"
  ],
  info: [
    "#F0F1FF",
    "#D6D9F9",
    "#A8ADF7",
    "#666EE8",
    "#3B42A5",
    "#181D5E",
    "#090A1A"
  ],
  space: [
    0, 4, 8, 16, 24, 32, 40
  ],
  fontSizes: [
    0, 10, 12, 13, 15, 16, 20, 48
  ],
  lineHeights: [
    0, 1.5, 1.6, 1.9, 2
  ],
  letterSpacings: [
    0, .2, .4, .6, .8, 1, 2
  ],
  fonts: {
    header: "'Helvetica Neue', Arial, Helvetica, sans-serif",
    content: "'Open Sans', serif, 'Helvetica Neue', Arial, Helvetica, sans-serif"
  }
}

export default {
  colors: {
    primary: [
      brandTheme.paleCerulean,
      brandTheme.pixiePowder,
      brandTheme.richBlack
    ],
    secondary: [
      brandTheme.purpleMountainMajesty,
      brandTheme.grape
    ],
    status: {
      error: brandTheme.error,
      success: brandTheme.success,
      warning: brandTheme.warning,
      info: brandTheme.info
    }
  },
  space: brandTheme.space,
  fontSizes: brandTheme.fontSizes,
  lineHeights: brandTheme.lineHeights,
  letterSpacings: brandTheme.letterSpacings,
  fonts: {
    header: brandTheme.fonts.header,
    content: brandTheme.fonts.content
  },
  buttons: {
    light: {
      mainColor: brandTheme.paleCerulean,
      shadowColor: brandTheme.pixiePowder,
      highlightColor: brandTheme.richBlack,
      activeColor: brandTheme.paleCerulean
    },
    brand: {
      mainColor: brandTheme.pixiePowder,
      shadowColor: brandTheme.richBlack,
      highlightColor: "white",
      activeColor: brandTheme.paleCerulean
    },
    secondary: {
      mainColor: brandTheme.purpleMountainMajesty,
      shadowColor: brandTheme.grape,
      highlightColor: "white",
      activeColor: brandTheme.grape
    },
    error: {
      mainColor: brandTheme.error[3],
      shadowColor: brandTheme.error[4],
      highlightColor: "white",
      activeColor: brandTheme.error[5]
    }
  }
}
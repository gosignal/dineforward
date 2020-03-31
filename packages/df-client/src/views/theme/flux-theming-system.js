/**
 * Flux Theming System
 * Work in-progress
 *
 * generates primitives to be used on a higher level.
 * TODO: convert to a config class
 *
 * Written by William Kasel - 03/30/2020
 *
 */

import Color from 'color';

// `jaf-bernina-sans, sans-serif`;
const baseFontfamily = ['big-caslon-fb', 'Georgia', 'Times New Roman'].toString();
const altFontFamily = ['jaf-bernina-sans'].toString();
const basePrimaryColor = '#0080ff';
const baseSecondaryColor = '#3F3B3B';
const baseWarningColor = '#ff9800';
const baseDangerColor = '#f44336';
const baseSuccessColor = '#4caf50';
const baseInfoColor = '#00acc1';
const baseRoseColor = '#e91e63';
const baseGreyColor = '#232323';
const baseWhiteColor = '#fff';
const baseBlackColor = '#121212';
const facebookColor = '#3b5998';
const googleColor = '#dd4b39';
const defaultTransitions = ['all 150ms ease 0s', 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'];
const defaultBorderRadius = 3;
const defaultBorder = 0;

// set transparency breakpoints
const transparencies = {
  none: 1,
  fade: 0.75,
  half: 0.5,
  light: 0.25,
  mlight: 0.15,
  xlight: 0.1,
};
// Build Base Configs

const colors = {
  primary: Color(basePrimaryColor),
  secondary: Color(baseSecondaryColor),
  warning: Color(baseWarningColor),
  success: Color(baseSuccessColor),
  danger: Color(baseDangerColor),
  info: Color(baseInfoColor),
  rose: Color(baseRoseColor),
  grey: Color(baseGreyColor),
  white: Color(baseWhiteColor),
  black: Color(baseBlackColor),
  facebook: Color(facebookColor),
  google: Color(googleColor),
};
const globalTypography = {
  fontFamily: baseFontfamily,
  color: colors.black.lighten(50),
  _color: colors.black.lighten(70).hex(), // need to think of a better way to reference this
  size: 1,
};
const typography = {
  global: globalTypography,
  header: {
    color: globalTypography._color,
  },
  body: {
    color: globalTypography._color,
  },
  muted: {
    color: globalTypography.color.lighten(0.8),
  },
};

const generics = {
  transitions: defaultTransitions,
  borderRadius: `${defaultBorderRadius}px`,
  defaultBorder: `${defaultBorder}px`,
};

const defaultBoxShadow = {
  border: generics.defaultBorder,
  borderRadius: generics.borderRadius,
  transition: generics.transitions,
};

// Calculator Functions
const calcShadow = (shadowcolor = colors.black) => (opacity = transparencies.half) =>
  `rgba(${shadowcolor
    .rgb()
    .array()
    .join(',')}, ${opacity})`;

// TODO - setup Hues
const calcRadialGradient = (start = colors.grey, end = colors.grey) =>
  `radial-gradient(ellipse at center,${start} 0,${end} 100%)`;

// setters
const boxShadows = {
  default: {
    x: 0,
    y: 5,
    blur: 20,
    spread: -15,
    color: calcShadow()(),
  },
  card: {
    x: 0,
    y: 1,
    blur: 4,
    spread: 0,
    color: calcShadow()(transparencies.mlight),
  },
};

let palette = ['primary', 'secondary', 'warning', 'danger', 'info', 'facebook', 'google'];

// const colorsHex = Object.entries(colors)
//   .map(([color, obj]) => ({ [color]: obj.hex() }))
//   .reduce((obj, item) => {
//     obj[item.id] = item;
//     return obj;
//   }, {});
const colorsHex = colors;
const spectrum = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const generateColorSpectrum = withColor => {
  console.log(withColor);
  const obj = { [withColor]: spectrum.map(hue => ({ [hue]: colors[withColor].rgb() })) }; // todo - generate the shades using the color package
  return obj;
};
const generateColorMatrix = () => palette.map(c => generateColorSpectrum(c));
// const colorMatrix = [...generateColorSpectrum('primary')];
const colorMatrix = generateColorSpectrum('primary');
// const colorMatrix = [];
export const flux = {
  typeface: {
    global: typography.global.fontFamily,
    primary: {
      fontFamily: typography.global.fontFamily,
      fontWeight: 800,
      lineHeight: '1.4em',
    },
    secondary: {
      fontFamily: altFontFamily,
      fontWeight: 400,
    },
    colors: {
      primary: generateColorSpectrum('primary'),
      secondary: generateColorSpectrum('secondary'),
      facebook: generateColorSpectrum('facebook'),
      google: generateColorSpectrum('google'),
    },
    body: {
      fontFamily: typography.global.fontFamily,
    },
  },
  colors: colorMatrix,
  base: {
    boxShadows,
    generics,
    transparencies,
    colors,
    colorsHex,
    defaultBoxShadow,
    typography,
  },
};
console.log(JSON.stringify(colorMatrix));

export default flux;
// export default {
//   boxShadows,
//   generics,
//   transparencies,
//   colors,
//   colorsHex,
//   defaultBoxShadow,
//   typography,
// };

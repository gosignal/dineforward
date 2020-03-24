import { Theme } from 'styled-system';

interface IStyledTheme extends Theme {
  width: number[];
  heights: number[];
  maxWidths: number[];
  colors: { [key: string]: any };
  breakpoints: { [key: string]: any };
  shadows: { [key: string]: any };
  buttonSizes: { [key: string]: any };
  buttonColors?: { [key: string]: any };
}

const theme: IStyledTheme = {
  breakpoints: ['40em', '52em', '64em', '80em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
  },
  borders: [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'],
  radii: [0, 2, 4, 16, 9999, '100%'],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    bg: '#1F2833',
    secondary: '#45A29E',
    primary: '#66FCF1',
    black: '#000',
    font: '#C5C6C7',
    'near-black': '#111',
    'dark-gray': '#333',
    'mid-gray': '#555',
    gray: ' #777',
    silver: '#999',
    'light-silver': '#aaa',
    'moon-gray': '#ccc',
    'light-gray': '#eee',
    'near-white': '#f4f4f4',
    error: '#EE4C7C',
    white: '#fff',
    transparent: 'transparent',
    blacks: [
      'rgba(0,0,0,.0125)',
      'rgba(0,0,0,.025)',
      'rgba(0,0,0,.05)',
      'rgba(0,0,0,.1)',
      'rgba(0,0,0,.2)',
      'rgba(0,0,0,.3)',
      'rgba(0,0,0,.4)',
      'rgba(0,0,0,.5)',
      'rgba(0,0,0,.6)',
      'rgba(0,0,0,.7)',
      'rgba(0,0,0,.8)',
      'rgba(0,0,0,.9)',
    ],
    whites: [
      'rgba(255,255,255,.0125)',
      'rgba(255,255,255,.025)',
      'rgba(255,255,255,.05)',
      'rgba(255,255,255,.1)',
      'rgba(255,255,255,.2)',
      'rgba(255,255,255,.3)',
      'rgba(255,255,255,.4)',
      'rgba(255,255,255,.5)',
      'rgba(255,255,255,.6)',
      'rgba(255,255,255,.7)',
      'rgba(255,255,255,.8)',
      'rgba(255,255,255,.9)',
    ],
    // ... and so on
  },
  shadows: {
    main: `0px 8px 19px rgba(69, 162, 158, 0.335626)`,
  },
  buttonSizes: {
    xs: `
      height: 16px;
      padding: 0 16px;
      font-size: 10px;
    `,
    sm: `
      height: 24px;
      padding: 0 24px;
      font-size: 13px;
    `,
    md: `
      height: 34px;
      padding: 0 34px;
      font-size: 14px;
      letter-spacing: 0.4px;
    `,
    lg: `
      height: 56px;
      padding: 0 56px;
      font-size: 20px;
    `,
    default: `
      height: 24px;
      padding: 0 30px;
      font-size: 13px;
    `,
  },
  // buttonColors: {
  //   green: `
  //     background-color: #a2d628;
  //     color: ${colorToRgba("#a2d628", 0.5)};
  //   `,
  //   blue: `
  //     background-color: #507bfc;
  //     color: ${colorToRgba("#507bfc", 0.5)};
  //   `,
  //   lightBlue: `
  //     background-color: #10aee7;
  //     color: ${colorToRgba("#10aee7", 0.5)};
  //   `,
  //   default: `
  //     background-color: #cccccc;
  //     color: ${colorToRgba("#cccccc", 0.5)};
  //   `
  // }
};

// aliases
theme.breakpoints.sm = theme.breakpoints[0];
theme.breakpoints.md = theme.breakpoints[1];
theme.breakpoints.lg = theme.breakpoints[2];
theme.breakpoints.xl = theme.breakpoints[3];

export default theme;

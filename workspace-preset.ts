/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const defaultColors = {
  primary: {
    100: '#F3F7F7',
    200: '#EFF7F7',
    300: '#E0F0F0',
    400: '#C1E3E1',
    500: '#8FCBC8',
    600: '#8DB6B4',
    700: '#5C9C99',
    800: '#377774',
    900: '#1A5C59',
    950: '#114845',
  },
  secondary: {
    100: '#FFF9EB',
    200: '#FFF4D6',
    300: '#FFEEC2',
    400: '#FFE8AD',
    500: '#FFE399',
    600: '#FFDD84',
    700: '#FFD15B',
    800: '#FFCC47',
    900: '#FFC632',
  },
  success: {
    100: '#E7F6ED',
    200: '#BBFCD5',
    300: '#A9F1C6',
    400: '#99E3B7',
    500: '#82DBA5',
    600: '#58D188',
    700: '#42B972',
    800: '#409B65',
    900: '#218549',
  },
  danger: {
    100: '#FDF3F3',
    200: '#FAD9D9',
    300: '#F8C5C5',
    400: '#F5B2B2',
    500: '#EE7979',
    600: '#EC6565',
    700: '#E95252',
    800: '#E73F3F',
    900: '#AF2828',
  },
  info: {
    100: '#EEF5FF',
    200: '#E3EBF8',
    300: '#C6DAF9',
    400: '#B4CFF7',
    500: '#A2C4F5',
    600: '#91B8F3',
    700: '#7FADF1',
    800: '#6DA2EF',
    900: '#4A8BEB',
  },
  warning: {
    100: '#F9F5EA',
    200: '#FFF3D8',
    300: '#FFEDBE',
    400: '#FFE398',
    500: '#FFD567',
    600: '#FFCC47',
    700: '#FFBA05',
    800: '#F1B005',
    900: '#D79C00',
  },
  dark: {
    100: '#686868',
    200: '#414B4B',
    300: '#4B4B4B',
    400: '#414141',
    500: '#373737',
    600: '#2D2D2D',
    700: '#242424',
    800: '#1A1A1A',
    900: '#101010',
  },
  gray: {
    100: '#F3F3F3',
    200: '#E7E7E7',
    300: '#DADADA',
    400: '#CFCFCF',
    500: '#C3C3C3',
    600: '#B7B7B7',
    700: '#9F9F9F',
    800: '#878787',
    900: '#6B6B6B',
  },
  neutral: {
    1: '#ffffff',
    2: '#fcfcfc',
    3: '#f5f5f5',
    4: '#f0f0f0',
    5: '#d9d9d9',
    6: '#bfbfbf',
    7: '#8c8c8c',
    8: '#595959',
    9: '#454545',
    10: '#262626',
    11: '#1f1f1f',
    12: '#141414',
    13: '#000000',
  },
  blue: {
    1: '#eff7fc',
    2: '#d9edf7',
    3: '#bbdef0',
    4: '#9bceea',
    5: '#7dc0e3',
    6: '#61b2dd',
    7: '#5297bc',
    8: '#457e9d',
    9: '#37657e',
    10: '#2c5063',
  },
  darkBlue: {
    1: '#e6eef7',
    2: '#c2d5ed',
    3: '#91b4de',
    4: '#5e91cf',
    5: '#2e70c1',
    6: '#0050b3',
    7: '#004498',
    8: '#00397f',
    9: '#002e66',
    10: '#002451',
  },
  yellow: {
    1: '#fbf8ed',
    2: '#f4edd3',
    3: '#ece0b0',
    4: '#e3d18b',
    5: '#dbc368',
    6: '#d3b647',
    7: '#b39b3c',
    8: '#968132',
    9: '#786828',
    10: '#5f5220',
  },
  red: {
    1: '#fce6ea',
    2: '#f8c4cd',
    3: '#f295a6',
    4: '#eb647d',
    5: '#e63555',
    // 6: '#e00930',
    6: '#91B8F3',
    600: '#91B8F3',
    7: '#be0829',
    8: '#9f0622',
    9: '#80051b',
    10: '#650416',
  },
  orange: {
    1: '#fff4e6',
    2: '#ffe3c2',
    3: '#ffce91',
    4: '#ffb75e',
    5: '#ffa12e',
    6: '#ff8c00',
    7: '#d97700',
    8: '#b56300',
    9: '#915000',
    10: '#733f00',
  },
  green: {
    1: '#f4fae6',
    2: '#e4f3c3',
    3: '#ceea93',
    4: '#b7e060',
    5: '#a2d630',
    6: '#8dcd03',
    7: '#78ae03',
    8: '#649202',
    9: '#507502',
    10: '#3f5c01',
  },
};

const theme = {
  content: [],
  theme: {
    extend: {
      borderRadius: {
        xs: '0.25rem', //4px
        sm: '0.375rem', //6px
        m: '0.5rem', //8px
        md: '0.625rem', //10px
        base: '0.75rem', //12px
        lg: '0.875rem', //14px
        xl: '1rem', //16px
        '2xl': '1.125rem', //18px
        '3xl': '1.25rem', //20px
        '4xl': '1.375rem', //22px
        '5xl': '1.5rem', //24px
        '6xl': '1.625rem', //26px
        '7xl': '1.75rem', //28px
        '8xl': '1.875rem', //30px
        '9xl': '2rem', //20px
      },
      boxShadow: {
        button:
          'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
        'button-hover':
          'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
        'button-active':
          'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 5px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 10px 2px',
        box4: ' 0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        ...defaultColors,
        'primary-main': defaultColors.primary[900],
        'primary-hover': defaultColors.primary[900],
        'primary-active': defaultColors.primary[950],
        'primary-disabled': defaultColors.gray[300],
        'secondary-main': defaultColors.secondary[900],
        'secondary-hover': defaultColors.secondary[900],
        'secondary-active': defaultColors.secondary[900],
        'secondary-disabled': defaultColors.gray[300],
      },
      fontSize: {
        sm: '0.625rem', //10px
        m: '0.75rem', //12px
        ml: '0.875rem', //14px
        base: '1rem', //16px
        xl: '1.125rem', //18px
        '2xl': '1.25rem', //20px
        '3xl': '1.375rem', //22px
        '4xl': '24px', //24px
        '5xl': '1.625rem', //26px
        '6xl': '1.75rem', //28px
        '7xl': '1.875rem', //30px
        '8xl': '2rem', //32px
        '9xl': '2.25rem', //36px
      },
      fontFamily: {
        sans: ['poppins', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7: '1.75rem',
        7.5: '1.875rem',
        14: '3.5rem',
        14.5: '3.625rem',
        15: '3.75rem',
        18: '4.5rem',
        30: '7.5rem',
        35: '8.75rem',
        50: '12.5rem',
      },
      zIndex: {
        100: '100',
        999: '999',
        1000: '1000',
        9999: '9999',
        10000: '10000',
        99999: '99999',
      },
      lineHeight: {
        6.9: '1.6875rem',
        7.5: '1.875rem',
        11: '2.75rem',
        12: '3rem',
      },
      maxWidth: {
        box: 'var(--box-max-width)',
      },
      backgroundImage: {
        'hero-train': 'var(--hero-train-src)',
        'hero-mobile': 'var(--hero-mobile-src)',
        'hero-tour': 'var(--hero-tour-src)',
        'hero-hotel': 'var(--hero-hotel-src)',
      },
    },
  },
  plugins: [
    // require('tailwindcss-3d'),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        '.dashed-stroke1': {
          background: `linear-gradient(
              to left,
              transparent,
              transparent 50%,
              #fff 50%,
              #fff 100%
          ),
          linear-gradient(
              180deg,
              theme('colors.gray.200'),
              theme('colors.gray.200'),
              theme('colors.gray.200'),
              theme('colors.gray.200'),
              theme('colors.gray.200')
          )`,
        },
        '.shadow-box': {
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.15)',
        },
      });
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};

export default theme;

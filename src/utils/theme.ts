import { createTheme } from '@mui/material/styles';

interface CustomTheme {
  authForm: {
    buttonGradient: string;
    validationError: string;
    title: string;
    whiteColorText: string;
    grayColorText: string;
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    custom: CustomTheme;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom: CustomTheme;
  }
}

const theme = createTheme({
  custom: {
    authForm: {
      title: '#244A71',
      buttonGradient:
        'radial-gradient(50% 267.38% at 50% 50%, #000924 0%, #6D89BB 100%)',
      validationError: '#FF0000',
      whiteColorText: '#FFFFFF',
      grayColorText: '#979797',
    },
  },
});

export default theme;

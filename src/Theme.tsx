import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

export const Theme = ({ children }: PropsWithChildren) => {
  const theme = {
    colors: {
      primaryText: '#404040',
      white: '#ffffff',
      backgroundColor: '#F5F5F5',
      secondaryBackground: '#ffffff',
      primaryGrey: '#404040',
      lightGrey: '#979797',
      primaryBlue: '#0F1029',
      lightBlue: '#EBEDF3',
      lines: '#DBDEEB',
      green: '#40B44C',
      lightGreen: '#BFEBC4',
      greenNeon: '#62DC6F',
      yellow: '#FFCE64',
      red: '#FF5C00',
      darkRed: '#FF0000',
      orange: '#F97C4D',
    },
    fonts: ['Inter', 'Poppins'],
    fontSizes: {},
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

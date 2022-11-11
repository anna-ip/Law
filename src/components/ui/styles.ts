import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const text = '#404040';
export const primaryText = '#404040'; //theme
export const textBlack = '#0F1029';
export const backgroundColor = '#F5F5F5'; //theme
export const secondaryBackground = '#ffffff'; //theme
export const primaryGrey = '#404040'; //theme
export const softGrey = '#EBEDF3';

export const lightGrey = '#979797'; //theme?
export const primaryBlue = '#0F1029'; //theme

export const lightBlue = '#EBEDF3'; //theme
export const lines = '#DBDEEB'; //theme

export const black = '#000000';
export const white = '#ffffff';
export const softBlack = '#0F1029';

export const lightGreen = '#BFEBC4'; //theme map

export const green = '#40B44C'; //theme
export const greenNeon = '#62DC6F'; //theme
export const yellow = '#FFCE64'; //theme
export const red = '#FF5C00';
export const orange = '#F97C4D'; //theme
export const darkRed = '#FF0000'; //theme

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${backgroundColor};
    font-family: 'Inter';
    font-weight: 500;
  }
`;

export const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  line-height: 54px;
  color: ${textBlack};
  margin: 0;
`;

export const DottedLine = styled.div`
  width: 100%;
  border: 0.5px dashed #ebeef7;
`;

export const DottedFrame = styled.div`
  border: 1px dashed ${lines};
  border-radius: 12px;
  padding: 31px 20px 20px 20px;
  margin-bottom: 22px;
`;

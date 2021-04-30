/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx, css, useTheme } from '@emotion/react';
import React from 'react';
import { Global } from '@emotion/react';
import { ThemeProps } from '../contexts/ThemeContext';

const GlobalStyles = () => {
  const theme = useTheme() as ThemeProps;
  return (
    <Global
      styles={css`
        body {
          background-color: ${theme.colors.primary};
        }
      `}
    />
  );
};

export default GlobalStyles;

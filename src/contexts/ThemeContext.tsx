/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx, ThemeProvider } from '@emotion/react';
import { createContext, FC, ReactNode, useState } from 'react';

type TThemeContextProvider = FC<{ children: ReactNode }>;
export interface ThemeProps {
  colors: { primary: string; secondary: string };
}
type ThemeState = 'light' | 'dark';

interface TThemeContext {
  theme: ThemeState;
  setTheme: (val: ThemeState) => void;
}
export const ThemeContext = createContext<TThemeContext>(null);

const lightTheme: ThemeProps = {
  colors: {
    primary: 'white',
    secondary: 'black',
  },
};
const darkTheme: ThemeProps = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
};

export const ThemeContextProvider: TThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState<ThemeState>('light');
  console.log(theme);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;

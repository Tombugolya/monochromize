/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { ThemeProps } from '../../contexts/ThemeContext';
import { FC } from 'react';

const Title: FC = () => {
  const theme = useTheme() as ThemeProps;
  return (
    <h1>
      <span
        css={{
          color: theme.colors.secondary,
          backgroundColor: theme.colors.primary,
        }}
      >
        _Monochro
      </span>
      <span
        css={{
          color: theme.colors.primary,
          backgroundColor: theme.colors.secondary,
        }}
      >
        mize
      </span>
    </h1>
  );
};

export default Title;

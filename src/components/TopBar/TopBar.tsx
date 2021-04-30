/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import { FC } from 'react';
import Title from './Title';
import ThemeSwitch from './ThemeSwitch';

const TopBar: FC = () => {
  return (
    <div
      css={{ display: 'flex', justifyContent: 'space-between', margin: '2%' }}
    >
      <Title />
      <ThemeSwitch />
    </div>
  );
};

export default TopBar;

/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import { FC } from 'react';
import FormGroup from './Form/FormGroup';
import TopBar from './TopBar/TopBar';
import Content from './Content/Content';
import GlobalStyles from './GlobalStyles';

interface Properties {
  imageSource?: string;
  fields?: string[];
}
type TMonochromize = FC<Properties>;

const Monochromize: TMonochromize = () => {
  return (
    <div>
      <GlobalStyles />
      <TopBar />
      <FormGroup />
      <Content />
    </div>
  );
};

export default Monochromize;

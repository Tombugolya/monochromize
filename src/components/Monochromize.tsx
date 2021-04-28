import { FC } from 'react';
import FormGroup from './Form/FormGroup';
import Title from './Title';
import Content from './Content/Content';

interface Properties {
  imageSource?: string;
  fields?: string[];
}
type TMonochromize = FC<Properties>;

const Monochromize: TMonochromize = () => {
  return (
    <div>
      <Title />
      <FormGroup />
      <Content />
    </div>
  );
};

export default Monochromize;

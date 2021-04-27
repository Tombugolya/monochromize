import { FC, useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import FormGroup from './Form/FormGroup';
import Title from './Title';
import Gallery from './Gallery/Gallery';

interface Properties {
  imageSource?: string;
  fields?: string[];
}
type TMonochromize = FC<Properties>;

const Monochromize: TMonochromize = ({ fields = ['artist', 'album'] }) => {
  const { data } = useContext(DataContext);
  return (
    <div>
      <Title />
      <FormGroup fields={fields} />
      <Gallery imageSource={data.imageSource} />
    </div>
  );
};

export default Monochromize;

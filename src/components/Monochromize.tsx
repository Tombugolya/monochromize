import { FC } from 'react';
import FormGroup from './Form/FormGroup';
import Title from './Title';
import Gallery from './Gallery/Gallery';

interface Properties {
  imageSource?: string;
  fields?: string[];
}
type TMonochromize = FC<Properties>;

const Monochromize: TMonochromize = ({
  fields = ['artist', 'album'],
  imageSource = 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
}) => {
  return (
    <div>
      <Title />
      <FormGroup fields={fields} />
      <Gallery imageSource={imageSource} />
    </div>
  );
};

export default Monochromize;

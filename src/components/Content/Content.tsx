import { Row } from 'react-bootstrap';

import Gallery from './Gallery';
import TextBox from './TextBox';

const Content = () => {
  return (
    <Row style={{ margin: 0 }}>
      <TextBox val={'albumName'} />
      <Gallery />
      <TextBox val={'albumDescription'} />
    </Row>
  );
};

export default Content;

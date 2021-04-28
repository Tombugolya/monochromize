import React, { memo, useContext } from 'react';
import { Carousel, Col } from 'react-bootstrap';
import { DataContext } from '../../contexts/DataContext';

const Gallery = () => {
  const { data } = useContext(DataContext);

  return (
    <Col>
      <div id="carousel">
        <Carousel id="carousel-slides" controls={false}>
          <Carousel.Item>
            <img
              id="album-img"
              className="d-block w-100"
              src={data.imageSource}
              alt="Monochromized album art"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Col>
  );
};

export default memo(Gallery);

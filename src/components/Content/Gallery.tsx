/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import React, { memo, useContext } from 'react';
import { Carousel, Col } from 'react-bootstrap';
import { DataContext } from '../../contexts/DataContext';

const Gallery = () => {
  const { data } = useContext(DataContext);

  return (
    <Col>
      <div id="carousel">
        <Carousel
          id="carousel-slides"
          css={{ width: '80%', margin: '2% auto' }}
          controls={false}
        >
          <Carousel.Item>
            <img
              css={{ filter: 'grayscale(100%)' }}
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

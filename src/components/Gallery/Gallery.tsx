import React, { FC } from 'react';
import { Carousel } from 'react-bootstrap';

type TGallery = FC<{ imageSource: string }>;

const Gallery: TGallery = ({ imageSource }) => {
  return (
    <div id="carousel">
      <Carousel id="carousel-slides" controls={false}>
        <Carousel.Item>
          <img
            id="album-img"
            className="d-block w-100"
            src={imageSource}
            alt="Monochromized album art"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Gallery;

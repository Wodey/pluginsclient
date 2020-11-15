import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="../Images/carousel/s1.jpg" />
          <Carousel.Caption>
            <h3 className="c-white">New Plugins</h3>
            <p>FLkeys and 808Kik is available now</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Clean Sound</h3>
          <p>Check by yourself</p>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

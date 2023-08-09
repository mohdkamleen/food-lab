import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../css/components/Banner.css'

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h1> Emprowing Society through Scince </h1>
          <p>Food Lab is one point solution for all food safety needs</p>
          <Button variant='success'> Get Started</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h1> Emprowing Society through Scince </h1>
          <p>Food Lab is one point solution for all food safety needs</p>
          <Button variant='success'> Get Started</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h1> Emprowing Society through Scince </h1>
          <p>Food Lab is one point solution for all food safety needs</p>
          <Button variant='success'> Get Started</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
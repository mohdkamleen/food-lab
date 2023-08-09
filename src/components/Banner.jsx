import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../css/components/Banner.css'

function Banner() {
  return (
    <Carousel>
    <Carousel.Item>  
        <h1 className='banner-title'> Emprowing Society through Scince </h1>
        <p className='banner-desc'>Food Lab is one point solution for all food safety needs</p>
        <Button className='banner-btn' variant='success'> Get Started</Button> 
    </Carousel.Item> 
      <Carousel.Item>  
          <h1 className='banner-title'> Emprowing Society through Scince </h1>
          <p className='banner-desc'>Food Lab is one point solution for all food safety needs</p>
          <Button className='banner-btn' variant='success'> Get Started</Button> 
      </Carousel.Item> 
      <Carousel.Item>  
          <h1 className='banner-title'> Emprowing Society through Scince </h1>
          <p className='banner-desc'>Food Lab is one point solution for all food safety needs</p>
          <Button className='banner-btn' variant='success'> Get Started</Button> 
      </Carousel.Item> 
    </Carousel>
  );
}

export default Banner;
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from '../../../assets/card.jpg';
import { Carousel } from 'react-bootstrap';


export default function WhyGeorgiaTemplate() {
    
  return (
    <>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color:'black'}}>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}


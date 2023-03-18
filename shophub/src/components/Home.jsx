import React from 'react';
import slider_1 from '../assets/images/slider1.png';
import slider_2 from '../assets/images/slider2.png';
import slider_3 from '../assets/images/slider3.png';
import Products from './Products';

const Home = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide sliders">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider_1} className="d-block w-100 "  alt="slider1"/>
    </div>
    <div className="carousel-item">
      <img src={slider_2} className="d-block w-100" alt="slider2"/>
    </div>
    <div className="carousel-item">
      <img src={slider_3} className="d-block w-100" alt="silder3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Products/>
    </div>
  )
}

export default Home

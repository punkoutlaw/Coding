import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const Maincarousel = () => {
    
  return (
    <Container fluid className="main-carousel" id="sub-main">
    <Carousel>
        <Carousel.Item className='item'>
            <div className="work">
                <div className="img d-flex align-items-center justify-content-center rounded" style={{backgroundImage: "url(/images/port3.jpg)"}}>
                    <a href="#" className="icon d-flex align-items-center justify-content-center">
                        <span className="ion-ios-search"></span>
                    </a>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="work">
                <div className="img d-flex align-items-center justify-content-center rounded">
                <img src="/images/cam3.jpg" alt="First slide"/>
                    <a href="#" className="icon d-flex align-items-center justify-content-center">
                        <span className="ion-ios-search"></span>
                    </a>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="work">
                <div className="img d-flex align-items-center justify-content-center rounded">
                <img src="/images/port8.jpg" alt="First slide"/>
                    <a href="#" className="icon d-flex align-items-center justify-content-center">
                        <span className="ion-ios-search"></span>
                    </a>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="work">
                <div className="img d-flex align-items-center justify-content-center rounded">
                <img src="/images/port1.jpg" alt="First slide"/>
                    <a href="#" className="icon d-flex align-items-center justify-content-center">
                        <span className="ion-ios-search"></span>
                    </a>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="work">
                <div className="img d-flex align-items-center justify-content-center rounded">
                <img src="/images/port2.jpg" alt="First slide"/>
                    <a href="#" className="icon d-flex align-items-center justify-content-center">
                        <span className="ion-ios-search"></span>
                    </a>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="work">
                <div className="img d-flex align-items-center justify-content-center rounded">
                <img src="/images/port7.jpg" alt="First slide"/>
                    <a href="#" className="icon d-flex align-items-center justify-content-center">
                        <span className="ion-ios-search"></span>
                    </a>
                </div>
            </div>
        </Carousel.Item>
    </Carousel>
</Container>
  )
}

export default Maincarousel
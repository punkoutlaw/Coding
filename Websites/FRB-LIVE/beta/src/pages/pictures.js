import React from "react";
import Card from 'react-bootstrap/Card';
import { Carousel } from "react-bootstrap";

const Pictures = () => {
    return (

      <div id="pictures" className="container">
    
      <Card className="div3">

      <Card.Header className="headers">
        <h2>Pictures</h2>
      </Card.Header>

      <Card.Body>
  
       <br/>
  
        <div className="row">
          <Card.Title>
            <h3>Gallery <i className="bi bi-images"></i></h3>
          </Card.Title>
  
          <br/>
          <br/>
  
          <div className="col" id="gallery">
            <div className="row">
                  
                <Carousel>

                  <Carousel.Item>
                    <img src="./Images/Feudale-figures.png" className="gallery-image" alt="FEUDALE LOGO"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="./Images/DAVE.jpg" className="gallery-image" alt="DAVE"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="./Images/BRY.jpg" className="gallery-image" alt="BRY"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="./Images/MIKE.jpg" className="gallery-image" alt="MIKE"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="./Images/EPK1.jpg" className="gallery-image" alt="BAND"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="./Images/EPK2.jpg" className="gallery-image" alt="BAND"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="./Images/FEUDALE_gallery.jpg" className="gallery-image" alt="BAND"/>
                  </Carousel.Item>
                  
                </Carousel>

            </div>
          </div>

  
        </div>

        <br/>
  
        <div className="row">
          <div className="col">
  
            <br/>
        
            <div className="card-subtitle">
              <h3>On Instagram <i className="bi bi-instagram"></i></h3>
            </div>
  
            <br/>
  
            <div id="instagram-feed1" className="instagram_feed"></div>
              
            <br/>
  
          </div>
  
        </div>

      </Card.Body>
  
    </Card>
  
    </div>
  
      
    )
  };
  
  export default Pictures;
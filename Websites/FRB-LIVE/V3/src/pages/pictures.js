import React from "react";
import { Carousel, Card } from "react-bootstrap";
import Instafeed from "../components/instafeed";

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
                    <img src="./Images/GAL1.png" className="gallery-image" alt="FEUDALE LOGO"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="./Images/GAL2.jpg" className="gallery-image" alt="DAVE"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="./Images/GAL3.jpg" className="gallery-image" alt="BRY"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="./Images/GAL4.jpg" className="gallery-image" alt="MIKE"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="./Images/GAL5.jpg" className="gallery-image" alt="BAND"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="./Images/GAL6.jpg" className="gallery-image" alt="BAND"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="./Images/GAL7.jpg" className="gallery-image" alt="BAND"/>
                  </Carousel.Item>
                  
                </Carousel>

            </div>
          </div>

  
        </div>

        <br/>
  
        {/* <div className="row">
          <div className="col">
  
            <br/>
        
            <div className="card-subtitle">
              <h3>On Instagram <i className="bi bi-instagram"></i></h3>
            </div>
  
            <br/>
  
            <Instafeed />
              
            <br/>
  
          </div>
  
        </div> */}

      </Card.Body>
  
    </Card>
  
    </div>
  
      
    )
  };
  
  export default Pictures;
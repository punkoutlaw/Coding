import React from "react";
import Card from 'react-bootstrap/Card';

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
  
          <div className="col" id="gallery">
            <div className="row">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="./Images/Feudale-figures.png" className="gallery-image" alt="FEUDALE LOGO"/>
                    </div>
                    <div className="carousel-item">
                      <img src="./Images/DAVE.jpg" className="gallery-image" alt="DAVE"/>
                    </div>
                    <div className="carousel-item">
                      <img src="./Images/BRY.jpg" className="gallery-image" alt="BRY"/>
                    </div>
                    <div className="carousel-item">
                      <img src="./Images/MIKE.jpg" className="gallery-image" alt="MIKE"/>
                    </div>
                    <div className="carousel-item">
                      <img src="./Images/EPK1.jpg" className="gallery-image" alt="BAND"/>
                    </div>
                    <div className="carousel-item">
                      <img src="./Images/EPK2.jpg" className="gallery-image" alt="BAND"/>
                    </div>
                    <div className="carousel-item">
                      <img src="./Images/FEUDALE_gallery.jpg" className="gallery-image" alt="BAND"/>
                    </div>
                  </div>
                  <br/>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
              </div>
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
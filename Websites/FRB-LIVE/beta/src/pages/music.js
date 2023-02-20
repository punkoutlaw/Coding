import React, { useState } from 'react';
import { Card, Collapse, Row, Col, Button } from 'react-bootstrap';
import Iframe from 'react-iframe';


const Music = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (

    <div id="music" className="container">

    <Card className='div3'>

    <Card.Header className='headers'>
      <h2>Music</h2>
    </Card.Header>
    
    <Card.Body>

      <div className='row'>
        <div className='col'>
          <div className='header'><h3>Singles <i class="bi bi-music-note"></i></h3></div>
        </div>
      </div>

      <Row>
        <Col>
          <Card className='albumcard'>
            <Card.Img variant="top" className='albumart' src="./Images/itsalright-artwork.png" style={{width:"300px", height:"300px"}}/>
              <br/>
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className='album-buttons'
                        >
                  <label className='labeltitle'>It's Alright <i className='bi bi-info-circle'></i></label>
                </Button>
                <div style={{ minHeight: '150px' }} className='albumcollapse'>
                  <Collapse in={open} dimension="width">
                    <div id="collapse-text">
                      <Card body style={{ width: '500px' }} className="album-collapse-text">
                      "In these trying times "It's Alright " is a rock & roll anthem of the era! Through all of the ups and down, we wanted to send a message to the world that whatever life is throwing your way -  in the end - IT'S ALRIGHT!" -FEUDALE
                      </Card>
                    </div>
                  </Collapse>
                </div>

            <Card.Footer className='albumfooter'>
              <small className="text-muted">Released: 10/16/2020</small>
            </Card.Footer>
          </Card>
        </Col>
        
        <Col>
          <Card className='albumcard'>
            <Card.Img variant="top" className='albumart' src="./Images/teenager-artwork.png" style={{width:"300px", height:"300px"}}/>
              <br/>
                <Button
                  onClick={() => setOpen2(!open2)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className='album-buttons'
                        >
                  <label className='labeltitle'>Teenager <i className='bi bi-info-circle'></i></label>
                </Button>
                <div style={{ minHeight: '150px' }} className='albumcollapse'>
                  <Collapse in={open2} dimension="width">
                    <div id="collapse-text">
                      <Card body style={{ width: '500px' }} className="album-collapse-text">
                        <p>
                        "We wrote “Teenager” based on our own experiences living and growing up in New Jersey. There was always something charming about hanging out down the shore and shopping (maybe getting kicked out) of the Freehold Raceway Mall. Or vibing in our bedroom listening to Pink Floyd and Nirvana.
                        <br/><br/>
                        When writing “Teenager”, we really wanted to encompass what it was like for us being teenagers. Our goal was to give our listeners a glimpse into our lives before becoming FEUDALE. It’s a song that will hopefully bring our listeners to a place in time that they will remember as magical, uncertain. And a ton of fun!” –FEUDALE
                        </p>
                      </Card>
                    </div>
                  </Collapse>
                </div>

            <Card.Footer className='albumfooter'>
              <small className="text-muted">Released: 11/29/2019</small>
            </Card.Footer>
          </Card>
        </Col>
    </Row>

    <br/>

      <div className='row'>
        <Card.Title>
          <h3>Playing on Spotify <i class="bi bi-spotify" id="spotify"></i></h3>
        </Card.Title>

        <br/>
        <br/>

        <div className='col'>

        <Iframe style={{borderRadius: '5px'}} src="https://open.spotify.com/embed/artist/1KP7hDx6P4JqRH7XRufgsK?utm_source=generator" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        id="music-player"
        title="spotify"></Iframe>

        </div>

      </div>

    </Card.Body>

    </Card>

    <br/>

    </div>

  )
}

export default Music
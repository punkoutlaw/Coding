import React from 'react';
import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import Iframe from 'react-iframe';

const Music = () => {
  return (

    <div id="music" className="container">

    <Card className='div3'>

    <Card.Header className='headers'>
      <h2>Music</h2>
    </Card.Header>
    
    <Card.Body>

      <br/>

      {/* <div className='row'>
        <div className='col'>
          <img src='./Images/itsalright-artwork.png' alt='Its Alright Album Art'/>
        </div>
        <div className='col'>
          <img src='./Images/teenager-artwork.png' alt='Its Alright Album Art'/>
        </div>
      </div> */}

      <Row>
        <Col>
          <Card className='albumcard'>
            <Card.Title className='albumtitle'><h3>It's Alright</h3></Card.Title>
            <Card.Img variant="top" className='albumart' src="./Images/itsalright-artwork.png" style={{width:"300px", height:"300px"}}/>
            <Card.Body>
              <Card.Text>
                <p>It's Alright performed by FEUDALE</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='albumfooter'>
              <small className="text-muted">Released: 10/16/2020</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='albumcard'>
          <Card.Title className='albumtitle'><h3>Teenager</h3></Card.Title>
            <Card.Img variant="top" className='albumart' src="./Images/teenager-artwork.png" style={{width:"300px", height:"300px"}}/>
            <Card.Body>
              <Card.Text>
                <p>Teenager performed by FEUDALE</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='albumfooter'>
              <small className="text-muted">Released: 11/29/2019</small>
            </Card.Footer>
          </Card>
        </Col>
    </Row>

    <br/>

      <div className='row'>
        <Card.Title>
          Now Playing on Spotify <i class="bi bi-spotify" id="spotify"></i>
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
import React from 'react';
import Card from 'react-bootstrap/Card';
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
import React from 'react';

const Cards = () => {
  return (

    <div id="cards" class="container">

    <div class="card-header headers">
      <h2>Music</h2>
    </div>
  
    <div class="card-body div3">

      <br/>

      <div class="row">
        <div class="card-subitle">
          Now Playing on Spotify <i class="bi bi-spotify" id="spotify"></i>
        </div>

        <br/>
        <br/>

        <div class="col">

        <iframe style="border-radius:5px" src="https://open.spotify.com/embed/artist/1KP7hDx6P4JqRH7XRufgsK?utm_source=generator" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        id="music-player"
        title="spotify"></iframe>

        </div>
          
      </div>
    </div>

    <br/>

  </div>

  )
}

export default Cards
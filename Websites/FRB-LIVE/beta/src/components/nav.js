import React from 'react';

const nav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="nav-logo">
                    <a class="navbar-brand" href="index.html"><img src="./Images/feudale-symbol-c.png" alt="FEUDALE" /></a>
                </div>
                <div class="nav-button">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <a class="nav-name" href="index.html">FEUDALE</a>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="music.html">Music</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pictures.html">Pictures</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="videos.html">Videos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    </ul>
                    <span class="navbar-text">
                    <b>NEW JERSEY'S PREMIERE ROCK BAND</b>
                    </span>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default nav
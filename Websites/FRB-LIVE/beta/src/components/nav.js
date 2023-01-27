import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <div className="nav-logo">
                    <Navbar.Brand href="index.html"><img src="images/feudale-symbol.png" alt="FEUDALE" />
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <a className="nav-name" href="index.html">FEUDALE</a>
                    <Nav className="me-auto">
                    <Nav.Link active href="index.html">
                        Home
                    </Nav.Link>
                    <Nav.Link href="music.html">
                        Music
                    </Nav.Link>
                    <Nav.Link href="pictures.html">
                        Pictures
                    </Nav.Link>
                    <Nav.Link href="videos.html">
                        Videos
                    </Nav.Link>
                    <Nav.Link href="contact.html">
                        Contact
                    </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                    <b>NEW JERSEY'S PREMIERE ROCK BAND</b>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default Navigation
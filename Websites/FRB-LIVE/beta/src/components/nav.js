import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router';

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
                    <Nav.Link to="/cards">
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
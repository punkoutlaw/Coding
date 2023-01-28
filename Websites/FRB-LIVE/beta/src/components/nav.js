import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <div className="nav-logo">
                    <Navbar.Brand href="/"><img src="images/feudale-symbol.png" alt="FEUDALE" />
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <a className="nav-name" href="/">FEUDALE</a>
                    <Nav className="me-auto">
                        <NavLink active to="/">
                            Home
                        </NavLink>
                        <NavLink to="/music">
                            Music
                        </NavLink>
                        <NavLink to="/pictures">
                            Pictures
                        </NavLink>
                        <NavLink to="/videos">
                            Videos
                        </NavLink>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
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
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    let activeStyle = {
        textDecoration: "underline",
        color: "rgb(204, 181, 65)",
      };

  return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <div className="nav-logo">
                    <Navbar.Brand href="/"><img src="Images/feudale-symbol-c.png" alt="FEUDALE" />
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <a className="nav-name" href="/">FEUDALE</a>
                    <Nav className="me-auto">
                        <NavLink to="/" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                            Home
                        </NavLink>
                        <NavLink to="/music" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                            Music
                        </NavLink>
                        <NavLink to="/pictures" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                            Pictures
                        </NavLink>
                        <NavLink to="/videos" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                            Videos
                        </NavLink>
                        <NavLink to="/contact" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
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
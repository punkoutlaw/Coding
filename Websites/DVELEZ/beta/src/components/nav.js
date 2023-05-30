import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
        <Nav className="navbar navbar-dark bg-dark navbar-expand-lg py-5">
            <Container fluid>
                <span className="nav-lt">Daniel Velez</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"     aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Media</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#sub-contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    </ul>
                </div>
            </Container>
        </Nav>
    </div>
  )
}

export default Navigation
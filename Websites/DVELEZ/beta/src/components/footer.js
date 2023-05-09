import React from 'react';

const Footer = () => {
  return (
    <div>
        <footer className="footer-07">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2 className="footer-heading"><a href="#" className="logo">Daniel Velez</a></h2>
                        <p className="menu">
                            <a href="#">Home</a>
                            <a href="#">Media</a>
                            <a href="#">Portfolio</a>
                            <a href="#">Contact</a>
                            <a href="#">About</a>
                        </p>
                        <ul className="ftco-footer-social p-0">
            <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter"></span></a></li>
            <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook"></span></a></li>
            <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram"></span></a></li>
            </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <p className="copyright">
                    Copyright &copy 2023; All rights reserved | Daniel Velez
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
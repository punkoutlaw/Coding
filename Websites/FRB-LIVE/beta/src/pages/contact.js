import React from "react";
import Card from 'react-bootstrap/Card';
import Form from '../components/form';

const Contact = () => {
    return (

      <div id="contact" className="container">

      <Card className="div3">

      <Card.Header className="headers">
        <h2>Contact</h2>
      </Card.Header>
      
      <Card.Body>
        <div className="row">
  
          <div className="col-6 contact-list" id="contact-icons">
  
            <br/>
  
            <ul className="li-form">
              <li><i className="bi bi-envelope-fill"></i> info@feudalerockband.com </li>
              <li><i className="bi bi-question-circle"></i> Send inquiries below <i className="bi bi-arrow-down"></i></li>
            </ul>
          </div>
  
          <div className="col-6 contact-photo">
            <br/>
            <img src="./Images/FEUDALE_contact.jpg" alt="BAND" id="contact-photo"/>
          </div>
  
        </div>
  
        <div className="row">
          <div className="col">

            <Form />

          </div>      
        </div>
    
      </Card.Body>
    </Card>

    </div>

    )
  };
  
  export default Contact;
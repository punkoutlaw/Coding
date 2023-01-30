import React from "react";
import Card from 'react-bootstrap/Card';

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
            <img src="./Images/FEUDALE_contact.jpg" alt="BAND PHOTO" id="contact-photo"/>
            
          </div>
  
        </div>
  
        <div className="row">
          <div className="col">
                    
            <form action="forms/contact.php"
              method="post"
              name="EmailForm"
              id="frb-form"
              onsubmit="alert('Thank you for contacting us! We will be in touch shortly.')">
  
                <div className="input-text" id="input-headers">
                    
                    <label for="name">Full Name</label>
                    <br/>
                    <input type="text" name="name" className="form-control" 
                      placeholder="Full name" required="required" />
                    <label for="email">Email Address</label>
                    <br/>
                    <input type="text" name="email" className="form-control" 
                      placeholder="Email address" required="required" />
            
                    <label for="subject">Subject</label>
                    <br/>
                    <input type="text" name="subject" className="form-control" 
                      placeholder="Enter a subject" required="required" />
          
                    <label for="message">Message</label>
                    <br/>
                    <textarea className="form-control" name="message" 
                      rows="4" placeholder="Your message" required="required"></textarea>
                    <br/>
  
                    <div className="g-recaptcha" data-sitekey="6LfRQywhAAAAADg-4BZVR4ROA0FDFkdMGv8XGhdM"></div>
  
                    <br/>
  
                    <button type="submit" 
                      value="submit"
                      className="btn btn-primary">
                      Submit
                    </button>
  
                </div>
  
            </form>
  
          </div>      
        </div>
    
      </Card.Body>
    </Card>

    </div>

    )
  };
  
  export default Contact;
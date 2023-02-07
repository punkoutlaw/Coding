import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Accordion from 'react-bootstrap/Accordion';

const Result = () => {
  return(
    <p>You have successfully subscribed!</p>
  );
};

const Mailing = () => {

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gbtxu0e', 'template_obmd2fm', e.target, '0D8ZXRHZo14Tuc3Xv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  return (
    <div id="subscribe" className="main">


    <Accordion flush>
      <Accordion.Item eventKey="0">

        <Accordion.Header> Subscribe to our mailing list! </Accordion.Header>

          <Accordion.Body>
          
            <form onSubmit={sendEmail}>

              <div className="col mx-auto">
                <input type="text" className="form-control" placeholder="Name" name="fullName" required />
                
                <br></br>

                <input type="text" className="form-control" placeholder="Email Address" name="email" required />

                <br></br>
                <br></br>

                <label>
                  <input type="checkbox" name="subscribe" value="Yes"/> Newsletter
                </label>
                <input type="submit" value="Subscribe" className="sub-button bg-primary" />

                <br />
                <br />

                <div className="row">
                  {result ? <Result /> : null} 
                </div>

              </div>

            </form>
          
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  </div>
  
  )
}

export default Mailing
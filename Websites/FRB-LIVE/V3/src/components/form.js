import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
  return(
    <p>Your message has been sent!</p>
  );
};

const Form = (props) => {

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gbtxu0e', 'template_tkkjhda', e.target, '0D8ZXRHZo14Tuc3Xv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };
  
  return (
    <form onSubmit={sendEmail} id="frb-form">

    <div className="input-text" id="input-headers">
        
        <label for="name">Full Name</label>
        <br/>
        <input type="text" name="fullName" className="form-control" 
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
        <input type="submit" value="Send" className='btn btn-primary'/>
        <br/>

        <div className="row confirmation">
          {result ? <Result /> : null} 
        </div>

    </div>

    </form>
  );

}

export default Form
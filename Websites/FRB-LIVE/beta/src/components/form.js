import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function verifyCallback(e) {
    alert(e);
    console.log(e);
}

const Form = () => {
  return (
    
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

          <ReCAPTCHA 
            sitekey='6LfRQywhAAAAADg-4BZVR4ROA0FDFkdMGv8XGhdM'
            data-theme='light'
            onChange={verifyCallback}/>

          <br/>

          <button type="submit" 
            value="submit"
            className="btn btn-primary">
            Submit
          </button>

      </div>

    </form>

  )
}

export default Form
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Mailing = () => {
  return (
    <div id="subscribe" className="main">


    <Accordion flush>
      <Accordion.Item eventKey="0">

        <Accordion.Header> Subscribe to our mailing list! </Accordion.Header>

          <Accordion.Body>
          
            <form 
              action="../forms/subscribe.php" 
              onsubmit="alert('Thank you for subscribing!')">

              <div className="col mx-auto">
                <input type="text" className="form-control" placeholder="Name" name="name" required />
                
                <br></br>

                <input type="text" className="form-control" placeholder="Email Address" name="email" required />

                <br></br>
                <br></br>

                <label>
                  <input type="checkbox" checked="checked" name="subscribe" /> Newsletter
                </label>
                <input type="submit" value="Subscribe" className="sub-button bg-primary" />
              </div>

            </form>
          
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  </div>
  
  )
}

export default Mailing
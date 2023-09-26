import React from "react";
import Card from 'react-bootstrap/Card';
import Iframe from 'react-iframe';

const Videos = () => {
    return (

      <div id="videos" className="container">

      <Card className="div3">

      <Card.Header className="headers">
        <h2>Videos</h2>
      </Card.Header>
      
        <Card.Body>

          <div className="row">
            <div className="col">
              <label><b>It's Alright</b>
                <br/>
                  <Iframe className="iframes" src="https://youtube.com/embed/XxONBMf0GMI" title="It's Alright">
                  </Iframe>
                </label>
            </div>
            <div className="col">
                <label><b>Teenager</b>
                <br/>
                  <Iframe className="iframes" src="https://youtube.com/embed/_zWJcNywMNg" title="Teenager">
                  </Iframe>
                </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label><b>It's Alright (LIVE)</b>
              <br/>
                <Iframe className="iframes" src="https://youtube.com/embed/u9iv1lul4Lo" title="It's Alright (LIVE)">
                </Iframe>
              </label>
            </div>
            <div className="col">
              <label><b>Wicked Garen (STP Cover)</b>
              <br/> 
                <Iframe className="iframes" src="https://youtube.com/embed/vsWYeXiJVMQ" title="Wicked Garden">
                </Iframe>
              </label>
            </div>
          </div>
        </Card.Body>

      </Card>

      </div>

    )
  };
  
  export default Videos;
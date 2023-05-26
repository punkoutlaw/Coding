import React from 'react';
import Maincarousel from '../components/maincarousel';

const home = () => {
  return (
        <div className="container-fluid" id='main'>
            <div className="row">
                <div className="col banner">
                    
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 p-5">
                    <h3>Let's make new memories <i className="bi bi-camera"></i></h3>
                    <br/>
                    If you are looking for a professional photographer to capture your special moments, you have come to the right place. I offer a range of photography services, from portraits and weddings to events and products. Whether you need a solo shoot or a group session, I can accommodate your needs and preferences.
                    <br/>
                    <br/>
                    I use high-quality equipment and software to ensure that your photos are crisp, clear and stunning. I also have a keen eye for detail and composition, and I can help you choose the best locations, poses and props for your photos. I will work with you to create a personalized package that suits your budget and expectations.
                    <br/>
                    <br/>
                    My photography services are not only about taking pictures, but also about creating memories. I strive to make every photo session fun, relaxed and enjoyable for you and your loved ones. I will listen to your ideas and feedback, and deliver the photos in a timely manner. You can trust me to handle your photos with care and professionalism.
                </div>
                <div className="col-lg-4 p-5">
                    <img src="images/cam8.jpg" alt="Cameras" className="divpics1"/>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Maincarousel/>
                </div>
            </div>
        </div>
  )
}

export default home
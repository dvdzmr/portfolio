import React from 'react';
import "./css/contact.css"
import Container from 'react-bootstrap/Container';


function Contact() {


  return (
    <Container id="contact" className='contactme'>
            <div className="row">
            <div className="col-lg-12 text-center">
                <h1>Contact Me</h1>
                <hr/>
            </div>
            </div>
            <div className="row contactform">
                <form action="https://formspree.io/f/mknllkkw" method="POST" name="sentMessage" id="contactForm">
                <div className="row control-group">
                    <div className="form-group floating-label-form-group controls">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Name" id="name" required
                        data-validation-required-message="Please enter your name."/>
                    <p className="help-block text-danger"></p>
                    </div>
                </div>
                <div className="row control-group">
                    <div className="form-group floating-label-form-group controls">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="_replyto" className="form-control" placeholder="Email Address" id="email" required
                        data-validation-required-message="Please enter your email address."/>
                    <p className="help-block text-danger"></p>
                    </div>
                </div>
                <div>
                    <input type="hidden" name="_subject" value="New submission!"/>
                    <input type="text" name="_gotcha" style={{"display":'none'}} />
                </div>
                <div className="row control-group">
                    <div className="form-group floating-label-form-group controls">
                    <label htmlFor="message">Message</label>
                    <textarea rows={5} name="message" className="form-control" placeholder="Message" id="message" required
                        data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                    </div>
                </div>
                <br></br>
                <div id="success"></div>
                <div className="row">
                    <div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg">Send</button>
                    </div>
                </div>
                </form>
            </div>
    </Container>
  );
}

export default Contact;
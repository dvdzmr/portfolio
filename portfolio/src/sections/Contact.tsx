import "./css/contact.css"
import Container from 'react-bootstrap/Container';
import {Button, Form} from "react-bootstrap";


export default function Contact() {

    return (
        <Container id="contact" className="contactme">
            <h1>Contact Me</h1>
            <hr/>

            <Form action="https://formspree.io/f/mknllkkw" method="POST" name="sentMessage" id="contactForm">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Name" name="name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Email Address" name="_replyto" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Message" name="message" required/>
                </Form.Group>
                <div>
                    <input type="hidden" name="_subject" value="New submission!"/>
                    <input type="text" name="_gotcha" style={{"display": 'none'}}/>
                </div>
                <Button variant="primary" type="submit">Send</Button>
            </Form>

        </Container>
    );
}
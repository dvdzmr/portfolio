import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "./css/portfolio.css"


// TODO: generate each col at compile time automatically, maybe load them from a .md file
function ResponsiveAutoExample() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container id="projects" className='Projects'>
        <h1>My Projects</h1>
        <Row className="Projects_row">

          <Col sm >
            <a className="d-block mb-4 h-100 mycontainer" onClick={handleShow}>
              <img className="img-fluid img-thumbnail image" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
              <div className="middle">
                <div className="text">Project #1</div>
              </div>
            </a>
          </Col>

          

          <Col sm >
            <a className="d-block mb-4 h-100 mycontainer" onClick={handleShow}>
              <img className="img-fluid img-thumbnail image" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
              <div className="middle">
                <div className="text">Project #2</div>
              </div>
            </a>
          </Col>


          <Col sm >
            <a className="d-block mb-4 h-100 mycontainer" onClick={handleShow}>
              <img className="img-fluid img-thumbnail image" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
              <div className="middle">
                <div className="text">Project #3</div>
              </div>
            </a>
            </Col>


        </Row>
      </Container>

    </>
  );
}





export default ResponsiveAutoExample;
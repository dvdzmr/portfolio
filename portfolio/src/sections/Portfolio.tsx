import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "./css/portfolio.css"

import {HashRouter, Route, Routes, NavLink} from "react-router-dom";


const routes = (
    <Routes>
      <Route path="/project_one" element={<ProjectOne />} />
      <Route path="/project_two" element={<ProjectTwo />} />
      <Route path="/project_three" element={<ProjectThree />} />
    </Routes>
)

function ProjectOne() {
  return <h1 style={{color: "white"}}>Project One info here</h1>
}
function ProjectTwo() {
  return <h1 style={{color: "white"}}>Project Two info here</h1>
}

function ProjectThree() {
  return <h1 style={{color: "white"}}>Project Three info here</h1>
}










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
            <a className="d-block mb-4 h-100 mycontainer" href="#project_one">
              <img className="img-fluid img-thumbnail image" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
              <div className="middle">
                <div className="text">Project #1</div>
              </div>
            </a>
          </Col>



          <Col sm >
            <a className="d-block mb-4 h-100 mycontainer" href="#project_two">
              <img className="img-fluid img-thumbnail image" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
              <div className="middle">
                <div className="text">Project #2</div>
              </div>
            </a>
          </Col>


          <Col sm >
            <a className="d-block mb-4 h-100 mycontainer" href="#project_three">
              <img className="img-fluid img-thumbnail image" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
              <div className="middle">
                <div className="text">Project #3</div>
              </div>
            </a>
            </Col>


        </Row>
      </Container>

      <HashRouter>
        {routes}
      </HashRouter>

    </>
  );
}





export default ResponsiveAutoExample;
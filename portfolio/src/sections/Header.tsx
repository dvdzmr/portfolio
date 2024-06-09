// import React from 'react';
import Offcanvas from "react-bootstrap/Offcanvas";
import "./css/header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Image from 'react-bootstrap/Image';

export default function Header() {
    const expand = "xl";
    return (
        <>
                <Navbar expand={expand} className="bg-body-tertiary mb-3 header-image">
                    <Container fluid>
                        {/*<Navbar.Brand href="/#home"><h1>David Zamir</h1></Navbar.Brand>*/}
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Sections
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/#projects">Projects</Nav.Link>
                                    <Nav.Link href="/#about">About me</Nav.Link>
                                    <Nav.Link href="/#contact">Contact</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
        </>
    );
}
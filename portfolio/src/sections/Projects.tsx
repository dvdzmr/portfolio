import "./css/projects.css"
import {SetStateAction, useEffect, useState} from "react";
import {Button, Col, Image, Modal, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {MobileView} from 'react-device-detect';

//TODO: simplify mobile/desktop view without code duplication.

export default function Projects() {
    const [projects, setProjects] = useState([{
        title: "placeholder",
        tagline: "placeholder",
        images: {cover: "./src/media/placeholder_project.png", detail: "./src/media/placeholder_project.png"},
        description: "placeholder"
    }])
    const projectUrl = "https://raw.githubusercontent.com/dvdzmr/portfolio-projects/main/projects.json"
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalDescription, setModalDescription] = useState("");
    const [modalDetailImage, setModalDetailImage] = useState("");
    const [showTagline, setShowTagline] = useState(99);
    const [gridOpacity, setGridOpacity] = useState(99);

    useEffect(() => {
        fetch(projectUrl)
            .then(res => res.json())
            .then((data) => {
                setProjects(data);
            })
    }, []);

    const showProject = (project: {
        title: SetStateAction<string>;
        description: SetStateAction<string>;
        images: { detail: SetStateAction<string>; };
    }) => {
        // console.log(project);
        setModalTitle(project.title);
        setModalDescription(project.description);
        setModalDetailImage(project.images.detail);
        setShowModal(true);
    }
    const handleClose = () => setShowModal(false);


    const handleHoverOn = (index: number) => {
        setShowTagline(index);
        setGridOpacity(index)
    }

    const handleHoverOff = () => {
        setShowTagline(99);
        setGridOpacity(99);
    }


    return (
        <Container id="projects" className="projects">
            <h1>Projects</h1>
            <hr/>
            <Modal
                show={showModal}
                onHide={handleClose}
                size="xl"
                fullscreen={'sm-down'}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-content">
                    <h5>{modalDescription}</h5>
                    <Image src={modalDetailImage} rounded fluid/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {projects.map((_item, index) => (
                    <div key={index}>
                        {index % 3 == 0 ?
                            <Row>
                                {index < Object.keys(projects).length ?
                                    <Col
                                        className="project-row"
                                        onMouseOver={() => {
                                            handleHoverOn(index)
                                        }}
                                        onMouseLeave={() => {
                                            handleHoverOff()
                                        }}
                                        onClick={() => showProject(projects[index])}
                                    >
                                        <Image
                                            style={{opacity: gridOpacity === index ? '0.5' : '1'}}
                                            className="project-grid"
                                            fluid
                                            src={projects[index].images.cover}
                                            rounded
                                        />
                                        {showTagline === index ?
                                            <div className="project-grid-text"><h1>{projects[index].title}</h1><br/>
                                                <h4>{projects[index].tagline}</h4></div> : null}
                                        <MobileView>
                                            <div className="project-grid-text mobile-text"><h1>{projects[index].title}</h1><br/>
                                                <h4>{projects[index].tagline}</h4></div>
                                        </MobileView>
                                    </Col> : null}
                                {index + 1 < Object.keys(projects).length ?
                                    <Col
                                        className="project-row"
                                        onMouseOver={() => {
                                            handleHoverOn(index + 1)
                                        }}
                                        onMouseLeave={() => {
                                            handleHoverOff()
                                        }}
                                        onClick={() => showProject(projects[index + 1])}
                                    >
                                        <Image
                                            className="project-grid"
                                            style={{opacity: gridOpacity === index + 1 ? '0.5' : '1'}}
                                            fluid
                                            src={projects[index + 1].images.cover}
                                            rounded
                                        />
                                        {showTagline === index + 1 ?
                                            <div className="project-grid-text"><h1>{projects[index+1].title}</h1><br/>
                                                <h4>{projects[index+1].tagline}</h4></div> : null}
                                        <MobileView>
                                            <div className="project-grid-text"><h1>{projects[index + 1].title}</h1><br/>
                                                <h4>{projects[index + 1].tagline}</h4></div>
                                        </MobileView>

                                    </Col> : null}
                                {index + 2 < Object.keys(projects).length ?
                                    <Col
                                        className="project-row"
                                        onMouseOver={() => {
                                            handleHoverOn(index + 2)
                                        }}
                                        onMouseLeave={() => {
                                            handleHoverOff()
                                        }}
                                        onClick={() => showProject(projects[index + 2])}
                                    >
                                        <Image
                                            className="project-grid"
                                            style={{opacity: gridOpacity === index + 2 ? '0.5' : '1'}}
                                            fluid
                                            src={projects[index + 2].images.cover}
                                            rounded

                                        />
                                        {showTagline === index + 2 ?
                                            <div className="project-grid-text"><h1>{projects[index+2].title}</h1><br/>
                                                <h4>{projects[index+2].tagline}</h4></div> : null}
                                        <MobileView>
                                            <div className="project-grid-text"><h1>{projects[index + 2].title}</h1><br/>
                                                <h4>{projects[index + 2].tagline}</h4></div>
                                        </MobileView>
                                    </Col> : null}
                            </Row> : null}

                    </div>
                )
            )}

        </Container>
    )
}

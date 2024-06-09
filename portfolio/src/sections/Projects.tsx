import "./css/projects.css"
// import remarkGfm from "remark-gfm";
// import Markdown from "react-markdown";
import React, {useEffect, useState} from "react";
import {Col, Row, Image, Modal, Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";


interface ProjectProperties {
    title: string
    tagline: string
    images: [string, string]
    description: string
}



export default function Projects() {
    const [projects, setProjects] = useState<ProjectProperties>([])
    const projectUrl = "https://raw.githubusercontent.com/dvdzmr/portfolio-projects/main/projects.json"
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("")
    const [modalDescription, setModalDescription] = useState("")
    const [modalDetailImage, setModalDetailImage] = useState("")


    useEffect(() => {
        fetch(projectUrl)
            .then(res => res.json())
            .then((data) => {
                setProjects(data);
            })

    }, []);

    const showProject = (project) => {
        // console.log(project);
        setModalTitle(project.title);
        setModalDescription(project.description);
        setModalDetailImage(project.images.detail);

        setShowModal(true);


    }

    const handleClose = () => setShowModal(false);

    return (
        <Container id="projects">
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
            {projects.map((item, index) => (
                    <div key={index}>
                        {index % 3 == 0 ?
                            <Row>
                                {index < Object.keys(projects).length ? <Col>
                                    <Image
                                        className="project-grid"
                                        fluid
                                        src={projects[index].images.cover}
                                        rounded
                                        onClick={() => showProject(projects[index])}
                                        //TODO: ONHOVER SHOW TAGLINE
                                        onMouseOver={(e) => e.target.style.opacity = 0.5}
                                        onMouseLeave={(e) => e.target.style.opacity = 1}
                                    />
                                </Col> : null}
                                {index + 1 < Object.keys(projects).length ? <Col>
                                    <Image
                                        className="project-grid"
                                        fluid
                                        src={projects[index + 1].images.cover}
                                        rounded
                                        onClick={() => showProject(projects[index + 1])}
                                        onMouseOver={(e) => e.target.style.opacity = 0.5}
                                        onMouseLeave={(e) => e.target.style.opacity = 1}
                                    />
                                </Col> : null}
                                {index + 2 < Object.keys(projects).length ? <Col>
                                    <Image
                                        className="project-grid"
                                        fluid
                                        src={projects[index + 2].images.cover}
                                        rounded
                                        onClick={() => showProject(projects[index + 2])}
                                        onMouseOver={(e) => e.target.style.opacity = 0.5}
                                        onMouseLeave={(e) => e.target.style.opacity = 1}
                                    />
                                </Col> : null}
                            </Row> : null}

                    </div>
                )
            )}

        </Container>
    )
}

//todo: hover over + click handle + modal
//todo: load image from URL instead of local path

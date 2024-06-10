import "./css/projects.css"
import {SetStateAction, useEffect, useState} from "react";
import {Button, Col, Image, Modal, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Projects() {
    const [projects, setProjects] = useState([{
        title: "Error loading projects from remote source",
        tagline: "placeholder",
        images: {cover: "portfolio/src/media/placeholder_project.png", detail: "portfolio/src/media/placeholder_project.png"},
        description: "placeholder"
    }])
    const projectUrl = "https://raw.githubusercontent.com/dvdzmr/portfolio-projects/main/projects.json"
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalDescription, setModalDescription] = useState("");
    const [modalDetailImage, setModalDetailImage] = useState("");
    const [showTagline, setShowTagline] = useState(99);
    const [gridOpacity, setGridOpacity] = useState(99);
    const [viewPortWidth, setViewPortWidth] = useState(99999);

    const threeInaRow = [0,1,2];

    useEffect(() => {
        fetch(projectUrl)
            .then(res => res.json())
            .then((data) => {
                setProjects(data);
            })

        setViewPortWidth(window.innerWidth);
    }, []);

    window.addEventListener("resize", () => setViewPortWidth(window.innerWidth));

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
                                {/*Loop between 1 and 3 */}
                                {threeInaRow.map((_item, i) => (
                                    <>
                                    {index+i < Object.keys(projects).length ?
                                    <Col
                                        sm
                                        className="project-row"
                                        onMouseOver={() => {
                                            handleHoverOn(index+i)
                                        }}
                                        onMouseLeave={() => {
                                            handleHoverOff()
                                        }}
                                        onClick={() => showProject(projects[index+i])}
                                    >
                                        <Image
                                            style={{opacity: gridOpacity === index+i || viewPortWidth < 576 ? '0.5' : '1'}}
                                            className="project-grid"
                                            fluid
                                            src={projects[index+i].images.cover}
                                            rounded
                                        />
                                        {showTagline === index+i || viewPortWidth < 576 ?
                                            <div className="project-grid-text"><h1>{projects[index+i].title}</h1><br/>
                                                <h4>{projects[index].tagline}</h4></div> : null}
                                    </Col> : null} </>
                                    ))}


                            </Row> : null}

                    </div>
                )
            )}

        </Container>
    )
}
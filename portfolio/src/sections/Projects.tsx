import "./css/projects.css"
import {SetStateAction, useEffect, useState} from "react";
import {Button, Col, Image, Modal, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Projects() {
    const [projects, setProjects] = useState([{
        title: "Error loading projects from remote source",
        tagline: "placeholder",
        images: {cover: "portfolio/src/media/placeholder_project.png", detail: "portfolio/src/media/placeholder_project.png"},
        description: "placeholder",
        repository: "",
        deployment: ""
    }])
    const projectUrl = "https://raw.githubusercontent.com/dvdzmr/portfolio-projects/main/projects.json"
    const [modalTitle, setModalTitle] = useState("");
    const [modalDescription, setModalDescription] = useState("");
    const [modalDetailImage, setModalDetailImage] = useState("");
    const [modalRepo, setModalRepo] = useState("");
    const [modalDeploy, setModalDeploy] = useState("");
    const [modalTagline, setModalTagline] = useState("");

    const [showModal, setShowModal] = useState(false);
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
        tagline: SetStateAction<string>;
        description: SetStateAction<string>;
        images: { detail: SetStateAction<string>;};
        repository: SetStateAction<string>;
        deployment: SetStateAction<string>;
    }) => {
        setModalTitle(project.title);
        setModalDescription(project.description);
        setModalDetailImage(project.images.detail);
        setModalRepo(project.repository);
        setModalDeploy(project.deployment);
        setModalTagline(project.tagline);
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
                    <Modal.Title className="modal-title">
                        <h1>{modalTitle}</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-content">
                    <Container>
                        <h4 className="modal-tagline"><i>{modalTagline}</i></h4>
                        <br/>
                        <h4>{modalDescription}</h4>
                        <br/>
                        {modalDetailImage !== "" ? <Image className="modal-image" src={modalDetailImage} rounded fluid/> : null}
                    </Container>
                    <br/>
                    {modalDeploy !== "" ? <Button className="modal-button" variant="secondary" href={modalDeploy}>Deployment</Button> : null}
                    <br/>
                    {modalRepo !== "" ? <Button className="modal-button" variant="secondary" href={modalRepo}>Repository</Button> : null}
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
                                                <h4>{projects[index+i].tagline}</h4></div> : null}
                                    </Col> : null} </>
                                    ))}


                            </Row> : null}

                    </div>
                )
            )}

        </Container>
    )
}
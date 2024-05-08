import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useState} from "react";
import "./css/portfolio.css";
import { content } from "../projects/content";
import { Button } from 'react-bootstrap';

type ModalState = {
    modalOn: boolean;
};

let currentIndex = 99;

export default class MyProjects extends React.Component {
    render() {
        return (
            <>
                <Container id="projects" className='Projects'>
                    <h1>My Projects</h1>
                    <Row className="Projects_row">
                        <ProjectTitles  modalOn/>
                    </Row>
                </Container>
            </>
        );
    }
}



class ProjectTitles extends React.Component<ModalState> {

    state: ModalState = {
        modalOn: false
    }


    _onButtonClick(index: number) {
        currentIndex = index;
        // console.log("clicked", index);
        this.setState({ modalOn: (!this.state.modalOn) });
    }


    render(){

        return content.map((post) => {
                return (
                    <>
                        {! this.state.modalOn ?
                            <Col sm className='mycontainer'>
                                <div className="middle text">{post.title}</div>
                                <a href="#projects" className="d-block"
                                   onClick={() => this._onButtonClick(post.id)}>
                                    <img className="img-fluid img-thumbnail image"
                                         src={post.thumbnail} alt=""/>
                                </a>
                            </Col>
                            :
                            null
                        }
                        {this.state.modalOn && currentIndex === post.id?
                            <div className="projectFull ">
                                <a href="#projects"
                                   onClick={() => this._onButtonClick(post.id)}>
                                    <div className="mycontainer">
                                        <img className="img-fluid img-thumbnail image "
                                             src={post.thumbnail} alt=""/>
                                    </div>
                                </a>
                                <br/>
                                <h1>{post.title}</h1>
                                <p>{post.content}</p>
                                <img className="projectFullImages" src={post.images[0]} alt=""/>

                                <Button className="w-100" variant="dark" href={post.link}>Check out this
                                    project</Button>
                                <br/>

                                <Button variant="dark" onClick={() => this._onButtonClick(post.id)}>Close</Button>
                            </div> :
                            null
                        }
                    </>
                );
            }
        );
    }
}

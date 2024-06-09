import "./css/about.css";
import Container from "react-bootstrap/Container";


export default function About() {
    return (
        <Container id="about" className="about">
            <h1>About Me</h1>
            <hr/>

            <h3>
                Hi my name is David, I'm an aspiring web developer, embedded systems tinkerer with a
                background in photography & film.

                My journey involves writing code for edge devices used in Quality-Control automation,
                creating websites and applications using popular web development languages and frameworks.

                My website serves as a way to introduce myself, and to show what projects I'm proud of.
            </h3>
        </Container>
    )
}
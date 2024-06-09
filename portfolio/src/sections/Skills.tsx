import "./css/skills.css"
import Container from 'react-bootstrap/Container';
import {ProgressBar} from "react-bootstrap";


export default function Skills() {
    const mySkills = [
        {type: 'Javascript', percentage: 65},
        {type: 'Typescript', percentage: 45},
        {type: 'Python', percentage: 80},
        {type: 'C#', percentage: 75},
        {type: 'C++', percentage: 40},
        {type: 'C', percentage: 45},
        {type: 'Troubleshooting', percentage: 90}
    ];

    const renderBars = () => {
        return mySkills.map(language => {
            return (
                <div className="skills">
                    <h3 className="skill-title">
                        {language.type}
                    </h3>
                    <ProgressBar now={language.percentage}/>
                </div>
            );
        });
    }

    return (
        <Container id="skills" className="skills">
            <h1>Skills</h1>
            <hr/>
            {renderBars()}
        </Container>
    );
}


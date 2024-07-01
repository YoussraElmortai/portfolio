import React, { useEffect } from 'react';
import "./style.css"


const Projects = () => {
    useEffect(() => {
        const teaserElements = document.querySelectorAll(".project__teaser");
        document.body.onpointermove = e => {
            const { clientX, clientY } = e;
            teaserElements.forEach(teaser => {
                teaser.style.left = `${clientX}px`;
            });
        };

        return () => {
            document.body.onpointermove = null;
        };
    }, []);


    return (
        <ul className="projects">
            <li className="project">
                <a href="/">
                    <span className="project__name">Project</span>
                    <span className="project__client">Client</span>
                    <span className="project__type">Type</span>
                    <span className="project__year">Year</span>
                </a>
            </li>
            <li className="project">
                <a href="/">
                    <span className="project__name">Unc Inc</span>
                    <span className="project__client">Unc Inc</span>
                    <span className="project__type">dev</span>
                    <span className="project__year">2024</span>
                    <img className="project__teaser" src="https://i.pinimg.com/736x/7d/2c/4b/7d2c4bb8a1758a5d393746963515e1d1.jpg" alt="Description of the image" />
                </a>
            </li>
            <li className="project">
                <a href="/">
                    <span className="project__name">Traveling Beauty</span>
                    <span className="project__client">Traveling Beauty</span>
                    <span className="project__type">dev / design</span>
                    <span className="project__year">2024</span>
                    <img className="project__teaser" src="https://i.pinimg.com/564x/d4/c4/e9/d4c4e9c85ee27739003ec459b64a89c7.jpg" alt="Description of the image" />
                </a>
            </li>
            <li className="project">
                <a href="/">
                    <span className="project__name">Bieb in Bloei</span>
                    <span className="project__client">Buurtcampus Oost</span>
                    <span className="project__type">dev</span>
                    <span className="project__year">2023</span>
                    <img className="project__teaser" src="https://i.pinimg.com/736x/36/3b/66/363b6614dbcf237451ad43e90dd8e8bc.jpg" alt="Description of the image" />
                </a>
            </li>
        </ul>
    );
}

export default Projects;
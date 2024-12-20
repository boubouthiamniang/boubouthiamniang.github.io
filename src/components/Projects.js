import React from 'react';
import './css/Projects.css';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <strong>Real-Time Data Processing Framework</strong> (GitHub: [github.com/yourproject])<br />
                    Contributed to an open-source framework for processing large-scale real-time data. Optimized data pipelines for better performance.
                </li>
                <li>
                    <strong>IoT Blockchain Protocol</strong> (GitHub: [github.com/iotblockchain])<br />
                    Developed a lightweight blockchain protocol for secure IoT communications.
                </li>
            </ul>
        </section>
    );
};

export default Projects;

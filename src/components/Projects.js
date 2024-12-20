import React from 'react';
import './css/Projects.css';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <strong>Real-Time Data Processing Framework</strong><br />
                    GitHub: <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">github.com/yourproject</a><br />
                    Contributed to an open-source framework for processing large-scale real-time data. Optimized data pipelines for better performance.
                </li>
                <li>
                    <strong>IoT Blockchain Protocol</strong><br />
                    GitHub: <a href="https://github.com/iotblockchain" target="_blank" rel="noopener noreferrer">github.com/iotblockchain</a><br />
                    Developed a lightweight blockchain protocol for secure IoT communications.
                </li>
                {/* Add more project entries as needed */}
            </ul>
        </section>
    );
};

export default Projects;

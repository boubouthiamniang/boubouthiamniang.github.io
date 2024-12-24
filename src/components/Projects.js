import React from 'react';
import './css/Projects.css';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <strong>PhaDOP framework</strong><br />
                    GitHub: <a href="https://github.com/boubouthiamniang/tool-spl-dop-mde" target="_blank" rel="noopener noreferrer">github.com/boubouthiamniang/tool-spl-dop-mde</a><br />
                    Demo: <a href="https://github.com/boubouthiamniang/PhaDOP-demo" target="_blank" rel="noopener noreferrer">github.com/boubouthiamniang/PhaDOP-demo</a><br />
                    A Pharo framework for implementing software product lines using Delta-Oriented Programming and model-based engineering
                </li>
                <li>
                    <strong>Business Rule Migration System (BRMS) - IBM ODM to Drools use case</strong><br />
                    GitHub: <a href="https://github.com/boubouthiamniang/ARLtoDrlMigration" target="_blank" rel="noopener noreferrer">github.com/boubouthiamniang/ARLtoDrlMigration</a><br />
                    Comprehensive migration of BRMS from IBM ODM to Drools 
                </li>
                {/* Add more project entries as needed */}
            </ul>
        </section>
    );
};

export default Projects;

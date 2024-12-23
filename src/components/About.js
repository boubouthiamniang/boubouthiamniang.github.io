import React from 'react';
import './css/About.css';

const About = () => {
    return (
        <section className="about">
            <h2>About Me</h2>
            <ul>
                <li>
                    <strong>Professional Expertise</strong>
                    <p>
                        I am an R&D engineer with a PhD in software engineering, specializing in systems interoperability. My area of expertise focuses on the design and implementation of scalable data pipelines for complex information systems. I have hands-on experience with asynchronous messaging tools such as Kafka, Apache Camel, RabbitMQ and ActiveMQ, and am also familiar with model-driven engineering and software product line approaches.
                        I have good experience of web development, particularly with frameworks such as Spring Boot, Struts and JSF.
                        <br/><br/>
                        As an R&D engineer at Berger-Levrault, I'm working on Green IT projects, exploring how software energy consumption can be reduced. I'm also involved in the development of AI-assisted tools for software creation and business rules management systems.
                        <br/><br/>
                        In addition to my research work, I teach computer science part-time at IUT Lumière Lyon 2, covering topics such as object-oriented programming, algorithms, web data collection, database design and system interoperability.
                    </p>
                </li>
                <li>
                    <strong>Personal Interests</strong>
                    <p>
                        When I am not working on tech projects, I enjoy exploring the outdoors and discovering new places, especially appreciating nature and landscapes. 
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default About;

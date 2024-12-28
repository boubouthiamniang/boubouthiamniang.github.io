import React from 'react';
import './css/Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            {/* Experience Section */}
            <section className="experience">
                <h2>Experience</h2>
                <ul>
                    <li>
                        <strong>Berger-Levrault</strong>
                        <br />
                        <em>Research Engineer</em>, since April 2024
                        <ul>
                            <li>GreenIT</li>
                            <li>AI for Code</li>
                            <li>Test Selection</li>
                        </ul>
                    </li>
                    <li>
                        <em>Ph.D. Candidate in Software Engineering</em>, Oct. 2020 - Mar. 2024
                        <ul>
                            <li>Software Interoperability</li>
                            <li>Model-Driven Engineering</li>
                            <li>Software Product Line Engineering</li>
                        </ul>
                    </li>
                    <li>
                        <strong>IUT Lumière Lyon 2</strong>
                        <br />
                        <em>Contract Teacher</em>, Sept. 2021 - Present
                        <ul>
                            <li>Industrial Logistics and Organization Quality Department</li>
                            <ul>
                                <li>1st Year: Numerical Tools (Boolean Algebra, Truth Tables), Relational Database Design (UML Modeling, SQL)</li>
                                <li>2nd Year: Algorithm and Programming (Python)</li>
                                <li>3rd Year (Bachelor): Interoperability and Digital Hygiene</li>
                            </ul>
                            <li>Data Science Department</li>
                            <ul>
                                <li>2nd Year: Object-Oriented Programming (Java), Numerical Tools (Boolean Algebra, Truth Tables)</li>
                                <li>3rd Year (Bachelor): Web Programming for Data Visualization (JavaScript), Web Data Collection (HtmlUnit, Jsoup)</li>
                            </ul>
                        </ul>
                    </li>
                    <li>
                        <strong>Groupe Charle André</strong>
                        <br />
                        <em>Analyst Developer</em>, Sept. 2017 - Oct. 2020
                        <ul>
                            <li>Web Applications: Spring MVC, Struts 1, JSP</li>
                        </ul>
                    </li>
                </ul>
            </section>

            {/* Education Section */}
            <section className="education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <strong>Université Lumière Lyon 2</strong>
                        <br />
                        <em>Ph.D. Candidate in Computer Science</em>, since Oct. 2020
                    </li>
                    <li>
                        <strong>Polytech' Montpellier</strong>
                        <br />
                        <em>Electronics and Industrial Computing</em>, 2014 - 2017
                    </li>
                    <li>
                        <strong>Nantes Université</strong>
                        <br />
                        <em>Licensing Program - Sciences for Engineers</em>, 2013 - 2014
                    </li>
                    <li>
                        <strong>Université Côte d'Azur</strong>
                        <br />
                        <em>Licensing Program - Mathematics and Physics</em>, 2011 - 2013
                    </li>
                    <li>
                        <strong>Lycée Technique Privée Aissata Diaby</strong>
                        <br />
                        <em>Baccalaureate - Mathematics and Civil Engineering</em>, 2007 - 2010
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;

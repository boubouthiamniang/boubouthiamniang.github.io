import React from 'react';
import './css/Education.css';

const Education = () => {
    return (
        <section className="education">
            <h2>Education</h2>
            <ul>
                <li>
                    <strong>PhD in Software Engineering</strong><br />
                    [University Name], Year Completed<br />
                    Thesis: *Efficient Algorithms for Real-Time Data Processing in Distributed Systems*
                </li>
                <li>
                    <strong>Master of Science in Computer Science</strong><br />
                    [University Name], Year
                </li>
                <li>
                    <strong>Bachelor of Science in Computer Science</strong><br />
                    [University Name], Year
                </li>
            </ul>
        </section>
    );
};

export default Education;

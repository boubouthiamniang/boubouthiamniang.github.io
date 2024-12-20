import React from 'react';
import './css/Blog.css';

const Blog = () => {
    return (
        <section className="blog">
            <h2>Blog</h2>
            <ul>
                <li>
                    <strong>CI/CD Pipelines: Good Software Development Practice, but Green?</strong><br />
                    GitHub: <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">github.com/yourproject</a><br />
                    Discussed the environmental impact of CI/CD pipelines and explored sustainable practices in software development.
                </li>
                <li>
                    <strong>Model-Based Analysis and Comprehensive BRMS Migration: IBM ODM to Drools Case Study</strong><br />
                    GitHub: <a href="https://github.com/iotblockchain" target="_blank" rel="noopener noreferrer">github.com/iotblockchain</a><br />
                    Explored the migration process from IBM ODM to Drools in a case study, focusing on model-based analysis and best practices.
                </li>
                {/* Add more blog entries as needed */}
            </ul>
        </section>
    );
};

export default Blog;

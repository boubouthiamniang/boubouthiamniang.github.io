import React from 'react';
import './css/Blog.css';

const Blog = () => {
    return (
        <section className="blog">
            <h2>Blog</h2>
            <ul>
                <li>
                    <strong>CI/CD Pipelines: Good Software Development Practice, but Green?</strong><br />
                    Available on: <a href="https://www.research-bl.com/ci-cd-pipelines-good-software-development-practice-but-green/" target="_blank" rel="noopener noreferrer">https://www.research-bl.com/ci-cd-pipelines-good-software-development-practice-but-green</a><br />
                    Discussed the environmental impact of CI/CD pipelines and explored sustainable practices in software development.
                </li>
                <li>
                    <strong>Model-Based Analysis and Comprehensive BRMS Migration: IBM ODM to Drools Case Study</strong><br />
                    Available on: <a href="https://www.research-bl.com/model-based-analysis-and-comprehensive-brms-migration-ibm-odm-to-drools-case-study" target="_blank" rel="noopener noreferrer">https://www.research-bl.com/model-based-analysis-and-comprehensive-brms-migration-ibm-odm-to-drools-case-study</a><br />
                    GitHub: <a href="https://github.com/boubouthiamniang/ARLtoDrlMigration" target="_blank" rel="noopener noreferrer">https://github.com/boubouthiamniang/ARLtoDrlMigration</a><br />
                    Explored the migration process from IBM ODM to Drools in a case study, focusing on model-based analysis.
                </li>
                {/* Add more blog entries as needed */}
            </ul>
        </section>
    );
};

export default Blog;

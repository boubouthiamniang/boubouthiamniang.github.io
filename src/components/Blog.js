import React from 'react';
import './css/Blog.css';

const Blog = () => {
    return (
        <section className="blog">
            <h2>Blog</h2>
            <ul>
                <li>
                    <strong>CI/CD pipelines: good software development practice, but green? </strong> (GitHub: [github.com/yourproject])<br />
                    Contributed to an open-source framework for processing large-scale real-time data. Optimized data pipelines for better performance.
                </li>
                <li>
                    <strong>Model-Based Analysis and Comprehensive BRMS Migration: IBM ODM to Drools Case Study</strong> (GitHub: [github.com/iotblockchain])<br />
                    Developed a lightweight blockchain protocol for secure IoT communications.
                </li>
            </ul>
        </section>
    );
};

export default Blog;

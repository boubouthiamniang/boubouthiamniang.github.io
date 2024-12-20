import React from 'react';
import './css/Research.css';

const Research = () => {
    return (
        <section className="research">
            <h2>Research</h2>
            <ul>
                <li>
                    <strong>Efficient Algorithms for Real-Time Data Processing</strong><br />
                    *ACM Transactions on Software Engineering*, Year<br />
                    Research on optimizing data processing algorithms for real-time systems in distributed environments.
                </li>
                <li>
                    <strong>Blockchain for Secure IoT Communication</strong><br />
                    *IEEE Transactions on Computers*, Year<br />
                    Investigating the use of blockchain technology for securing IoT devices and communications.
                </li>
                {/* Add more research entries as needed */}
            </ul>
        </section>
    );
};

export default Research;

import React from 'react';
import './css/Teaching.css';

const Teaching = () => {
    return (
        <section className="teaching">
            <h2>Teaching</h2>
            <ul>
                <li>
                    <strong>Efficient Algorithms for Data Processing</strong><br />
                    *ACM Transactions on Software Engineering*, Year<br />
                    Taught students how to optimize data processing algorithms for real-time systems in distributed environments.
                </li>
                <li>
                    <strong>Blockchain for IoT Security</strong><br />
                    *IEEE Transactions on Computers*, Year<br />
                    Led a course on the use of blockchain technology for securing IoT devices and communications.
                </li>
                {/* Add more teaching entries as needed */}
            </ul>
        </section>
    );
};

export default Teaching;

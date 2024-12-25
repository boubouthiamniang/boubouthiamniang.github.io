import React from 'react';
import './css/Teaching.css';
import teachingData from './data/teachingData';  // Import the teaching data

const Teaching = () => {
    // Grouping the courses by academic years
    const groupedByYear = {
        "2021-2022": teachingData.filter(course => course.year === "2021-2022"),
        "2022-2023": teachingData.filter(course => course.year === "2022-2023"),
        "2023-2024": teachingData.filter(course => course.year === "2023-2024"),
        "2024-2025": teachingData.filter(course => course.year === "2024-2025"),  // Added 2024-2025
    };

    return (
        <section className="teaching">
            <h2>Teaching</h2>
            
            {/* Display courses for 2021-2022 */}
            {groupedByYear["2021-2022"].length > 0 && (
                <div>
                    <h3>2021-2022</h3>
                    <ul>
                        {groupedByYear["2021-2022"].map((course, index) => (
                            <li key={index}>
                                <strong>{course.ressource}</strong><br />
                                <em>{course.department}</em>, {course.year}<br />
                                <p>{course.description}</p>
                                <p>
                                    {course.CM && <span className="hours"><strong>CM:</strong> {course.CM}</span>}
                                    {course.TD && <span className="hours"><strong>TD:</strong> {course.TD}</span>}
                                    {course.TP && <span className="hours"><strong>TP:</strong> {course.TP}</span>}
                                    {course.hours && <span className="hours"><strong>Total:</strong> {course.hours}</span>}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Display courses for 2022-2023 */}
            {groupedByYear["2022-2023"].length > 0 && (
                <div>
                    <h3>2022-2023</h3>
                    <ul>
                        {groupedByYear["2022-2023"].map((course, index) => (
                            <li key={index}>
                                <strong>{course.ressource}</strong><br />
                                <em>{course.department}</em>, {course.year}<br />
                                <p>{course.description}</p>
                                <p>
                                    {course.CM && <span className="hours"><strong>CM:</strong> {course.CM}</span>}
                                    {course.TD && <span className="hours"><strong>TD:</strong> {course.TD}</span>}
                                    {course.TP && <span className="hours"><strong>TP:</strong> {course.TP}</span>}
                                    {course.hours && <span className="hours"><strong>Total:</strong> {course.hours}</span>}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Display courses for 2023-2024 */}
            {groupedByYear["2023-2024"].length > 0 && (
                <div>
                    <h3>2023-2024</h3>
                    <ul>
                        {groupedByYear["2023-2024"].map((course, index) => (
                            <li key={index}>
                                <strong>{course.ressource}</strong><br />
                                <em>{course.department}</em>, {course.year}<br />
                                <p>{course.description}</p>
                                <p>
                                    {course.CM && <span className="hours"><strong>CM:</strong> {course.CM}</span>}
                                    {course.TD && <span className="hours"><strong>TD:</strong> {course.TD}</span>}
                                    {course.TP && <span className="hours"><strong>TP:</strong> {course.TP}</span>}
                                    {course.hours && <span className="hours"><strong>Total:</strong> {course.hours}</span>}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Display courses for 2024-2025 */}
            {groupedByYear["2024-2025"].length > 0 && (
                <div>
                    <h3>2024-2025</h3>
                    <ul>
                        {groupedByYear["2024-2025"].map((course, index) => (
                            <li key={index}>
                                <strong>{course.ressource}</strong><br />
                                <em>{course.department}</em>, {course.year}<br />
                                <p>{course.description}</p>
                                <p>
                                    {course.CM && <span className="hours"><strong>CM:</strong> {course.CM}</span>}
                                    {course.TD && <span className="hours"><strong>TD:</strong> {course.TD}</span>}
                                    {course.TP && <span className="hours"><strong>TP:</strong> {course.TP}</span>}
                                    {course.hours && <span className="hours"><strong>Total:</strong> {course.hours}</span>}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default Teaching;

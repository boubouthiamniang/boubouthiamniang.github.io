import React from 'react';
import './css/Teaching.css';
import teachingData from './data/teachingData';  // Import the teaching data

const Teaching = () => {
    // Grouping the courses by academic years
    const groupedByYear = {
        "2021-2022": teachingData.filter(course => course.year === "2021-2022"),
        "2022-2023": teachingData.filter(course => course.year === "2022-2023"),
        "2023-2024": teachingData.filter(course => course.year === "2023-2024"),
        "2024-2025": teachingData.filter(course => course.year === "2024-2025"),
    };

    return (
        <section className="teaching">
            <h2>Teaching</h2>
            
            {/* Display courses for each year */}
            {Object.keys(groupedByYear).map((year) => (
                groupedByYear[year].length > 0 && (
                    <div className="year-section" key={year}>
                        <h3>{year}</h3>
                        <div className="courses-list">
                            {groupedByYear[year].map((course, index) => (
                                <div className="course-card" key={index}>
                                    <div className="course-header">
                                        <strong>{course.ressource}</strong>
                                        <div className="level-semester-year">
                                            <span>{course.level} - Semester {course.semester || "N/A"} - {course.year}</span>
                                        </div>
                                    </div>
                                    <div className="department">
                                        <strong>Department:</strong> {course.department || "N/A"}
                                    </div>
                                    <p className="description">{course.description}</p>
                                    <div className="hours">
                                        {course.CM && <span><strong>CM:</strong> {course.CM}</span>}
                                        {course.TD && <span><strong>TD:</strong> {course.TD}</span>}
                                        {course.TP && <span><strong>TP:</strong> {course.TP}</span>}
                                        {course.hours && <span><strong>Total:</strong> {course.hours}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            ))}
        </section>
    );
};

export default Teaching;

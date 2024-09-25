// src/components/Education.js

import React from 'react';

const Education = () => {
    return (
        <section id="education" className="my-20 px-4 md:px-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">My Education</h2>
                <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">Degrees.....</h3>
                    <ul className="list-disc pl-5 space-y-4">
                        <li>
                            <strong>Master's Degree in Computer Applications</strong> - Rajive Gandhi Proudyogiki University in Bhopal.
                            <br />
                            Pursuing Master of Computer Applications. 
                            <br />
                            <span className="text-sm text-gray-600">Duration: 2024 - 2025</span>
                            <p className="mt-2">
                                Covered foundational topics such as programming, data structures, algorithms, and software development principles.
                            </p>
                        </li>
                        <li>
                            <strong>Bachelor's Degree in Computer Applications.</strong> - Vikram University in Ujjain.
                            <br />
                            PassOut Bachelor of Computer Applications.
                            <br />
                            <span className="text-sm text-gray-600">Duration: 2021 - 2023</span>
                            <p className="mt-2">
                            Covered foundational topics such as programming, data structures, algorithms, and software development principles.
                            </p>
                        </li>
                        {/* Add more list items as needed */}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;

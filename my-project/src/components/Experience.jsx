import React from 'react';
import Ex from '../assets/Ex.jpg'; // Adjust path to your image

const Experience = () => {
    return (
        <section id="experience" className="my-20 px-4 md:px-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Professional Experience</h2>
                <div className="bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg p-8">
                    <ul className="space-y-8">
                        <li className="border-l-4 border-yellow-300 pl-4">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Internship at Ypsilon Company</h3>
                            <span className="block text-sm text-gray-500 mb-4">20/6/2022 - 20/12/2022</span>
                            <p className="text-md text-gray-700 mb-4">
                                The post of training software developer in the organization during the period he worked on <b>"MERN STACK PROJECT"</b> Development Technology.
                            </p>
                            <div className="mt-4">
                                <img 
                                    src={Ex} 
                                    alt="Ypsilon Company Internship Certificate" 
                                    className="w-full max-w-md rounded-lg shadow-md"
                                />
                            </div>
                        </li>
                        <li className="border-l-4 border-green-500 pl-4">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Freelance Web Developer</h3>
                            <span className="block text-sm text-gray-500 mb-4">June 2024 - Present</span>
                            <p className="text-md text-gray-700">
                                Designed and developed custom websites and web applications for various clients. Utilized technologies such as <b>HTML, CSS, JavaScript, React.js, and Node.js</b> to deliver responsive and user-friendly solutions.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;

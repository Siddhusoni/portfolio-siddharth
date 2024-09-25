// src/components/Services.js

import React from 'react';

const Services = () => {
    return (
        <section id="services" className="my-20 px-4 md:px-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
                <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
                    {/* Web Development */}
                    <div className="flex-1 bg-gray-300 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Front-end Development</h3>
                        <p className="text-md mb-4">
                        I specialize in creating dynamic and responsive user interfaces that provide a seamless experience. My expertise includes:
                
                                           </p>
                        <p className="text-sm text-gray-600">
                            Technologies: HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB
                        </p>
                    </div>

                    {/* Mobile App Development */}
                    <div className="flex-1 bg-gray-300 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
                        <p className="text-md mb-4">
                        I build robust server-side solutions and APIs to power web applications. My backend expertise includes:                        </p>
                        <p className="text-sm text-gray-600">
 I build robust server-side solutions and APIs to power web applications. My backend expertise includes:                        </p>
                    </div>
                </div>
               
            </div>
        </section>
    );
};

export default Services;

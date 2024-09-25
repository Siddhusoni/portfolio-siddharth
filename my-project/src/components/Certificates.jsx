// src/components/Certificates.js

import React, { useState } from 'react';
import LOGO from '../assets/certi.jpg';
import hack from '../assets/hack.jpg';
const Certificates = () => {


    return (
        
        <section id="certificates" className="my-20 px-4 md:px-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Certificates</h2>
                <div className="bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg p-8">
                    <ul className="space-y-8">
                        <li className="border-l-4 border-yellow-500 pl-4 flex flex-col items-center md:flex-row md:items-start">
                            <div className="flex-shrink-0 cursor-pointer">
                                <img 
                                    src={LOGO} 
                                    alt="Full Stack Web Development Certificate" 
                                    className="w-full max-w-sm rounded-lg shadow-md md:w-64"
                                   
                                />
                            </div>
                            <div className="md:ml-6 mt-4 md:mt-0">
                                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Full Stack Web Development Certificate</h3>
                                <span className="block text-sm text-gray-500 mb-4">Issued by Code Academy, March 2022</span>
                                <p className="text-md text-gray-700">
                                    Skilled Certificate Coding Specialist with extensive knowledge in <b>MERN STACK</b>.
                                </p>
                            </div>
                        </li>
                        {/* Add more list items for additional certificates */}
                    </ul>
                </div>
            </div>

         
            <div className="container mx-auto">

<div className="bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg p-8">
    <ul className="space-y-8">
        <li className="border-l-4 border-yellow-500 pl-4 flex flex-col items-center md:flex-row md:items-start">
            <div className="flex-shrink-0 cursor-pointer">
                <img
                    src={hack}
                    alt="Full Stack Web Development Certificate"
                    className="w-full max-w-sm rounded-lg shadow-md md:w-64"
                    onClick={() => openModal(Ex)}
                />
            </div>
            <div className="md:ml-6 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Certificate of Participation Awarded to.......</h3>
                <span className="block text-sm text-gray-500 mb-4">Issued by , April 2024</span>
                <p className="text-md text-gray-700">
                    For Participation in <b>HACKWAVE :</b> 36 hours National Hackathon from 27 April to 29 April 2024 organized by coding & Technical Development cell of Chameli Devi Group of Institutions, Indore...
                </p>
            </div>
        </li>
        {/* Add more list items for additional certificates */}
    </ul>
</div>
</div>
            
        </section>





    );
};

export default Certificates;

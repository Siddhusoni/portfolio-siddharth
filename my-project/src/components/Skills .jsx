// src/components/Skills.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs  } from '@fortawesome/free-brands-svg-icons';

const skills = [
    { name: 'HTML', level: '90%', icon: faHtml5, color: 'bg-orange-500' },
    { name: 'CSS', level: '80%', icon: faCss3Alt, color: 'bg-blue-500' },
    { name: 'JavaScript', level: '90%', icon: faJs, color: 'bg-yellow-500' },
    { name: 'React.js', level: '85%', icon: faReact, color: 'bg-blue-600' },
    { name: 'Node.js', level: '80%', icon: faNodeJs, color: 'bg-green-500' },

 
];

const Skills = () => {
    return (
        <section id="skills" className="my-20 px-4 md:px-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden"
                        >
                            <div className="p-6 flex flex-col items-center">
                                <FontAwesomeIcon icon={skill.icon} className="text-4xl text-gray-700 mb-4" />
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{skill.name}</h3>
                                <div className="w-full bg-gray-200 rounded-full h-2 relative">
                                    <div
                                        className={`h-full rounded-full ${skill.color}`}
                                        style={{ width: skill.level }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

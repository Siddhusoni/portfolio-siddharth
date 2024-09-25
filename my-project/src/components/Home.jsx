import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import { ReactTyped, Typed } from "react-typed";
import profile from "../assets/profile.jpg"
import Ex from '../assets/Ex.jpg';
import certi from '../assets/certi.jpg';
import hack from '../assets/hack.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import '../styles/Projects.css';



const skills = [
    { name: 'HTML', level: '90%', icon: faHtml5, color: 'bg-orange-500' },
    { name: 'CSS', level: '80%', icon: faCss3Alt, color: 'bg-blue-500' },
    { name: 'JavaScript', level: '90%', icon: faJs, color: 'bg-yellow-500' },
    { name: 'React.js', level: '85%', icon: faReact, color: 'bg-blue-600' },
    { name: 'Node.js', level: '80%', icon: faNodeJs, color: 'bg-green-500' },

];

const ProjectCard = ({ image, title, description, link }) => (
    <div className="card bg-white p-6 rounded-lg shadow-lg">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={link} className="text-blue-500 hover:underline">
            Learn more
        </a>
    </div>
);
const Home = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.description) newErrors.description = 'Description is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Simulate form submission
            setTimeout(() => {
                setSuccessMessage('Your message has been sent successfully!');
                setFormData({ name: '', email: '', description: '' });
                setErrors({});
            }, 1000);
        }
    };


    const projectData = [
        {
            image: "https://play-lh.googleusercontent.com/TmV9AUKic0h6v1s-nykEjNlbmyylxBVeBiQadN89EvvIXw6vQxl1JrVjwEZyj1zyhtGJ=s300",
            title: "Colour prediction game ",
            description: "Project Overview: Developed an interactive color prediction game that allows users to guess color combinations and receive instant feedback on their predictions. The game encourages engagement through a user-friendly interface and dynamic gameplay......",
            link: "",
        },
        {
            image: "https://thumbs.wbm.im/pw/small/3cfbaa43abba31d2426436e39d10b046.jpg",
            title: "travel tour",
            description: "Coordinated and managed a comprehensive travel tour project aimed at enhancing travelers' experiences through curated itineraries. Responsibilities included:....",
            link: "#",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcWR1TvQwwKYYMbH4qXcCg_ivCfMi8l1NC3g&s",
            title: "English language course",
            description: "Designed and implemented an English language course aimed at improving communication skills for diverse learners. Key responsibilities included:",
            link: "#",
        },
    ];



    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const openModal = (Ex) => {
        setModalImage(Ex);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage('');
    };
    return (
        <>
            <div className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                    {/* Left Column */}
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-4">
                        <span className="text-xl">Welcome to My Feed</span>
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2 text-2xl md:text-4xl">
                            <h1>Hello, I'm a </h1>
                            <ReactTyped className="text-red-600 font-bold"

                                strings={["Developer", "Web Developer", "App Developer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop="true"

                            />

                        </div>
                        <p className="text-sm md:text-md text-justify">
                            I am a passionate full-stack developer with expertise in both front-end and back-end technologies. With a strong foundation in web development,
                            I specialize in creating dynamic, user-friendly applications that deliver seamless experiences across devices.... <svg
                                className="w-5 h-5 text-red-600 font-bold inline-block"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <svg
                                className="w-5 h-5 text-red-600 font-bold inline-block"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>                        </p>

                        {/* Flex container for "Available on" and "Currently Working On" */}
                        <div className="mt-8 flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 items-center justify-center">
                            {/* Available on Section */}
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <h1 className="text-lg font-semibold mb-2">Available on:</h1>
                                <div className="flex space-x-4 text-2xl">
                                    <a
                                        href="https://www.linkedin.com/in/siddharth-soni-9230b6286"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 cursor-pointer transform hover:scale-110 transition-transform duration-200"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a
                                        href="https://github.com/Siddhusoni"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-900 hover:text-gray-700 cursor-pointer transform hover:scale-110 transition-transform duration-200"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/siddharthsoni372/m"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-600 hover:text-pink-800 cursor-pointer transform hover:scale-110 transition-transform duration-200"
                                    >
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>

                            {/* Currently Working On Section */}
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <h1 className="text-lg font-semibold mb-2">Currently Working On</h1>
                                <div className="flex flex-wrap justify-center gap-6 text-xl">
                                    <div className="flex flex-col items-center">
                                        <SiMongodb className="text-green-600 text-2xl cursor-pointer transform hover:scale-110 transition-transform duration-200" />
                                        <span className="text-xs">MongoDB</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <SiExpress className="text-gray-700 text-2xl cursor-pointer transform hover:scale-110 transition-transform duration-200" />
                                        <span className="text-xs">Express.js</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <SiReact className="text-blue-600 text-2xl cursor-pointer transform hover:scale-110 transition-transform duration-200" />
                                        <span className="text-xs">React.js</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <SiNodedotjs className="text-green-600 text-2xl cursor-pointer transform hover:scale-110 transition-transform duration-200" />
                                        <span className="text-xs">Node.js</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:w-1/2 mt-12 md:mt-24 flex justify-center items-center">
                        <img
                            src={profile} alt="Descriptive alt text"
                            className="w-96 h-96 object-cover rounded-full shadow-lg" // Set width and height to 24rem (96 x 0.25rem) for a large size
                        />
                    </div>
                </div>
            </div>


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




            <section id="certificates" className="my-20 px-4 md:px-20">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Certificates</h2>
                    <div className="bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg p-8">
                        <ul className="space-y-8">
                            <li className="border-l-4 border-yellow-500 pl-4 flex flex-col items-center md:flex-row md:items-start">
                                <div className="flex-shrink-0 cursor-pointer">
                                    <img
                                        src={certi}
                                        alt="Full Stack Web Development Certificate"
                                        className="w-full max-w-sm rounded-lg shadow-md md:w-64"
                                        onClick={() => openModal(Ex)}
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

            </section>




            <section id="certificates" className="my-20 px-4 md:px-20">
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




            <div className="p-8 bg-gray-100">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>









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







            <div className="max-w-md mx-auto p-4 bg-slate-200 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-3 py-1.5 border rounded-md shadow-sm focus:outline-none focus:ring-500 focus:border-indigo-500 sm:text-xs ${errors.name ? 'border-red-400' : 'border-gray-300'
                                }`}
                            placeholder="Your Name"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-3 py-1.5 border rounded-md shadow-sm focus:outline-none focus:ring-500 focus:border-indigo-500 sm:text-xs ${errors.email ? 'border-red-400' : 'border-gray-300'
                                }`}
                            placeholder="Your Email"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            className={`mt-1 block w-full px-3 py-1.5 border rounded-md shadow-sm focus:outline-none focus:ring-500 focus:border-indigo-500 sm:text-xs ${errors.description ? 'border-red-400' : 'border-gray-300'
                                }`}
                            placeholder="Your Message"
                        />
                        {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-green-700 text-white  rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    >
                        Send Message
                    </button>
                    {successMessage && (
                        <div className="mt-4 p-3 bg-green-100 border border-green-300 text-green-800 rounded-md text-xs">
                            {successMessage}
                        </div>
                    )}
                </form>
            </div>




        </>
    );
}

export default Home;

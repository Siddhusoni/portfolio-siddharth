// src/components/Projects.jsx
import React from 'react';
import '../styles/Projects.css'; // Import your custom CSS

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

const Projects = () => {
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

  return (
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
  );
}

export default Projects;

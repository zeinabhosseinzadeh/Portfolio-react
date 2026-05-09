import React from "react";

const projectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="h-48 overflow-hidden ">
        <img
          src={project.image}
          alt={project.title}
          className=" w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 ">
        <h3 className="text-xl font-semibold mb-2 text-white">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-ful"
            >
              {tech}
            </span>
          ))}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-white border border-gray-600 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
};

export default projectCard;

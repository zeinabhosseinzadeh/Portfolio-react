import React, { useState } from "react";
import ProjectCard from "../../Components/ProjectCard";
import projectsData from "../../data/projectsData";
import FilterTabs from "../../Components/FilterTabs";

const projects=()=>{
  const [activeCategory,setActiveCategory]=useState('all')
  const filteredProjects = activeCategory === 'all' ? projectsData :projectsData.filter ((project)=>project.category===activeCategory)

  return(
     <div className="min-h-screen bg-black text-white px-6 md:px-16 py-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-400">
          A selection of projects across different technologies.
        </p>
      </div>
      <FilterTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
         <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold capitalize">
          {activeCategory} Projects ({filteredProjects.length})
        </h2>
      </div>
      {filteredProjects.length>0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project)=>(
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>
      ):(
                <div className="text-center text-gray-500 mt-16">
          No projects found in this category.

        </div>
      )}
       </div>
)
}
export default projects
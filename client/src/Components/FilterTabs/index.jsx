import React from "react";

const FilterTabs = ({ activeCategory, setActiveCategory }) => {
  const categories = ["All", "UI", "HTML", "Javascript", "React", "Next"];
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory===category ?'bg-white text-black': 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
        >{category.toUpperCase()}</button>
      ))}
    </div>
  );
};

export default FilterTabs;

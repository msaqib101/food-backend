import React from "react";

const categories = ["All", "Breakfast", "Lunch", "Dinner"];

const CategoryFilter = ({ selected, setSelected }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-1 rounded-full ${
            selected === cat ? "bg-red-500 text-white" : "bg-gray-800 text-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

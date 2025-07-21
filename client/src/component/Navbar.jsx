import React from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

const Navbar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-[#1a1a1a] text-white px-4 sm:px-6 md:px-16 py-6 md:py-10 w-full">
      {/* Top bar with logo and search bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Logo */}
        <div className="flex justify-center md:justify-start items-center gap-2">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-[200px] sm:w-[240px] h-[40px] object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-auto">
          <SearchBar />
        </div>
      </div>

      {/* Category Filter below */}
      <div className="mt-4">
        <CategoryFilter
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />
      </div>
    </div>
  );
};

export default Navbar;

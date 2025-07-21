import React from "react";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search food..."
      className="px-3 py-1 rounded bg-gray-700 text-white border border-red-500"
      onChange={(e) => {
        const event = new CustomEvent("search-change", {
          detail: e.target.value,
        });
        window.dispatchEvent(event);
      }}
    />
  );
};

export default SearchBar;

import React from "react";
import FoodCard from "./FoodCard";

const FoodGrid = ({ foods = [] }) => {
  return (
    <div className="px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {foods.map((food, index) => (
        <FoodCard key={index} food={food} />
      ))}
    </div>
  );
};

export default FoodGrid;

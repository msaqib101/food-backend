import React from "react";

const FoodCard = ({ food }) => {
  return (
    <div className="w-[340px] h-[167px] p-[2px] rounded-2xl border border-b-fuchsia-300">
      <div className="relative w-full h-full rounded-2xl overflow-hidden ">
        {/* Background image with blur */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 "
          style={{ backgroundImage: "url('/img.png')" }}
        ></div>

        {/* Blur layer */}
        <div className="absolute inset-0 backdrop-blur-[6px] bg-black/10 z-0"></div>

        {/* Main content */}
        <div className="relative z-10 flex items-center h-full p-4">
          {/* Image */}
          <img
            src={`http://localhost:9000${food.image}`}
            alt={food.name}
            className="w-28 h-28 object-contain rounded-xl"
          />

          {/* Text content */}
          <div className="ml-4 flex flex-col justify-between flex-1 text-white h-full">
            <div>
              <h3 className="text-lg font-semibold">{food.name}</h3>
              <p className="text-sm">{food.text.slice(0,75)}....</p>
            </div>
            <button className="mt-2 self-end px-4 py-1 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg shadow">
              ${food.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

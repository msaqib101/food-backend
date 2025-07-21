import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";
import FoodGrid from "../component/FoodGrid";

const Home = () => {
  const [foodList, setFoodList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  // Fetch data from backend
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/data")
      .then((res) => {
        setFoodList(res.data);
        setFilteredList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Listen for custom event "search-change"
  useEffect(() => {
    const handleSearchChange = (e) => setSearchText(e.detail);
    window.addEventListener("search-change", handleSearchChange);
    return () => window.removeEventListener("search-change", handleSearchChange);
  }, []);

  // Filter based on category and search text
  useEffect(() => {
    let filtered = foodList;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (item) => item.type.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchText.trim() !== "") {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.type.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredList(filtered);
  }, [selectedCategory, searchText, foodList]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="p-6 object-containrelative w-full h-full opacity-100 bg-cover bg-center"style={{ backgroundImage: "url('/public/bg.png')", top: "239px", }} >
        <FoodGrid foods={filteredList} />
      </div>
    </div>
  );
};

export default Home;

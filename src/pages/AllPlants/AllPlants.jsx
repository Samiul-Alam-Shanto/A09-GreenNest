import React from "react";
import usePlants from "../../hooks/usePlants";
import PlantCard from "../../components/PlantCard/PlantCard";
import AllPlantsLoading from "../../components/Loading/AllPlantsLoading";
import { useState } from "react";

const AllPlants = () => {
  const { plants, loading } = usePlants();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const allPlants = plants.filter((p) =>
    p.plantName.toLowerCase().includes(searchText.toLowerCase())
  );
  if (loading) return <AllPlantsLoading />;

  return (
    <div className="container mx-auto px-4 pt-24 pb-12 " data-aos="slide-up">
      <title>GreenNest - All Plants</title>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Our Entire Collection</h1>
        <p className="text-lg text-gray-600 mt-2">
          Find the perfect green companion for your space.
        </p>
      </div>
      <div className="mb-5 flex flex-col gap-4 md:flex-row justify-between">
        <label onChange={handleSearch} className="input ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        <select defaultValue="Pick a color" className="select">
          <option disabled={true}>Sort By</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allPlants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default AllPlants;

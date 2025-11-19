import React from "react";
import usePlants from "../../hooks/usePlants";
import PlantCard from "../../components/PlantCard/PlantCard";
import AllPlantsLoading from "../../components/Loading/AllPlantsLoading";

const AllPlants = () => {
  const { plants, loading } = usePlants();
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default AllPlants;

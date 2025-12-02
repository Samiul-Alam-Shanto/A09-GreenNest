import React from "react";
import usePlants from "../../hooks/usePlants";
import PlantCard from "../PlantCard/PlantCard";
import Loading from "../Loading/AllPlantsLoading";
import TopPlantLoading from "../Loading/TopPlantLoading";

const TopRatedPlants = () => {
  const { plants, loading } = usePlants();
  //   console.log(plants);

  if (loading) return <TopPlantLoading />;

  const topPlants = plants.sort((a, b) => b.rating - a.rating).slice(0, 8);
  //   console.log(topPlants);
  return (
    <section className="my-16 container mx-auto px-4" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-2">
        Our Top Rated Indoor Plants
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Loved by our community, perfect for your home.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {topPlants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </section>
  );
};

export default TopRatedPlants;

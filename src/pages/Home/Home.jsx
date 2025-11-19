import React from "react";
import HeroSlider from "../../components/HomePage/HeroSlider";
import TopRatedPlants from "../../components/HomePage/TopRatedPlants";
import PlantCareTips from "../../components/HomePage/PlantCareTips";
import PlantExperts from "../../components/HomePage/PlantExperts";
import PlantOfTheWeek from "../../components/HomePage/PlantOfTheWeek";
import EcoDecor from "../../components/HomePage/EcoDecor";

const Home = () => {
  return (
    <div>
      <title>GreenNest - Your Plants Care</title>
      <HeroSlider />
      <TopRatedPlants />
      <PlantOfTheWeek />
      <PlantCareTips />
      <EcoDecor />
      <PlantExperts />
    </div>
  );
};

export default Home;

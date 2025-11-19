import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import Loading from "../Loading/AllPlantsLoading";

const PlantCard = ({ plant }) => {
  const { plantId, plantName, image, price, rating } = plant;

  return (
    <div className="card bg-base-100 shadow-xl transition-transform duration-300 hover:scale-105">
      <figure className="h-96">
        <img src={image} alt={plantName} className="w-full h-full " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{plantName}</h2>
        <div className="flex justify-between items-center mt-2">
          <p className="font-semibold text-lg text-primary">
            ${price.toFixed(2)}
          </p>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/plants/${plantId}`}
            className="btn bg-[#7fb069] text-white cursor-pointer hover:animate-bounce"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;

import React from "react";
import usePlants from "../../hooks/usePlants";
import { Link, useParams } from "react-router";
import toast from "react-hot-toast";
import GlobalLoading from "../../components/Loading/GlobalLoading";

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, loading } = usePlants();
  if (loading) return <GlobalLoading />;
  const plant = plants.find((p) => p.plantId == id);

  if (!plant) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <p className="font-bold text-5xl text-center mb-5">
          Sorry !!! No Plants Found.
        </p>
        <Link className="btn py-6 bg-[#7fb069] text-white" to="/plants">
          See Availables
        </Link>
      </div>
    );
  }

  const {
    plantName,
    image,
    description,
    price,
    rating,
    availableStock,
    careLevel,
    category,
  } = plant;

  const handleBookNow = (e) => {
    e.preventDefault();
    toast.success("Your Booking is successfully placed !!");
    e.target.reset();
  };
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <title>{`GreenNest - ${plantName}`}</title>
      <div
        className="flex flex-col lg:flex-row  items-center gap-10"
        data-aos="flip-left"
      >
        <div className="lg:w-1/2">
          <img
            src={image}
            alt={plantName}
            className="w-full h-[700px]  rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-2">{plantName}</h1>
          <p className="text-3xl text-primary font-semibold mb-4">
            ${price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="mt-6  rounded-lg">
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Care Level:</strong> {careLevel}
            </p>
            <p>
              <strong>Rating:</strong> {rating} / 5.0
            </p>
            <p>
              <strong>In Stock:</strong> {availableStock} units
            </p>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl mt-8" data-aos="fade-up">
        <div className="card-body max-w-xl mx-auto">
          <h2 className="card-title text-2xl">Book a Consultation</h2>
          <p>
            Have questions? Book a free consultation with our plant experts.
          </p>
          <form onSubmit={handleBookNow}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="name"
                className="input w-full"
                placeholder="Name"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />
              <button className="btn bg-[#7fb069] text-white mt-4 ">
                Book Now
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;

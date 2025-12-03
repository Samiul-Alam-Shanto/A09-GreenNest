import React, { useContext as use } from "react";
import usePlants from "../../hooks/usePlants";
import { Link, useParams } from "react-router";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaStar, FaSeedling, FaTag, FaCheckCircle } from "react-icons/fa";
import GlobalLoading from "../../components/Loading/GlobalLoading";
import PlantCard from "../../components/PlantCard/PlantCard";
import { AuthContext } from "../../providers/AuthContext";

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, loading } = usePlants();
  const { user } = use(AuthContext);

  if (loading) return <GlobalLoading />;

  const plant = plants.find((p) => p.plantId == id);

  if (!plant) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <h2 className="font-bold text-4xl text-text-dark mb-4">
          Plant Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the plant you're looking for. It might have
          been moved or sold out.
        </p>
        <Link
          className="btn btn-lg bg-primary text-white hover:bg-opacity-80 border-none"
          to="/plants"
        >
          Explore Our Collection
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

  const relatedPlants = plants
    .filter((p) => p.category === category && p.plantId != id)
    .slice(0, 3);

  const handleBookNow = (e) => {
    e.preventDefault();
    toast.success(`Consultation for ${plantName} booked successfully!`);
    e.target.reset();
  };

  return (
    <div className="bg-card-bg font-poppins pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            className="w-full top-28"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={image}
              alt={plantName}
              className="w-full max-h-[700px] rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-text-dark mb-4">
              {plantName}
            </h1>

            <div className="flex items-center gap-4 mb-4 text-gray-500">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>{rating} / 5.0</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-2">
                <FaCheckCircle
                  className={
                    availableStock > 0 ? "text-green-500" : "text-red-500"
                  }
                />
                <span>
                  {availableStock > 0
                    ? `${availableStock} in Stock`
                    : "Out of Stock"}
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {description}
            </p>

            <div className="bg-light-bg p-6 rounded-lg border border-gray-200 space-y-4 my-6">
              <div className="flex items-start gap-4">
                <FaTag className="text-primary text-xl shrink-0 mt-1" />
                <div>
                  <strong>Category:</strong>
                  <p className="text-gray-600">{category}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaSeedling className="text-primary text-xl shrink-0 mt-1" />
                <div>
                  <strong>Care Level:</strong>
                  <p className="text-gray-600">{careLevel}</p>
                </div>
              </div>
            </div>

            <p className="text-5xl text-primary font-bold mt-4">${price}</p>
          </motion.div>
        </div>

        {/* --- RELATED PRODUCTS SECTION --- */}
        {relatedPlants.length > 0 && (
          <div className="mt-28 border-t pt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {relatedPlants.map((plant) => (
                <PlantCard key={plant.plantId} plant={plant} />
              ))}
            </div>
          </div>
        )}

        {/* --- BOOK CONSULTATION SECTION  */}
        <motion.div
          className="mt-28 border-t pt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-dark mb-2">
              Ready to Grow?
            </h2>
            <p className="text-gray-600 mb-8">
              Book a free, no-obligation consultation with one of our plant
              experts. We're happy to answer any questions you have.
            </p>
          </div>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
            <form onSubmit={handleBookNow} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName || ""}
                  className="input input-bordered w-full bg-light-bg"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email || ""}
                  className="input input-bordered w-full bg-light-bg"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg bg-[#7fb069] text-white w-full hover:bg-opacity-80 border-none mt-4"
                disabled={availableStock === 0}
              >
                {availableStock > 0
                  ? "Book My Consultation"
                  : "Currently Unavailable"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlantDetails;

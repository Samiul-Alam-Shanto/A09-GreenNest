import React from "react";
import {
  FaWater,
  FaSun,
  FaLeaf,
  FaTemperatureHigh,
  FaWind,
  FaBug,
} from "react-icons/fa";

const PlantCareTips = () => {
  const tips = [
    {
      icon: <FaWater className="text-5xl text-blue-400" />,
      title: "Watering Wisdom",
      description:
        "Most indoor plants prefer soil that's consistently moist but not waterlogged. Check the top inch of soil; if it's dry, it's time to water.",
    },
    {
      icon: <FaSun className="text-5xl text-yellow-400" />,
      title: "Sunlight Secrets",
      description:
        "Rotate your plants every week to ensure all sides get equal light. Most houseplants thrive in bright, indirect sunlight.",
    },
    {
      icon: <FaLeaf className="text-5xl text-green-500" />,
      title: "Fertilizing Facts",
      description:
        "Feed your plants during their growing season (spring and summer). A balanced, all-purpose fertilizer works well for most common indoor plants.",
    },
    {
      icon: <FaTemperatureHigh className="text-5xl text-orange-400" />,
      title: "Temperature Tips",
      description:
        "Keep plants away from cold drafts and direct heat sources. Most indoor plants prefer temperatures between 18°C and 24°C.",
    },
    {
      icon: <FaWind className="text-5xl text-cyan-400" />,
      title: "Humidity Help",
      description:
        "Many tropical plants love humidity. Mist their leaves or use a humidifier to keep the air comfortably moist.",
    },
    {
      icon: <FaBug className="text-5xl text-red-400" />,
      title: "Pest Prevention",
      description:
        "Check leaves regularly for pests. Wipe with a damp cloth or use mild insecticidal soap to keep your plants healthy and pest-free.",
    },
  ];

  return (
    <section className="py-16" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Essential Plant Care Tips</h2>
          <p className="text-gray-600 mt-2">
            Keep your green friends happy and healthy with these simple tips.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg text-center p-8"
            >
              <figure className="flex justify-center mb-4">{tip.icon}</figure>
              <h3 className="text-2xl font-bold mb-2">{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCareTips;

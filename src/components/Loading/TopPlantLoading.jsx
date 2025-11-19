import React from "react";

const TopPlantLoading = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Array(6)
        .fill()
        .map((_, i) => (
          <div key={i} className="card bg-base-100 shadow-xl animate-pulse">
            <figure className="h-96 bg-gray-300 rounded"></figure>
            <div className="card-body">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="flex justify-between items-center mb-4">
                <div className="h-5 bg-gray-300 rounded w-16"></div>
                <div className="h-5 bg-gray-300 rounded w-12"></div>
              </div>
              <div className="h-10 bg-gray-300 rounded w-24 self-end"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TopPlantLoading;

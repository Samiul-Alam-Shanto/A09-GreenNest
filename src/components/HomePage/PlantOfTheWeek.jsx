import React from "react";
import { Link } from "react-router";

const PlantOfTheWeek = () => {
  const isDesktop = window.innerWidth >= 1024;

  return (
    <section className="hero container mx-auto min-h-[400px] my-16">
      <div className="hero-content  flex-col-reverse lg:flex-row-reverse gap-10">
        <img
          data-aos={isDesktop ? "fade-left" : ""}
          src="https://i.ibb.co.com/MDmhtvw7/zz-plant.jpg"
          className="w-72 sm:w-sm rounded-lg shadow-2xl"
          alt="ZZ Plant"
        />
        <div className="text-wrap" data-aos={isDesktop ? "fade-right" : ""}>
          <h3 className="text-2xl font-bold text-primary ">
            PLANT OF THE WEEK
          </h3>
          <h1 className="text-6xl font-bold text-[#527e3e]">Fiddle Leaf Fig</h1>
          <p className="py-6">
            A design icon, the ZZ Plant makes a stunning statement with its
            large, violin-shaped leaves. While it demands specific care, its
            dramatic presence is a rewarding challenge for any plant lover. Are
            you up for it?
          </p>
          <Link
            to="/plants/5"
            className="btn bg-[#7fb069] text-white hover:scale-105 transition ease-in-out"
          >
            Learn More & Buy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;

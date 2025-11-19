import React from "react";
import dec1 from "../../assets//deco-1.jpg";
import dec2 from "../../assets/deco-2.jpg";
import dec3 from "../../assets/deco-3.jpg";

const EcoDecor = () => {
  const ideas = [
    {
      title: "Living Room Oasis",
      image: dec1,
    },
    {
      title: "Drawing Room Jungle",
      image: dec2,
    },
    {
      title: "Sunny Reading Nook",
      image: dec3,
    },
  ];
  const isDesktop = window.innerWidth >= 1024;
  return (
    <section className="py-16 container mx-auto px-4 ">
      <div data-aos={isDesktop ? "fade-left" : ""}>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">Eco Decor Ideas</h2>
          <p className="text-gray-600 mt-2">
            Inspiration for styling your home with the beauty of nature.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ideas.map((idea, index) => (
            <div key={index} className="card shadow-lg image-full">
              <figure>
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-80 object-cover"
                />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title text-2xl text-white">{idea.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoDecor;

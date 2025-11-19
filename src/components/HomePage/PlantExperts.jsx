import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

const PlantExperts = () => {
  const experts = [
    {
      name: "Dr. Evelyn Reed",
      title: "Lead Botanist",
      image:
        "https://i.ibb.co.com/XrJZW0XF/premium-photo-1664536392896-cd1743f9c02c.png",
      quote:
        "Seeing a plant thrive under your care is one of the most rewarding experiences. We're here to make that happen for everyone.",
    },
    {
      name: "Samuel Jones",
      title: "Succulent Master",
      image:
        "https://i.ibb.co.com/vC07C5WM/premium-photo-1678197937465-bdbc4ed95815.png",
      quote:
        "Succulents teach us patience and resilience. Their unique beauty can transform any small space into a mini desert oasis.",
    },
    {
      name: "Clara Dennis",
      title: "Foliage Expert",
      image:
        "https://i.ibb.co.com/rGky6khG/premium-photo-1683121366070-5ceb7e007a97.png",
      quote:
        "The lushness of foliage plants brings the wild indoors. My passion is helping you create your own personal jungle for you.",
    },
    {
      name: "Marco Allen",
      title: "Soil Scientist",
      image:
        "https://i.ibb.co.com/JFzphXT6/premium-photo-1689530775582-83b8abdb5020.png",
      quote:
        "Healthy plants start from the ground up. Understanding the right soil and nutrients is the secret to a thriving green home.",
    },
    {
      name: "Jasmine Lee",
      title: "Air Plant Specialist",
      image: "https://i.ibb.co.com/XfHXhDkH/pexels-photo-2379004.png",
      quote:
        "Air plants are living sculptures. They defy gravity and convention, proving that nature's artistry knows no bounds.",
    },
  ];
  const isDesktop = window.innerWidth >= 1024;
  return (
    <section
      className="py-16 bg-linear-to-b from-[#7fb06905] to-[#1a2419]"
      data-aos={isDesktop ? "fade-right" : ""}
    >
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold">What Our Experts Say</h2>
          <p className="max-w-2xl text-gray-600 mx-auto mt-4">
            Our team of passionate botanists and horticulturists share their
            wisdom to help you cultivate a greener life.
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {experts.map((expert, index) => (
            <SwiperSlide key={index} className="pb-12">
              <div className="relative mt-12">
                <div className="bg-white rounded-lg shadow-lg p-8 pt-16 text-center">
                  <p className="text-gray-600 italic">"{expert.quote}"</p>
                  <h3 className="text-xl font-bold mt-4">{expert.name}</h3>
                  <p className="text-gray-500">{expert.title}</p>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PlantExperts;

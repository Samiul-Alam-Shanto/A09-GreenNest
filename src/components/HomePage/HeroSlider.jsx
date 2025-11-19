import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bg1 from "../../assets/bg-1.jpg";
import bg2 from "../../assets/bg-2.jpg";
import bg3 from "../../assets/bg-3.jpg";
import bg4 from "../../assets/bg-4.jpg";

const HeroSlider = () => {
  return (
    <section className="h-[600px] container mx-auto pt-16.5 px-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full rounded-2xl"
      >
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-full"
            style={{
              backgroundImage: ` url(${bg2})`,
            }}
          >
            <div className="bg-black/60 h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Bring Nature Home</h1>
                <p className="text-xl">One leaf at a time.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-full"
            style={{
              backgroundImage: ` url(${bg4})`,
            }}
          >
            <div className="bg-black/60 h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">
                  Grow Plants, Grow Joy
                </h1>
                <p className="text-xl">Let nature bloom inside.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-full"
            style={{
              backgroundImage: ` url(${bg1})`,
            }}
          >
            <div className="bg-black/60 h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">
                  Breathe Life Into Your Home
                </h1>
                <p className="text-xl">
                  Find the perfect plant for your space.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-full"
            style={{
              backgroundImage: ` url(${bg3})`,
            }}
          >
            <div className="bg-black/60 h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">
                  Your Green Sanctuary Awaits
                </h1>
                <p className="text-xl">
                  Expert care tips and beautiful plants.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;

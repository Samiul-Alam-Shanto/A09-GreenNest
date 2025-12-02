import React from "react";
import { Link } from "react-router";
import { FaLeaf, FaRegStar, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-light-bg font-poppins text-text-dark">
      <section className="relative h-[70vh] container mx-auto  rounded-2xl flex items-center justify-center text-center  text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full  object-cover"
            alt="A beautifully lit, modern living room filled with various healthy indoor plants"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Your Sanctuary, <br /> Our Passion.
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We're here to help you cultivate a life filled with more green, more
            calm, and more beauty.
          </motion.p>
        </div>
      </section>

      {/* 2. Founder's Note Section  */}
      <section className="py-24 bg-card-bg">
        <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
          >
            <img
              src="https://images.unsplash.com/photo-1716703741458-417a8d58f20e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Portrait of the founder, smiling warmly in a greenhouse"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
          >
            <h3 className="text-primary font-semibold">
              A NOTE FROM OUR FOUNDER
            </h3>
            <p className="text-4xl font-bold my-4 leading-snug">
              "A single plant can start a conversation, calm a mind, and turn a
              house into a home."
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              My journey with GreenNest started with one unruly Monstera in a
              tiny apartment. The joy and tranquility it brought me was
              something I knew I had to share. Our mission is built on that
              feeling—to deliver not just plants, but small pieces of happiness,
              curated with expertise and grown with love.
            </p>
            <div className="mt-6">
              <p className="font-bold text-lg">Evelyn Reed</p>
              <p className="text-gray-500">Founder & Lead Botanist</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Our Values Section - Staggered Animation */}
      <section className="py-24 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">What We Stand For</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Our principles guide every decision we make, from the greenhouse
              to your front door.
            </p>
          </div>
          <motion.div
            className="grid md:grid-cols-3 gap-8 "
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={fadeIn}
              className="bg-card-bg p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary/10 inline-block p-4 rounded-full mb-4">
                <FaRegStar className="text-green-800 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Curated Quality</h3>
              <p className="text-gray-600">
                We source only the healthiest, most beautiful plants. Each one
                is inspected and cared for by our experts until it's ready for
                its new home.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-card-bg p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary/10 inline-block p-4 rounded-full mb-4">
                <FaLeaf className="text-green-800 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Sustainable Roots</h3>
              <p className="text-gray-600">
                We are committed to eco-friendly practices, from our
                water-saving greenhouses to our 100% recyclable packaging.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-card-bg p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary/10 inline-block p-4 rounded-full mb-4">
                <FaUsers className="text-green-800 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Community Growth</h3>
              <p className="text-gray-600">
                Your journey doesn't end at checkout. We provide lifetime
                support and resources to help you and your new green friends
                thrive together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

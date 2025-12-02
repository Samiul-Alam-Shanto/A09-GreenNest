import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    toast.success("Thank you for your message! We'll get back to you soon.");
    reset();
  };

  return (
    <div className="bg-light-bg font-poppins pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-text-dark">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question or a project in mind? We'd love to hear from you.
            Reach out and let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Column 1: Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-green-800 p-3 rounded-full">
                <FaMapMarkerAlt className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Greenhouse</h3>
                <p className="text-gray-600">
                  123 Greenleaf Lane, Flora City, 12345
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-green-800 p-3 rounded-full">
                <FaPhoneAlt className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Call Us</h3>
                <p className="text-gray-600">000-1000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-green-800 p-3 rounded-full">
                <FaEnvelope className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Email Us</h3>
                <p className="text-gray-600">contact@greennest.com</p>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-2 bg-card-bg p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Name"
                    className="input input-bordered w-full bg-light-bg"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="example@example.com"
                    className="input input-bordered w-full bg-light-bg"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  {...register("subject")}
                  placeholder="e.g., Question about my order"
                  className="input input-bordered w-full bg-light-bg"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  {...register("message", {
                    required: "Message cannot be empty",
                  })}
                  className="textarea textarea-bordered h-32 w-full bg-light-bg"
                  placeholder="I would like to know..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#7fb069] text-white hover:bg-opacity-80 border-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

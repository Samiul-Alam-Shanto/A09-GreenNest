import React, { use } from "react";
import { AuthContext } from "../../providers/AuthContext";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const { resetPassword } = use(AuthContext);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        window.open("https://mail.google.com");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#7fb06930] p-4">
      <title>GreenNest - Reset Password</title>
      <div className="card w-full max-w-md bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-center mb-6 ">
            Forgot Password
          </h2>

          <p className="text-center text-gray-600 mb-6">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          <form onSubmit={handleResetPassword}>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="input mb-2 input-bordered w-full"
            />
            <button
              type="submit"
              className="btn bg-[#7fb069] text-white w-full"
            >
              Reset Password
            </button>
          </form>

          <div className="text-center mt-6">
            <a href="/login" className="link link-hover text-sm text-gray-500">
              &#8592; Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

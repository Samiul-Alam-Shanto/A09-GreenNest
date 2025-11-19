import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthContext";
import toast from "react-hot-toast";
import { errorMessage } from "../../firebase/error";

const Register = () => {
  const { createUser, updateUserProfile, googleSignIn } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!regEx.test(password)) {
      toast.error(
        "Password must have at least one uppercase, one lowercase letter, and be 6+ characters long."
      );
      return;
    }
    // console.log(name, photoURL, email, password);
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success("Successfully Created Account ");
            e.target.reset();
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            toast.error(errorMessage(errorCode));
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorMessage(errorCode));
      });
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successfully Signed Up with Google");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorMessage(errorCode));
      });
  };
  return (
    <div className="hero min-h-screen pt-16 ">
      <title>GreenNest - Register</title>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Join Our Community!</h1>
          <p className="py-6">
            Create an account to start your journey with GreenNest. Get access
            to exclusive plants, expert advice, and manage your green collection
            with ease.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <h1 className="text-3xl font-bold text-center">Sign Up</h1>
              <fieldset className="fieldset relative">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Your Name"
                  required
                />

                {/* photo */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Your Photo URL"
                  required
                />

                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                {/* password */}
                <label className="label ">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <span
                  className="cursor-pointer bottom-20 right-10 absolute z-10"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <button className="btn bg-[#7fb069] text-white mt-4">
                  Register
                </button>
              </fieldset>
            </form>
            <div className="px-8 pb-8 text-center">
              <div className="divider">OR</div>
              <button
                onClick={handleGoogleSignUp}
                className="btn bg-white text-black w-full border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Sign Up with Google
              </button>
              <p className="mt-4">
                Already have an account? {""}
                <Link to="/login" className="link link-primary font-semibold">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

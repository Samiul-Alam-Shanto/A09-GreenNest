import React, { use } from "react";
import { FaLeaf } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../providers/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch((error) => toast.error(error.message));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/plants">All Plants</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      {user ? (
        <li>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div className="fixed z-10 w-full bg-linear-to-b from-[#1a2419] to-[#151a14] text-white">
      <div className="navbar container  mx-auto  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="navLinks menu menu-sm dropdown-content mt-3 z-1 p-2 shadow  bg-linear-to-b from-[#1a2419] to-[#151a14] rounded-box w-52 text-white"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl animate__animated animate__fadeInLeft"
          >
            <FaLeaf className="text-green-400" />
            GreenNest
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex animate__animated animate__fadeInDown">
          <ul className="navLinks menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-linear-to-b from-[#1a2419] to-[#151a14] mt-1 z-1 p-2 shadow  rounded-b-xl w-52 text-white "
              >
                <li>
                  <Link
                    to="/profile"
                    className="justify-between hover:bg-[#7fb069]"
                  >
                    {user.displayName}
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogOut} className="hover:bg-[#7fb069]">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="animate__animated animate__fadeInRight flex">
              <Link
                to="/login"
                className="btn btn-outline text-white bg-[#7fb069] mr-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-success hidden sm:flex bg-[#7fb069] text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

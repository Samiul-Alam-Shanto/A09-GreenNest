import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  // console.log(user);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <title>GreenNest - Profile</title>
      <h1 className="text-4xl font-bold text-center mb-10">My Profile</h1>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div
          className="card w-full md:w-1/3 bg-base-100 shadow-xl"
          data-aos="flip-up"
        >
          <figure className="px-10 pt-10">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="rounded-full w-32 h-32 object-cover border-4 border-[#7fb069]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">{user?.displayName}</h2>
            <p>{user?.email}</p>
          </div>
        </div>

        <div
          className="card w-full md:w-2/3 bg-base-100 shadow-xl"
          data-aos="fade-left"
        >
          <form onSubmit={handleUpdateProfile} className="card-body">
            <h2 className="card-title text-2xl">Update Profile Information</h2>

            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                className="input"
                defaultValue={user?.displayName}
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input"
                defaultValue={user?.photoURL}
              />

              <label className="label">Email (Cannot be changed)</label>
              <input
                type="email"
                className="input"
                value={user?.email || ""}
                disabled
              />
              <button className="btn bg-[#7fb069] text-white mt-4 w-40">
                Update Profile
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

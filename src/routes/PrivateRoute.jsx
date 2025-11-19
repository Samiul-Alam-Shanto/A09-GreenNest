import React, { use } from "react";
import { AuthContext } from "../providers/AuthContext";
import { Navigate, useLocation } from "react-router";
import GlobalLoading from "../components/Loading/GlobalLoading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  //   console.log(location);

  if (loading) return <GlobalLoading />;

  if (user && user.email) {
    return children;
  } else return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;

import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext/index";
import { useContext } from "react";

const PrivateRoutes = () => {
  const { userLoggedIn } = useContext(AuthContext);

  return userLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

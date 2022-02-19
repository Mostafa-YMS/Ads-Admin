import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = (props) => {
  let { user } = useContext(AuthContext);
  return !user ? <Navigate to="/signin" /> : props.child;
};

export default ProtectedRoute;

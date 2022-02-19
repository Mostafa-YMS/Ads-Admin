import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoggedInRoute = (props) => {
  let { user } = useContext(AuthContext);

  return !user ? props.child : <Navigate to={"/"} />;
};

export default LoggedInRoute;

import { createContext } from "react";
import { useAuth } from "../firebase";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const currentUser = useAuth();

  let contextData = {
    user: currentUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

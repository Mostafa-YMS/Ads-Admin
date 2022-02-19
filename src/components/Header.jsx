import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";
import "../styles/header.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const create = () => {
    navigate("/create");
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

  const { user } = useContext(AuthContext);

  return (
    <div className="header">
      <h1 className="title">Ads Dashboard</h1>
      {user && (
        <>
          <button className="btn btn-create" onClick={create}>
            Create Ad
          </button>
          <button className="btn btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Header;

import { useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const create = () => {
    navigate("/create");
  };

  return (
    <div className="header">
      <h1 className="title">Ads Dashboard</h1>
      <button className="btn btn-create" onClick={create}>
        Create Ad
      </button>
    </div>
  );
};

export default Header;

import "../styles/ad.css";
import { useDispatch } from "react-redux";
import { deleteAd } from "../ads-redux/actions/creators";
import { useNavigate } from "react-router-dom";

export const Ad = ({ ad, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const adUpdate = () => {
    navigate("/update", { state: { ad: ad, index: index } });
  };
  const adDelete = () => {
    dispatch(deleteAd(index));
  };
  return (
    <div className="col-md-4">
      <div className="ads card">
        <div className="img-div">
          {ad.image ? (
            <img src={ad.image} className="img" alt="ad" />
          ) : (
            <video width="100%" height="100%" controls>
              {/* <source src={ad.video} type="video/mp4"/> */}
            </video>
          )}
        </div>
        <hr className="hr" />
        <div className="info">
          <p>
            Start at: <span>{ad.from_time}</span>
          </p>
          <p>
            End at: <span>{ad.to_time}</span>
          </p>
        </div>
        <div className="btns-div">
          <button className="btn btn-primary m-3" onClick={adUpdate}>
            Update
          </button>
          <button className="btn btn-danger m-3" onClick={adDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

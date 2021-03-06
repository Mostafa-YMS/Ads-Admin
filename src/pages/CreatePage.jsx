import CreationForm from "../components/CreationForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAd } from "../ads-redux/actions/creators";
import { useNavigate } from "react-router-dom";
import closeIcon from "../assets/imgs/icon-close.svg";
import "../styles/forms.css";


const CreatePage = () => {
  const [media, setMedia] = useState("");
  const [mediaType, setMediaType] = useState("image");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const timeReformate = (time) => {
    let newTime = new Date(time).toLocaleString();
    newTime = newTime.split(",");
    return newTime[0] + newTime[1];
  };

  const dispatcher = (finalMedia) => {
    dispatch(
      createAd({
        image: finalMedia.image,
        video: finalMedia.video,
        from_time: timeReformate(startTime),
        to_time: timeReformate(endTime),
      })
    );
  };

  const create = (e) => {
    e.preventDefault();
    if (mediaType === "image") {
      dispatcher({ image: media, video: "" });
    } else {
      dispatcher({ image: "", video: media });
    }
    navigate("/");
  };
  const close = () => {
    navigate("/");
  };
  return (
    <div className="card m-5">
      <button onClick={close} className="close m-3 mb-0">
        <img src={closeIcon} alt="X" className="close-icon" />
      </button>
      <h2 className="m-3 fw-bold">Create</h2>
      <CreationForm
        media={media}
        setMedia={setMedia}
        mediaType={mediaType}
        setMediaType={setMediaType}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        handleSubmit={create}
        btn={"Create"}
      />
    </div>
  );
};

export default CreatePage;

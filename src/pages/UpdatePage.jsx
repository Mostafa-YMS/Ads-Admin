import { useState } from "react";
import { useLocation } from "react-router-dom";
import CreationForm from "../components/CreationForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAd } from "../ads-redux/actions/creators";

const UpdatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  let updateMedia = "",
    updateMediaType = "";
  if (state.ad.image) {
    updateMedia = state.ad.image;
    updateMediaType = "image";
  } else {
    updateMedia = state.ad.video;
    updateMediaType = "video";
  }
  const timeFormate = (time) => {
    let newDateTime = time.split(" ");
    if (newDateTime[2] === "PM") {
      let time = newDateTime[1].split(":");
      let hour = (Number(time[0]) + 14).toString();
      return new Date(newDateTime[0] + " " + hour + ":" + time[1] + ":00")
        .toISOString()
        .slice(0, 16);
    }
  };
  const [media, setMedia] = useState(updateMedia);
  const [mediaType, setMediaType] = useState(updateMediaType);
  const [startTime, setStartTime] = useState(timeFormate(state.ad.from_time));
  const [endTime, setEndTime] = useState(timeFormate(state.ad.to_time));

  const timeReformate = (time) => {
    let newTime = new Date(time).toLocaleString();
    newTime = newTime.split(",");
    return newTime[0] + newTime[1];
  };

  const dispatcher = (finalMedia) => {
    dispatch(
      updateAd({
        ad: {
          image: finalMedia.image,
          video: finalMedia.video,
          from_time: timeReformate(startTime),
          to_time: timeReformate(endTime),
        },
        index: state.index,
      })
    );
    navigate("/");
  };

  const update = (e) => {
    e.preventDefault();
    if (mediaType === "image") {
      dispatcher({ image: media, video: "" });
    } else {
      dispatcher({ image: "", video: media });
    }
    navigate("/");
  };
  return (
    <div className="card m-5">
      <h2 className="m-3 fw-bold">Update</h2>
      <CreationForm
        media={media}
        setMedia={setMedia}
        mediaType={mediaType}
        setMediaType={setMediaType}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        handleSubmit={update}
        btn={"Update"}
      />
    </div>
  );
};

export default UpdatePage;

import { useState } from "react";
import { Input } from "./Input";
import { useDispatch } from "react-redux";
import { createAd } from "../ads-redux/actions/creators";
import { useNavigate } from "react-router-dom";

const CreationForm = () => {
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
  return (
    <div>
      <form onSubmit={create}>
        <div className="form-group m-3">
          <label>Media type</label>
          <select
            required
            className="form-select"
            onChange={(e) => setMediaType(e.target.value)}
          >
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </div>

        <Input
          label="Media"
          type="text"
          setValue={setMedia}
          value={media}
          placeholder="Media link"
        />
        <Input
          label="Start time"
          type="datetime-local"
          setValue={setStartTime}
          value={startTime}
        />
        <Input
          label="End time"
          type="datetime-local"
          setValue={setEndTime}
          value={endTime}
        />
        <button type="submit" className="btn btn-primary m-3">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreationForm;

import { Input } from "./Input";


const CreationForm = ({
  media,
  setMedia,
  mediaType,
  setMediaType,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  btn,
  handleSubmit,
}) => {
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group m-3">
          <label>Media type</label>
          <select
            required
            className="form-select"
            defaultValue={mediaType}
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
          {btn}
        </button>
      </form>
    </div>
  );
};

export default CreationForm;

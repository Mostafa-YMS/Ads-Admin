export const Input = (props) => {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  };
  return (
    <div className="form-group m-3">
      <label>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        className="form-control"
        onChange={handleChange}
        required
      />
    </div>
  );
};

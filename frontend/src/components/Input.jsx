import "../styles/input.css";

const Input = (props) => {
  return props.type === "input" ? (
    <div>
      <label>{props.label}</label>
      <input type={props.inputType} label={props.label} />
    </div>
  ) : (
    <div>
      <label>{props.label}</label>
      <textarea type={props.inputType} label={props.label} />
    </div>
  );
};

export default Input;

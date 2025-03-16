import "../styles/input.css";

const Input = (props) => {
  return props.type === "input" ? (
    <div className="input">
      <label>{props.label}</label>
      <input defaultValue="" type={props.inputType} label={props.label} name={props.name}/>
    </div>
  ) : (
    <div className="textarea">
      <label>{props.label}</label>
      <textarea name={props.name} label={props.label} />
    </div>
  );
};

export default Input;

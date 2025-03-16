import "../styles/selector.css";

const Select = ({ options }) => {
  return (
    <div id="custom-select">
      <select className="selector">
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;

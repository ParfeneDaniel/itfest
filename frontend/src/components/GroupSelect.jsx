import "../styles/group-selector.css";

const GroupSelect = ({ options }) => {
  return (
    <div className="group-select">
      <select className="select header-select">
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default GroupSelect;

import "../styles/button.css";

const Button = ({ type, action, children }) => {
  return (
    <button className={type} onClick={action}>
      {children}
    </button>
  );
};

export default Button;

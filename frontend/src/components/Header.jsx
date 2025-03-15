import "../styles/header.css";
import LearniX from "./LearniX";

const Header = ({type}) => {
    const grupa = 4;
  return (
      <div id="header">
        {type === "student" && <p className="header-info">Grupa {grupa}</p>}
        <p className="header-logo"><LearniX size="big"/></p>
        <i className="fa-solid fa-circle-user header-user"></i>
      </div>
  );
};

export default Header;

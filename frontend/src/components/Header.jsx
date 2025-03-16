import { Link } from "react-router-dom";
import "../styles/header.css";
import LearniX from "./LearniX";
import Group from "./Group";

const Header = ({ type }) => {
  return (
    <div id="header">
      {type === "student" && <Group />}
      <p className="header-logo">
        <LearniX size="big" />
      </p>
      {type === "student" && (
        <Link to="/profile" className="link"><i className="fa-solid fa-circle-user header-user"></i></Link>
      )}
    </div>
  );
};

export default Header;

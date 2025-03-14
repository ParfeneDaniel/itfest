import "../styles/header.css";

const Header = () => {
    const grupa = 4;
  return (
      <div id="header">
        <p className="header-info">Grupa {grupa}</p>
        <p className="header-logo">LearniX</p>
        <i className="fa-solid fa-circle-user header-user"></i>
      </div>
  );
};

export default Header;

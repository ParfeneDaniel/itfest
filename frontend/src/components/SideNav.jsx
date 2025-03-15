import "../styles/sidenav.css";

const SideNav = ({ subjects, selected, setSelected }) => {
  return (
    <div id="side-nav">
      <ul>
        {subjects.map((subject, index) => {
          return (
            <li
              className={selected == subject ? "selected" : ""}
              onClick={() => setSelected(subject)}
              key={index}
            >
              {subject}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;

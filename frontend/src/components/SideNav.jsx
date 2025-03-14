import "../styles/sidenav.css";

const SideNav = () => {
  const subjects = ["ASDII", "PII", "CDI", "LFTA", "EWD", "MPI"];

  return (
    <div id="side-nav">
      <ul>
        {subjects.map((subject, index) => {
          return <li key={index}>{subject}</li>;
        })}
      </ul>
    </div>
  );
};

export default SideNav;

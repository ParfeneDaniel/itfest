import { useState } from "react";
import "../styles/group-card.css";
import StudentCard from "./StudentCard";

const GroupCard = ({ number, students }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w100">
      <div
        className="groupCard pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="group">Grupa {number}</p>
        <p className={"icon " + (isOpen ? "selected" : "")}></p>
      </div>
      {isOpen
        ? students.map((name, index) => {
            return <StudentCard key={index}>{name}</StudentCard>;
          })
        : null}
    </div>
  );
};

export default GroupCard;

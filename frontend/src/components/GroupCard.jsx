import { useState } from "react";
import "../styles/group-card.css";

const GroupCard = ({ number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="groupCard pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <p className="group">Grupa {number}</p>
      <p className={"icon " + (isOpen ? "selected" : "")}></p>
    </div>
  );
};

export default GroupCard;

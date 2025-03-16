import "../styles/student-card.css";
import Button from "./Button";

const StudentCard = ({ children }) => {
  return (
    <div className="studentCard">
      <p className="student-email">{children}</p>
      <Button type="filledButton medium">Șterge</Button>
    </div>
  );
};

export default StudentCard;

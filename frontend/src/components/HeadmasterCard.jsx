import "../styles/headmaster-card.css";
import Button from "./Button";

const HeadmasterCard = ({ name, action }) => {
  return (
    <div className="headmasterCard">
      <div className="content">
        <p>{name}</p>
      </div>
      <Button type="filledButton medium" action={action}>
        Vizualizare
      </Button>
    </div>
  );
};

export default HeadmasterCard;

import "../styles/headmaster-card.css";
import Button from './Button';

const HeadmasterCard = ({ name }) => {
  return (
    <div className="headmasterCard">
      <div className="content">
        <p>{name}</p>
      </div>
      <Button type="filledButton medium" action="">
        Vizualizare
      </Button>
    </div>
  );
};

export default HeadmasterCard;

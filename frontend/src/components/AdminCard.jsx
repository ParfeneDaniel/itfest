import "../styles/request-card.css";
import Button from "./Button";

const AdminCard = (props) => {
  return (
    <div className="request-card">
      <span>
        <h2>{props.name} - </h2>
        <h3>{props.university}</h3>
      </span>
      <a target="_blank" href={"mailto:" + props.email}>
        <p className="field-email">{props.email}</p>
      </a>
      {props.details && (
        <>
          <span>
            <span className="field-name">Detalii: </span>
            <span>{props.details}</span>
          </span>
          <span className="left">
            <Button type="filledButton medium" action="">
              Verifică
            </Button>
            <Button type="filledButton medium" action="">
              Refuză
            </Button>
            <Button type="filledButton medium" action="">
              Acceptă
            </Button>
          </span>
        </>
      )}
    </div>
  );
};

export default AdminCard;

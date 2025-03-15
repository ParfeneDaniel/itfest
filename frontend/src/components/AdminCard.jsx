import "../styles/request-card.css";
import Button from "./Button";

const AdminCard = (props) => {
  const fields = [
    {
      field: "Nume: ",
      value: props.name,
    },
    {
      field: "Email: ",
      value: props.email,
    },
    {
      field: "Nume facultate: ",
      value: props.university,
    },
    {
      field: "Detalii: ",
      value: props.details,
    },
  ];
  return (
    <div className="request-card">
      <span>
        <h1>{props.name} - </h1>
        <h2>{props.university}</h2>
      </span>
      <a target="_blank" href={"mailto:" + props.email}>
        <p className="field-email">{props.email}</p>
      </a>
      <span>
        <span className="field-name">Detalii: </span>
        <span>{props.details}</span>
      </span>
      <span className="left">
        <Button text="Verifică" type="filledButton" action="" />
        <Button text="Refuză" type="filledButton" action="" />
        <Button text="Acceptă" type="filledButton" action="" />
      </span>
    </div>
  );
};

export default AdminCard;

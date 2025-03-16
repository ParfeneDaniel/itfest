import axios from "../../api/axios";
import "../styles/request-card.css";
import Button from "./Button";

const AdminCard = (props) => {
  console.log(props);

  const validateRequest = () => {
    axios
      .post(`admin/validate/${props.id}`)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  const deleteRequest = () => {
    axios
      .delete(`admin/request/${props.id}`)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  const acceptRequest = () => {
    axios
      .post(`admin/request/${props.id}`)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };
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
            <Button type="filledButton medium" action={validateRequest}>Verifică</Button>
            <Button type="filledButton medium" action={deleteRequest}>Refuză</Button>
            <Button type="filledButton medium"action={acceptRequest}>Acceptă</Button>
          </span>
        </>
      )}
    </div>
  );
};

export default AdminCard;

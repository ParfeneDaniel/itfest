import "../styles/card.css";

const RequestCard = (props) => {
  return (
    <div className="card">
      <div className="card-request">
        <div className="card-request--name">
          <p>Nume: {props.name}</p>
        </div>
        <div className="card-request--name">
          <p>Email: {props.email}</p>
        </div>
        <div className="card-request--name">
          <p>Nume facultate: {props.university}</p>
        </div>
        <div className="card-request--name">
          <p>detalii: {props.details}</p>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;

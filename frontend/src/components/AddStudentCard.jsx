import { useState } from "react";
import "../styles/add-card.css";
import "../styles/group-selector.css";

const AddStudentCard = () => {
  const groups = [1, 2, 3, 4, 5, 6, 7];
  const [emails, setEmails] = useState("");
  let emailsArr = [];

  const formatEmails = () => {
    emailsArr = emails.split(/[\n\s,]+/);
  };
  return (
    <>
      <div className="add-card">
        <h1>Adaugă studenți în grupă</h1>
        <div className="group-select">
          <select className="select">
            {groups.map((group) => {
              return <option value={`grupa-${group}`}>Grupa {group}</option>;
            })}
          </select>
        </div>
        <div className="add-content">
          <label for="add-email">Adaugati email-urile participantilor.</label>
          <p>
            Introduceți email-uri separate prin spațiu sau virgulă. Puteți
            introduce mai multe de-o dată.
          </p>
          <textarea
            name="add-email"
            id="add-email"
            value={emails}
            onChange={() => {
              setEmails(event.target.value);
              formatEmails();
            }}
          />
          {emailsArr.map((a, i) => {
            return <p key={i}>{a}</p>;
          })}
        </div>
        <button className="filledButton medium">Creare</button>
      </div>
    </>
  );
};

export default AddStudentCard;

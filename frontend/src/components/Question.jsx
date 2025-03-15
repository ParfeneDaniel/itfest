import "../styles/question.css";
import "https://kit.fontawesome.com/3b74847688.js";
import Button from "./Button";

const Question = (props) => {
  return (
    <div className="question">
      <div className="question-header">
        <div className="question-header-user">
          <i class="fas fa-circle-user" />
          <p>{props.autor}</p>
        </div>
        <p>{props.time}</p>
      </div>
      <div className="question-content">
        <p>
          {props.post}
        </p>
        <div className="btn-container">
            <Button type="filledButton big" text="Răspunde" action="" />
        </div>
      </div>
    </div>
  );
};

export default Question;

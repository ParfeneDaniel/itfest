import "../styles/question.css";
import "https://kit.fontawesome.com/3b74847688.js";
import Button from "./Button";

const Question = (props) => {
  return (
    <div className="question">
      <div className="question-header">
        <div className="question-header-user">
          <i className="fas fa-circle-user"/>
          <p>{props.autor}</p>
        </div>
        <span>{props.time}</span>
      </div>
      <div className="question-content">
        <p>
          {props.post}
        </p>
        <div className="btn-container">
            <Button type="filledButton medium" action="" >Răspunde</Button>
        </div>
      </div>
    </div>
  );
};

export default Question;

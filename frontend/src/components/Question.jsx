import "../styles/question.css";
import "https://kit.fontawesome.com/3b74847688.js";
import Button from "./Button";

const Question = (props) => {
  const post = {
    post: "Mă puteți ajuta vă rog la capitolul 4? Nu reușesc să înțeleg listele simplu înlănțuite.",
    autor: "Ana Popescu",
    time: "14:53",
    helper: "Flavius Radin",
    comment:
      "Da sigur! Daca te uiti la fisiere pe classroom este un document cu teoria de la liste cu tot cu exemple.",
      show: true
  };

  return (
    <div className="question">
      <div className="question-header">
        <div className="question-header-user">
          <i className="fas fa-circle-user" />
          <p>{post.autor}</p>
        </div>
        <span>{post.time}</span>
      </div>
      <div className="question-content">
        <p>{post.post}</p>
        {!post.show && <div className="btn-container">
          <Button type="filledButton medium">Răspunde</Button>
        </div>}
      </div>
      {post.show && (
        <div className="answer-comment">
          <div className="answer-data">
            <p>{post.helper}</p>
            <div class="answer-upvote">
              <p>M-a ajutat!</p>
              <i className="fa-solid fa-arrow-up selected"></i>
            </div>
          </div>
          <p>{post.comment}</p>
        </div>
      )}
    </div>
  );
};

export default Question;

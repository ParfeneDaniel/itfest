import "../styles/message-card.css";
import penPaper from '../assets/pen-paper.png';

const MessageCard = ({ title, img, children }) => {
  return (
    <div className="message-card">
      <p className="title">{title}</p>
      <p>{children}</p>
      <img src={img == "penPaper" ? penPaper : null} />
    </div>
  );
};

export default MessageCard;

const MessageCard = ({ children }) => {
  return (
    <div className="message-card">
      <p>{children}</p>
    </div>
  );
};

export default MessageCard;
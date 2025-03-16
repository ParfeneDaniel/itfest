import "../styles/add-post.css";
import Button from "./Button";

const AddPostCard = () => {
  return (
    <div className="addPost-container">
      <label>Întreabă aici: </label>
      <span>
        <textarea placeholder="Întrebarea ta..." />
      </span>
      <Button type="filledButton medium">Întreabă</Button>
    </div>
  );
};

export default AddPostCard;

import Header from "../components/Header";
import Question from "../components/Question";
import SideNav from "../components/SideNav";
import "../styles/answer-comment.css";

const Post = (props) => {
  return (
    <div>
      <Header type="student" />
      <div className="flex-row">
        <SideNav subjects={["CDI", "LFTA"]} />
        <div id="dashboard">
          <div className="flex-row center w100">
            <Question
              autor={props.autor}
              time={props.time}
              post={props.post}
              comment={props.comment}
              helper={props.helper}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

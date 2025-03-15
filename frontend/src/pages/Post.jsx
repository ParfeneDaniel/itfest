import Header from "../components/Header";
import Question from "../components/Question";
import SideNav from "../components/SideNav";

const Post = () => {
  return (
    <div>
      <Header />
      <div className="flex-row">
        <SideNav />
        <div id="dashboard">
          <Question />
        </div>
      </div>
    </div>
  );
};

export default Post;

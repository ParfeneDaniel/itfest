import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import LearniX from "../components/LearniX";
import "../styles/landing.css";

const Landing = () => {
  return (
    <>
      <Header />
      <div id="dashboard">
        <div id="landing">
          <LearniX /> este o platformă care aduce studenții și dorința de
          cunoaștere în același loc.
          <br />
          LearniX se adresează universităților
        </div>
        <div>
          <Link to="/request">
            <Button text="Trimite cerere" action="" type="filledButton" />
          </Link>
          <Link to="/login">
            <Button text="Conectează-te" action="" type="filledButton" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;

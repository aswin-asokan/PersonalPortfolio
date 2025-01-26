import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import RoleCycler from "./RoleCycler";

function Home() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  let b;
  if (!isSmallScreen) {
    b = (
      <Button variant="button-color">
        <a href="/assets/resume.pdf" className="custom-link">
          Show Resume
        </a>
      </Button>
    );
  }
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md">
          <h1 className="display-5" style={{ fontWeight: "bold" }}>
            Hey I'm,
            <span style={{ color: "#73b8db" }}> Aswin</span>
          </h1>
          <RoleCycler />
          <p>
            I am a self-taught application developer passionate about creative
            problem-solving. I also love to draw while enjoying music. As a
            student, I am dedicated to pursuing my dreams and expanding my
            skills.
          </p>
          {b}
        </div>
        <div className="col-md">
          <img
            src="/assets/images/home.png"
            className="img-fluid"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;

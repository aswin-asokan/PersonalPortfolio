import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  let b;
  if (!isSmallScreen) {
    b = (
      <Button variant="light-blue">
        <a href="#about" className="custom-link">
          About Me
        </a>
      </Button>
    );
  }
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md">
          <h1 className="display-5">
            Hey I'm,<span style={{ color: "#8baac4" }}> Aswin</span>
          </h1>
          <p>Application Developer | Artist | Student</p>
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
            src="/assets/images/downloadfile-13 (1).png"
            className="img-fluid"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;

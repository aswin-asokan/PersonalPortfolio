import { useMediaQuery } from "react-responsive";
import Skills from "./Skills";

function SkillSection() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });
  let screenElement;
  if (!isSmallScreen) {
    screenElement = (
      <div className="col-md">
        <img
          src="/assets/images/skills.png"
          className="img-fluid"
          width="90%"
        />
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row align-items-top">
          {screenElement}
          <div className="col-md">
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}
export default SkillSection;

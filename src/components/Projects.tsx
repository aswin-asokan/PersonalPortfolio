import { Button, Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { FaGithubAlt } from "react-icons/fa";
interface Props {
  heading: string;
  paragraph: string;
  pic: string;
  pos: string;
  gitLink: string;
  language: string;
}
function Projects({ heading, paragraph, pic, pos, gitLink, language }: Props) {
  let screenElementL, screenElementR, screenElement;
  const isLargeScreen = useMediaQuery({ query: "(min-width: 990px)" });
  if (pos == "left" && isLargeScreen) {
    screenElementL = (
      <div className="col-md">
        <Card>
          <img src={pic} className="img-fluid" width="100%" alt={heading} />
        </Card>
      </div>
    );
  } else if (pos == "right" && isLargeScreen) {
    screenElementR = (
      <div className="col-md">
        <Card>
          <img src={pic} className="img-fluid" width="100%" />
        </Card>
      </div>
    );
  } else {
    screenElement = (
      <div className="col-md" style={{ marginBottom: "15px" }}>
        <Card>
          <img src={pic} className="img-fluid" width="100%" />
        </Card>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          {screenElementL}
          <div className="col-lg">
            <div>
              <h1 className="h3">{heading}</h1>
              <p>{language}</p>
            </div>
            {screenElement}
            <p>{paragraph}</p>
            <Button variant="github">
              <a
                href={gitLink}
                target="_blank"
                className="custom-link"
                style={{ color: "white" }}
              >
                View on Github
              </a>
              <FaGithubAlt style={{ marginLeft: "15px" }} />
            </Button>
          </div>
          {screenElementR}
        </div>
      </div>
    </>
  );
}
export default Projects;

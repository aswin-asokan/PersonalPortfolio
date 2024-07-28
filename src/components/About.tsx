import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function About() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  let screenElement;
  if (!isSmallScreen) {
    screenElement = (
      <div className="col-md">
        <img
          src="/assets/images/downloadfile-12.png"
          className="img-fluid"
          width="95%"
        />
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          {screenElement}

          <div className="col-md">
            <h1 className="display-6">About Me</h1>
            <dl className="row">
              <dt className="col-sm-3">Name:</dt>
              <dd className="col-sm-9">Aswin Asokan</dd>
              <dt className="col-sm-3">Address:</dt>
              <dd className="col-sm-9"> Nellattu (H) S.Vazhakulam</dd>
              <dt className="col-sm-3">Pincode:</dt>
              <dd className="col-sm-9">683105</dd>
              <dt className="col-sm-3">Phone:</dt>
              <dd className="col-sm-9">6238303567</dd>
              <dt className="col-sm-3">Mail ID:</dt>
              <dd className="col-sm-9">aswin_asokan@outlook.com</dd>
            </dl>
            <Button variant={isSmallScreen ? "light-blue" : "light-yellow"}>
              <a
                href="/assets/resume.pdf"
                className="custom-link"
                target="_blank"
                title="Read PDF"
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;

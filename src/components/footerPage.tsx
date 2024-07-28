import {
  FaPinterest,
  FaGithub,
  FaSquareXTwitter,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa6";
import "./FooterPage.css"; // Import custom CSS for additional styling
import { useMediaQuery } from "react-responsive";

function FooterPage() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });
  let a1, a2;
  if (isSmallScreen) {
    a1 = <p>&copy; Aswin Asokan, 2024</p>;
  } else {
    a2 = <p>&copy; Aswin Asokan, 2024</p>;
  }
  return (
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-4 col-lg-4 text-left">
          {a2}
          <div className="d-none d-md-block d-lg-block">
            {isMediumScreen && (
              <div className="col-12 text-center">
                <p className="built-with-text">
                  Built With{" "}
                  <FaHeart
                    size={24}
                    style={{
                      color: "red",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  />
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          className={`col-md-8 col-lg-4 text-center ${
            isMediumScreen
              ? "d-flex flex-column align-items-end"
              : "text-md-end"
          }`}
        >
          <div
            className={`d-none ${
              isMediumScreen
                ? "d-md-flex flex-column align-items-end"
                : "d-md-flex justify-content-center"
            } d-lg-flex justify-content-end`}
          >
            <a
              href="https://github.com/aswin-asokan"
              target="_blank"
              className="d-block mx-2 icon-spacing"
            >
              <FaGithub size={24} style={{ color: "black" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/aswin-asokan/"
              target="_blank"
              className="d-block mx-2 icon-spacing"
            >
              <FaLinkedin size={24} style={{ color: "#0a66c2" }} />
            </a>
            <a
              href="https://pin.it/416Oj6Tmc"
              target="_blank"
              className="d-block mx-2 icon-spacing"
            >
              <FaPinterest size={24} style={{ color: "red" }} />
            </a>
            <a
              href="https://x.com/AlphaKnight29"
              target="_blank"
              className="d-block mx-2 icon-spacing"
            >
              <FaSquareXTwitter size={24} style={{ color: "black" }} />
            </a>
          </div>
          <div className="d-block d-md-none d-lg-none">
            <div className="d-flex align-items-center mb-2">
              <FaGithub className="me-2" size={24} style={{ color: "black" }} />
              <a
                href="https://github.com/aswin-asokan"
                target="_blank"
                className="custom-link"
              >
                GitHub
              </a>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaLinkedin
                className="me-2"
                size={24}
                style={{ color: "#0a66c2" }}
              />
              <a
                href="https://www.linkedin.com/in/aswin-asokan/"
                target="_blank"
                className="custom-link"
              >
                LinkedIn
              </a>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaPinterest
                className="me-2"
                size={24}
                style={{ color: "red" }}
              />
              <a
                href="https://pin.it/416Oj6Tmc"
                target="_blank"
                className="custom-link"
              >
                Pinterest
              </a>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaSquareXTwitter
                className="me-2"
                size={24}
                style={{ color: "black" }}
              />
              <a
                href="https://x.com/AlphaKnight29"
                target="_blank"
                className="custom-link"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 text-left d-none d-lg-block">
          <div className="d-flex justify-content-end align-items-center flex-row-reverse flex-lg-row">
            <p className="built-with-text">
              Built With{" "}
              <FaHeart size={24} style={{ color: "red", marginLeft: "8px" }} />
            </p>
          </div>
        </div>
        {isSmallScreen && (
          <div className="col-12 text-center">
            <p className="built-with-text">
              Built With{" "}
              <FaHeart size={24} style={{ color: "red", marginLeft: "8px" }} />
            </p>
          </div>
        )}
      </div>
      {a1}
    </div>
  );
}

export default FooterPage;

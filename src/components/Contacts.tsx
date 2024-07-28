import { FaLocationCrosshairs, FaEnvelope, FaPhone } from "react-icons/fa6";
import ContactIcon from "./ContactIcon";
function Contacts() {
  return (
    <>
      <div className="container">
        &nbsp;
        <div className="row align-items-center">
          <div className="col-lg ">
            <ContactIcon
              icon={FaLocationCrosshairs}
              title="Location"
              content="Aluva, Ernakulam, Kerala"
            />
          </div>
          <div className="col-lg-4">
            <ContactIcon
              icon={FaPhone}
              title="Contact Number"
              content="6238303567"
            />
          </div>
          <div className="col-lg-4">
            <ContactIcon
              icon={FaEnvelope}
              title="Email Address"
              content="aswin_asokan@outlook.com"
            />
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
}
export default Contacts;

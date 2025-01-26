import { TypeAnimation } from "react-type-animation";

function RoleCycler() {
  return (
    <>
      <div>
        <TypeAnimation
          sequence={[
            "I'm a Student",
            1500,
            "I'm an Artist",
            1500,
            "I'm a Developer",
            1500,
          ]}
          speed={30}
          repeat={Infinity}
          style={{ fontSize: "1.5em" }}
        />
      </div>
    </>
  );
}

export default RoleCycler;

import {
  SiC,
  SiCplusplus,
  SiDart,
  SiFlutter,
  SiMysql,
  SiFirebase,
  SiHive,
  SiGit,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss3,
  SiVisualstudiocode,
  SiGithub,
  SiArduino,
} from "react-icons/si";
import "./Skills.css"; // Import the CSS file for styling
import Headings from "./Headings";

const Skills = () => {
  const skills = [
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React", icon: <SiReact /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Hive", icon: <SiHive /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Arduino", icon: <SiArduino /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
  ];

  return (
    <div className="skills-container">
      <Headings head="Skills & Tools" />
      &nbsp;
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

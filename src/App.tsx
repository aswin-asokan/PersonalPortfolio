import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Contacts from "./components/Contacts";
import FooterPage from "./components/footerPage";
import Headings from "./components/Headings";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Experience from "./components/Timeline";
import SkillSection from "./components/SkillSection";
import ProjectList from "./components/ProjectList";
const timelineData = [
  {
    title: "Flutter Developer Intern",
    company: "Flysoft Systems",
    date: "Oct 2024 - Dec 2024",
    description:
      "Contributed to the development of a Flutter application that enabled restaurants to create customized multi-floor plans. The app allowed users to arrange tables and optimize layouts with intuitive controls and interactive design features, enhancing space management and guest experience.",
    logo: "/assets/images/flysoftsystems_logo.jpeg", // Example logo URL
    proof:
      "/assets/certification/Flysoft Internship Report Aswin v2 signed.pdf",
  },
  {
    title: "Technology Lead",
    company: "IEDC Kalamassery",
    date: "Aug 2021 - Mar 2023",
    description:
      "Actively organized and coordinated Yanthrika 2K22 Idea Fest, managing the evaluation of 25+ innovative ideas. Additionally, I organized workshops on 3D printing in collaboration with Rajagiri Engineering College, Ernakulam, with 50+ participants, and on IoT, engaging over 30 students.",
    logo: "/assets/images/iedc_logo.jpeg", // Example logo URL
  },
  {
    title: "Flutter Developer Intern",
    company: "Laxmiinfotek",
    date: "Sep 2022",
    description:
      "Completed an internship organised by Laxmiinfotek and developed a to-do application",
    logo: "/assets/images/laxmiinfotech_logo.png",
    proof: "/assets/certification/1692935322976.jpeg",
  },
];
function App() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 991px)" });
  let a;
  if (isSmallScreen) {
    a = (
      <>
        <Headings head="Links" />
        &nbsp;
      </>
    );
  }

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLAnchorElement;
      if (target && target.tagName === "A" && target.hash) {
        event.preventDefault();
        const targetId = target.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    const anchors =
      document.querySelectorAll<HTMLAnchorElement>("a[href^='#']");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <>
      <div id="home"></div>
      <NavBar />
      &nbsp;
      <Home />
      &nbsp;
      <div id="skills"></div>
      <Headings head="Skills & Tools" />
      <SkillSection />
      &nbsp;
      <div id="experience"></div>
      <Headings head="Experience" />
      &nbsp;
      <Experience data={timelineData} />
      &nbsp;
      <div id="projects"></div>
      <Headings head="Projects" />
      &nbsp;
      <ProjectList />
      &nbsp;
      <Headings head="Contacts" />
      <div id="contact"></div>
      <Contacts />
      {a}
      <FooterPage />
      &nbsp;&nbsp;
    </>
  );
}

export default App;

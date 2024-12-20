import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import About from "./components/About";
import Contacts from "./components/Contacts";
import FooterPage from "./components/footerPage";
import Headings from "./components/Headings";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

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
            window.pageYOffset -
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
      &nbsp;<div id="about"></div>
      <About />
      &nbsp;<div id="projects"></div>
      <Headings head="Projects" />
      &nbsp;
      <Projects
        heading="Gradgate"
        paragraph="GradGate is a Student Recruitment Application built using Flutter for the frontend and MySQL (managed with XAMPP) for the backend. The app provides a minimal and intuitive interface that allows students to apply for jobs and internships, companies to post opportunities and manage applicants, and colleges to track the employment or internship status of their students. With streamlined data management and easy customization options, users can navigate and perform tasks efficiently."
        pic="/assets/images/gradgate mockup.png"
        pos="right"
        gitLink="https://github.com/aswin-asokan/GradGate/tree/main"
        language="Flutter | MySQL | PHP"
      />
      &nbsp;
      <Projects
        heading="System Monitor"
        paragraph="Keep an eye on your server’s performance effortlessly with the System Monitor App—a minimalistic and lightweight monitoring tool built with Flutter. This app lets you check the real-time status of your system hosted on any server, all through a simple JSON feed, so you can stay informed no matter where you are."
        pic="/assets/images/system-monitor.png"
        pos="left"
        gitLink="https://github.com/aswin-asokan/System-Monitor"
        language="Flutter"
      />
      &nbsp;
      <Projects
        heading="Pocket Dresses"
        paragraph="Welcome to Pocket Dresses, a charming shopping app created during the Flutter Fly workshop. With a minimalistic and modern design, Pocket Dresses offers a curated selection of cute dresses for every occasion. Enjoy a seamless shopping experience as you explore our stylish collection."
        pic="/assets/images/Cover.png"
        pos="right"
        gitLink="https://github.com/aswin-asokan/FlutterFly/"
        language="Flutter | Hive"
      />
      &nbsp;
      <Projects
        heading="TasksEVO"
        paragraph="TasksEVO is a mobile application built with flutter that combines a to do list and notes taking functionality that can help you manage your tasks and related notes in one place. It's fast and beautiful yet minimal design with local storage feature."
        pic="/assets/images/todo.png"
        pos="left"
        gitLink="https://github.com/aswin-asokan/taskevo"
        language="Flutter | Hive | Flutter Quill"
      />
      &nbsp;
      <Projects
        heading="EazyGo"
        paragraph="EazyGo is a mobile application built with flutter. It provides users with an easy way to report and manage pipeline issues, road patches, and other infrastructure needs. The app provides users with a streamlined way to report needs to the appropriate authorities and track the progress of the work being done."
        pic="/assets/images/eazygo mockup (1).png"
        pos="right"
        gitLink="https://github.com/aswin-asokan/EazyGo-MAp"
        language="Flutter | Firebase | GCP"
      />
      &nbsp;
      <Projects
        heading="EazyGo Authority"
        paragraph="EazyGo-Authority is a web application built with flutter. Specifically designed for authorities to efficiently manage reports submitted by users through the EazyGo mobile application."
        pic="/assets/images/eazygoAuth Mockup (1).png"
        pos="left"
        gitLink="https://github.com/aswin-asokan/eazyGo_Auth"
        language="Flutter | Firebase | OSM"
      />
      &nbsp;
      <Projects
        heading="Hotel Management"
        paragraph="A streamlined Java application for efficient hotel management. This user-friendly tool centralizes room and rental details, simplifying booking and reservation processes. With just a click, calculate checkout amounts effortlessly. Additionally, generate insightful reports for specified dates, enhancing your decision-making capabilities."
        pic="/assets/images/hotelmanagement.png"
        pos="right"
        gitLink="https://github.com/aswin-asokan/Hotelmanagement-App"
        language="Java | MySQL"
      />
      &nbsp;
      <Projects
        heading="Dairy Management"
        paragraph="A simple yet beautiful java application made for the purpose of managing a dairy. This can be used for tracking sales and purchases, managing staff details and also it has an interactive dashboard to view all details at one place."
        pic="/assets/images/dairymanagement (2).png"
        pos="left"
        gitLink="https://github.com/aswin-asokan/DairyManagement-App"
        language="Java | MySQL"
      />
      &nbsp;
      <Projects
        heading="Kerala IOT Challenge"
        paragraph="Kerala IoT Challenge is a program embracing the vision of 5000 IoT-enabled students from Kerala, hosting on the µLearn platform. This page contains over 20 IoT projects with explanations and working videos."
        pic="/assets/images/iot challege Mockup.png"
        pos="right"
        gitLink="https://github.com/aswin-asokan/Kerala-IoT-Challenge"
        language="Arduino IDE | Arduino IoT Cloud | Firebase"
      />
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

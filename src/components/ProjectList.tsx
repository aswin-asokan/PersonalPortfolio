import { useState } from "react";
import { Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion
import Projects from "./Projects";

function ProjectList() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      heading: "Ancient Text Preservation with IndicBERT",
      paragraph:
        "Contributed to an ancient text preservation project focused on restoring and preserving Sanskrit manuscripts. Leveraged a fine-tuned IndicBERT model to predict and reconstruct missing words in ancient texts. This project allows users to upload images of manuscripts, extract text, and utilize BERT-based masked language modeling to restore incomplete content, ensuring historical accuracy and readability.",
      pic: "/assets/images/ancient.png",
      pos: "right",
      gitLink: "https://github.com/najiya101/ancient-language-preservation-",
      language: "BERT | GCP | Flask",
    },
    {
      heading: "Flysoft Floor Plan",
      paragraph:
        "The Floorplan App is a cross-platform application developed to help restaurant owners create, modify, and manage their restaurant layouts effortlessly. By providing an interactive interface, the app simplifies the complex process of floorplan design, making it accessible to users without prior technical knowledge.",
      pic: "/assets/images/Floorplan.png",
      pos: "left",
      gitLink: "https://github.com/aswin-asokan/Flysoft_Floorplan/",
      language: "Flutter | JSON",
    },
    {
      heading: "Gradgate",
      paragraph:
        "GradGate is a Student Recruitment Application built using Flutter for the frontend and MySQL (managed with XAMPP) for the backend. The app provides a minimal and intuitive interface that allows students to apply for jobs and internships, companies to post opportunities and manage applicants, and colleges to track the employment or internship status of their students. With streamlined data management and easy customization options, users can navigate and perform tasks efficiently.",
      pic: "/assets/images/gradgate mockup.png",
      pos: "right",
      gitLink: "https://github.com/aswin-asokan/GradGate",
      language: "Flutter | MySQL | PHP",
    },
    {
      heading: "System Monitor",
      paragraph:
        "Keep an eye on your server’s performance effortlessly with the System Monitor App—a minimalistic and lightweight monitoring tool built with Flutter. This app lets you check the real-time status of your system hosted on any server, all through a simple JSON feed, so you can stay informed no matter where you are.",
      pic: "/assets/images/system-monitor.png",
      pos: "left",
      gitLink: "https://github.com/aswin-asokan/System-Monitor",
      language: "Flutter",
    },
    {
      heading: "Pocket Dresses",
      paragraph:
        "Welcome to Pocket Dresses, a charming shopping app created during the Flutter Fly workshop. With a minimalistic and modern design, Pocket Dresses offers a curated selection of cute dresses for every occasion. Enjoy a seamless shopping experience as you explore our stylish collection.",
      pic: "/assets/images/Cover.png",
      pos: "right",
      gitLink: "https://github.com/aswin-asokan/FlutterFly/",
      language: "Flutter | Hive",
    },
    {
      heading: "TasksEVO",
      paragraph:
        "TasksEVO is a mobile application built with flutter that combines a to do list and notes taking functionality that can help you manage your tasks and related notes in one place. It's fast and beautiful yet minimal design with local storage feature.",
      pic: "/assets/images/todo.png",
      pos: "left",
      gitLink: "https://github.com/aswin-asokan/taskevo",
      language: "Flutter | Hive | Flutter Quill",
    },
    {
      heading: "EazyGo",
      paragraph:
        "EazyGo is a mobile application built with flutter. It provides users with an easy way to report and manage pipeline issues, road patches, and other infrastructure needs. The app provides users with a streamlined way to report needs to the appropriate authorities and track the progress of the work being done.",
      pic: "/assets/images/eazygo mockup (1).png",
      pos: "right",
      gitLink: "https://github.com/aswin-asokan/EazyGo-MAp",
      language: "Flutter | Firebase | GCP",
    },
    {
      heading: "EazyGo Authority",
      paragraph:
        "EazyGo-Authority is a web application built with flutter. Specifically designed for authorities to efficiently manage reports submitted by users through the EazyGo mobile application.",
      pic: "/assets/images/eazygoAuth Mockup (1).png",
      pos: "left",
      gitLink: "https://github.com/aswin-asokan/eazyGo_Auth",
      language: "Flutter | Firebase | OSM",
    },
    {
      heading: "Hotel Management",
      paragraph:
        "A streamlined Java application for efficient hotel management. This user-friendly tool centralizes room and rental details, simplifying booking and reservation processes. With just a click, calculate checkout amounts effortlessly. Additionally, generate insightful reports for specified dates, enhancing your decision-making capabilities.",
      pic: "/assets/images/hotelmanagement.png",
      pos: "right",
      gitLink: "https://github.com/aswin-asokan/Hotelmanagement-App",
      language: "Java | MySQL",
    },
    {
      heading: "Dairy Management",
      paragraph:
        "A simple yet beautiful java application made for the purpose of managing a dairy. This can be used for tracking sales and purchases, managing staff details and also it has an interactive dashboard to view all details at one place.",
      pic: "/assets/images/dairymanagement (2).png",
      pos: "left",
      gitLink: "https://github.com/aswin-asokan/DairyManagement-App",
      language: "Java | MySQL",
    },
    {
      heading: "Kerala IOT Challenge",
      paragraph:
        "Kerala IoT Challenge is a program embracing the vision of 5000 IoT-enabled students from Kerala, hosting on the µLearn platform. This page contains over 20 IoT projects with explanations and working videos.",
      pic: "/assets/images/iot challege Mockup.png",
      pos: "right",
      gitLink: "https://github.com/aswin-asokan/Kerala-IoT-Challenge",
      language: "Arduino IDE | Arduino IoT Cloud | Firebase",
    },
  ];

  return (
    <>
      <div className="projects-container">
        {projects.slice(0, 4).map((project, index) => (
          <div key={index}>
            <Projects
              heading={project.heading}
              paragraph={project.paragraph}
              pic={project.pic}
              pos={project.pos}
              gitLink={project.gitLink}
              language={project.language}
            />
            <div style={{ marginBottom: "35px" }} /> {/* Space after project */}
          </div>
        ))}

        {/* Animated Expansion for Hidden Projects */}
        <AnimatePresence>
          {showAll &&
            projects.slice(4).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Projects
                  heading={project.heading}
                  paragraph={project.paragraph}
                  pic={project.pic}
                  pos={project.pos}
                  gitLink={project.gitLink}
                  language={project.language}
                />
                <div style={{ marginBottom: "35px" }} />{" "}
                {/* Space after project */}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less Button */}
      <div className="text-center mt-4">
        <Button
          variant="show-more"
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2"
        >
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </div>
    </>
  );
}

export default ProjectList;

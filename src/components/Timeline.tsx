import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Timeline.css";

interface TimelineEvent {
  title: string;
  company: string;
  date: string;
  description: string;
  logo?: string; // Optional logo URL
  proof?: string; // URL or path to the proof file
  role?: string; // New role field
}

interface TimelineProps {
  data: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true });

  return (
    <div className="timeline">
      {/* Timeline Line */}
      <motion.div
        className="timeline-line"
        ref={lineRef}
        initial={{ height: 0 }}
        animate={isLineInView ? { height: "100%" } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }} // Faster animation
      />

      {/* Timeline Events */}
      {data.map((event, index) => {
        const eventRef = useRef(null);
        const isEventInView = useInView(eventRef, { once: true });

        return (
          <motion.div
            key={index}
            className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
            ref={eventRef}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} // Reduce initial movement
            animate={isEventInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 * index, ease: "easeOut" }} // Faster transition & staggered effect
          >
            <div className="event-content">
              <div className="event-header">
                {event.logo && (
                  <img
                    src={event.logo}
                    alt={`${event.company} logo`}
                    className="company-logo"
                  />
                )}
                <div>
                  <h3>{event.title}</h3>
                  <p className="company">{event.company}</p>
                </div>
              </div>
              <p className="date">{event.date}</p>
              <p className="description">{event.description}</p>

              {/* Conditional rendering based on the role */}
              {event.role === "work" && event.proof && (
                <a href={event.proof} download className="download-button">
                  Show Certification
                </a>
              )}
              {event.role === "instructor" && event.proof && (
                <a href={event.proof} className="download-button">
                  Show Documentation
                </a>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline;

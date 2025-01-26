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
        transition={{ duration: 1, ease: "easeOut" }}
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
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isEventInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
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
              {event.proof && (
                <a href={event.proof} download className="download-button">
                  Show Certification
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

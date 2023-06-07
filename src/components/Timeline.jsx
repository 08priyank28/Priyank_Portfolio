import React from "react";
import data from "../assets/study.json";

const Timeline = () => {
  return (
    <>
      <h1 className="title">Education & Experience</h1>
      <div id="timeline">
        <div className="timelineBox">
          {data.items.map((item, index) => (
            <TimelineItem
              heading={item.title}
              year={item.year}
              index={index}
              key={item.title}
              text={item.achievement}
              place={item.place}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const TimelineItem = ({ heading, text, index, year, place }) => (
  <div
    className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"
      }`}
  >
    <div>
      <h2>{heading} ({year})</h2>
      <p>{text}</p>
      <p>{place}</p>
    </div>
  </div>
);

export default Timeline;

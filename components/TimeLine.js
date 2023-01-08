import React from "react";
//REACT FONT AWESOME IMPORT
import {nanoid} from "nanoid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
//REACT VERTICAL TIME LINE
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"

let timelineElements = [
    {
      id: 1,
      title: "Holon Institute of Technology",
      location: "Holon, Israel",
      description:
        "Bachelor's degree in computer science (BSc).",
      buttonText: "",
      ref: "",
      date: "August 2019 - 2022",
      icon: "school",
    },
    {
      id: 2,
      title: "Israeli Air Force: Head of satellite communication stations",
      location: "Israel",
      description:
      "A source of knowledge in the field of satellite communication. Responsible for managing and coordinating the 15 Satcom technicians.",
      buttonText: "",
      ref:"",
      date: "2018 - 2022",
      icon: "work",
    },
    {
        id: 3,
        title: "Israeli Air Force: Satcom Technician",
        location: "Israel",
        description:
        "Operated satellite communication systems in the IAF Communications NOC. Experience with TCP/IP networking protocol.",
        buttonText: "",
        ref:"",
        date: "2015 - 2018",
        icon: "work",
      },
    {
      id: 4,
      title: "Ort Singalowski College",
      location: "Tel Aviv, Israel",
      description:
        "Certified Electronics and Computer Practical Engineer with a Certificate of Excellence (GPA 92).",
      buttonText: "",
      ref:"",
      date: "2013 - 2015",
      icon: "school",
    },
  ];

const TimeLine = () => {
    let workIconStyles = { background: "#f9c74f" }
    let schoolIconStyles = { background: "#06D6A0" }

    let workIcon = <FontAwesomeIcon icon={faLaptop} className="timeline-icon" />
    let schoolIcon = <FontAwesomeIcon icon={faGraduationCap} className="timeline-icon"  />
    return (
        <div className="time">
            
            <VerticalTimeline>
                {
                    timelineElements.map((element) => {
                        let isWorkIcon = element.icon === "work"
                        let showButton =
                            element.buttonText !== undefined &&
                            element.buttonText !== null &&
                            element.buttonText !== ""
                        return (
                            <VerticalTimelineElement 
                                key={nanoid()}
                                date={element.date}
                                dateClassName="timeline-date"
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={isWorkIcon ? workIcon : schoolIcon}
                            >

                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <p id="timeline-description">{element.description}</p>
                                {showButton && (
                                    <a
                                        className={`timeline-button ${isWorkIcon ? "workButton" : "schoolButton"}`}
                                        href={element.ref}
                                        target="_blank"
                                        rel="noreferrer nofollow">
                                        {element.buttonText}
                                    </a>
                                )}

                            </VerticalTimelineElement>

                        );
                    })
                }
            </VerticalTimeline>
        </div>
    );
};

export default TimeLine;
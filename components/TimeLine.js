import React from "react";
//REACT FONT AWESOME IMPORT
import {nanoid} from "nanoid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
//REACT VERTICAL TIME LINE
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import {timelineElements} from "./Data"



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
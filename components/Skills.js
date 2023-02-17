import React from "react"
import Component from "./Component"
import {skillsElements,paragraphContent} from "./Data"
 

const SkillsGrid = () => {
    return (
        <div className="grid-container">
            {
                skillsElements.map((element) => {
                    return (
                        <div className="grid-item" key={element.name}>
                            <div className="skill-title">
                                <div className="skill-img">
                                    <div className="skill-icon">{element.icon}</div>
                                </div>
                                <h3>{element.name}</h3>
                            </div>
                            <p>{element.text}</p>
                        </div>
                    );
                })
            }
        </div>

    );
};

const Skills = () => {
    return (
        <Component
            id={"section-skills"}
            title={"My Skills"}
            paragraph={paragraphContent.skills}
            componentBody={<SkillsGrid />}
        />
    )
};

export default Skills;
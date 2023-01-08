import React from "react"
import Component from "./Component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava, faCss3Alt,  faCpp, faPython, faNode} from "@fortawesome/free-brands-svg-icons";
import { SiKotlin } from "react-icons/si";
import { TbLetterC } from "react-icons/tb";


let size = "3x";
let skillsElements = [
    {
        id: 1,
        name: "React",
        icon: <FontAwesomeIcon icon={faReact} color={"#03fcd7"} size={size}/>,
        text: "I use React to build front end for web applications such as this website.",

    },
    {
        id: 2,
        name: "NodeJS",
        icon: <FontAwesomeIcon icon={faNode} color={"#1f8f10"} size={size}/>,
        text: `I use NodeJS to build back end for web site like my movie site project`,

    },
    {
        id: 3,
        name: "Kotlin",
        icon: <SiKotlin  color={"#f76902"} size={size}/>,
        text: "I use Kotlin to create a Android Applications such as Resturant Finder Application FrontEnd",

    },
    {
        id: 4,
        name: "Python",
        icon: <FontAwesomeIcon icon={faPython} color={"#ffee03"} size={size}/>,
        text: `I use Python in data science and machine learning projects in projects like Hebrew Male Female Classifier and more,also i used it Chat App with Steganography Backend part as web-server with flask framework`,


    },
    {
        id: 5,
        name: "Java",
        icon: <FontAwesomeIcon icon={faJava} color={"#f5aa42"} size={size}/>,
        text: "I use Java for server side of some of my web applications like in Resturant Finder Application . I also use it to create Frontend side of android Applications like Parking Finder and Chat App with Steganography (check it out on my GitHub).",

    },
    {
        id: 6,
        name: "C++",
        icon: <TbLetterC  color={"#0094b5"} size={size}/>,
        text: "I use C++ to create a Windows Destop Applications like Paint with MFC Library",
    },
];

let paragraphContent =
{
    aboutMe: ``,
    skills: `I have experiance with: React, JavaScript, Kotlin ,NodeJS, C#, Python, C++, OOP.
    Here are some examples of how I use my skills:`,
    projects: ``,
    contact:``,
};

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
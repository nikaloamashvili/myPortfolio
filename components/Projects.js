import React from 'react';
import Component from "./Component";
import ProjectModal from "./ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Resturant_Finder_cover from "./project-imgs/RestauratFinder/res.jpg"
import Resturant_Finder6 from "./project-imgs/RestauratFinder/img1.png"
import Resturant_Finder1 from "./project-imgs/RestauratFinder/pos.png"
import Resturant_Finder2 from "./project-imgs/RestauratFinder/img2.png"
import Resturant_Finder3 from "./project-imgs/RestauratFinder/img3.png"
import Resturant_Finder4 from "./project-imgs/RestauratFinder/img4.png"
import Resturant_Finder5 from "./project-imgs/RestauratFinder/img5.png"
import ChatApp_cover from "./project-imgs/ChatApp/chat.jpg"
import ChatApp1 from "./project-imgs/ChatApp/pos.jpeg"
import ChatApp2 from "./project-imgs/ChatApp/sc1.jpg"
import ChatApp3 from "./project-imgs/ChatApp/sc2.jpg"
import ChatApp4 from "./project-imgs/ChatApp/sc3.jpg"
import ChatApp5 from "./project-imgs/ChatApp/sc4.jpg"
import SearchIn_cover from "./project-imgs/SearchIn/legoimg1.png"
import SearchIn_img1 from "./project-imgs/SearchIn/img2s.png"
import SearchIn_img2 from "./project-imgs/SearchIn/img3s.png"
import SearchIn_img3 from "./project-imgs/SearchIn/img4s.png"
import SearchIn_img4 from "./project-imgs/SearchIn/img6s.png"
import Image from "next/image";
import { nanoid } from 'nanoid'


let paragraphContent =
{
    projects: `Here are some of the projects I have done, you can check out more projects on my GitHub.`,
};

let projectsElements = [
    {
        name: "ShearchIn",
        coverImg: SearchIn_cover,
        pictures: [SearchIn_img1, SearchIn_img2, SearchIn_img3,SearchIn_img4],
        tech: ["Node.js", "JavaScript","React","Next.js","MongoDB","netlify serverless functions"],
        summary:"SearchIn is A home page that displays all the user's search engines in one place.",
        paragraph: "SearchIn is React web app that allows users make one home page with all their search engines, the project was deploy on netlify.",
        links: ["https://searchin.netlify.app/"], // it's not a open source project
    },
    {
        name: "Resturant Finder",
        coverImg: Resturant_Finder_cover,
        pictures: [Resturant_Finder1, Resturant_Finder2, Resturant_Finder3, Resturant_Finder4, Resturant_Finder5,Resturant_Finder6],
        tech: ["Kotlin", "Java", "MySql", "FireBase", "Jetpack"],
        summary:"Resturant Finder application shows the restaurants closest to the user according to the price of a meal.",
        paragraph: `the Frontend was write on Android studio in Kotlin languege , i worked with FireBase for User Authentication and used Travel Advisor API for data acquisition about the restaurants in JSON format ,in addition i used LazyColum from Jetpack unit and Material Design Components.
        the TCP server was write on Eclipse in Java languege , the server conected to MySql database. to run the server you need to create on the MySQl two tabeles:`,
        links: ["https://github.com/nikaloamashvili/Restaurant-Finder"],
    },
    {
        name: "Chat App with Steganography",
        coverImg: ChatApp_cover,
        pictures: [ChatApp1, ChatApp2,ChatApp3,ChatApp4,ChatApp5],
        tech: ["Java", "Python", "Flask","Azure","Firebase"],
        summary:"Android messaging app wite Steganography feature",
        paragraph: "Android messaging app that allow's users to send and decode hidden messages in the various format files. Built using JAVA, Python, Flask and AWS.",
        links: ["https://github.com/nikaloamashvili/Chat-App-with-Steganography"],
    },

];



const ConditionalLinkButton = (props) => {
    return (
        props.link ?
            <a href={props.link} target="_blank" rel="noreferrer nofollow" className="btn-external-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ color: "#2e2e2e", width: "0.6rem" }} />
            </a> : ""
    );
}


const ProjectCard = (props) => {
   
    return (
        <div className="card-wraper">
            <div className="card" >
                <div className="overflow">
                    <Image
                        className="card-img-top"
                        src={props.coverImg}
                        alt="X"
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {props.name}
                        <ConditionalLinkButton link={props.link} />
                    </h5>
                    <p className="card-text">
                        {props.summary}
                    </p>
                    <div className="card-tech-grid">
                        {
                            props.tech.map((tech) => {
                                return (<p key={tech} className="tech-item">{tech}</p>);
                            })
                        }
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={props.handleButtonClick}>
                        More Info
                    </button>

                </div>
            </div>
        </div>
    );
}



class ProjectsGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            requiredItem: 0
        };

        this.replaceModalItem = this.replaceModalItem.bind(this);
    }

    replaceModalItem(index) {
        this.setState({
            requiredItem: index
        });
    }



    render() {

        return (
            <>
                <div className="grid-container">
                    {
                        projectsElements.map((element, index) => {
                            return (
                                <ProjectCard key={index}
                                    coverImg={element.coverImg}
                                    name={element.name}
                                    summary={element.summary}
                                    tech={element.tech}
                                    link={element.links[0]}
                                    handleButtonClick= {()=>{
                                        this.props.fun();
                                        this.replaceModalItem(index)}}
                                />
                            );
                        })
                    }

                </div>

                <ProjectModal
                key={nanoid()}
                    title={projectsElements[this.state.requiredItem].name}
                    paragraph={projectsElements[this.state.requiredItem].paragraph}
                    pictures={projectsElements[this.state.requiredItem].pictures}
                    links={projectsElements[this.state.requiredItem].links}
                    images= {projectsElements[this.state.requiredItem].pictures}
                    vis={this.props.vis}
                    fun={this.props.fun2}


                />
            </>
        );
    }
}




const Projects = () => {
    const [likes, setLikes] = React.useState(false);

    function turnOn(){
        setLikes(true);
    }

    function turnOff(){
        setLikes(false);
    }

    return (
        <Component
            id={"section-projects"}
            title={"My Projects"}
            paragraph={paragraphContent.projects}
            componentBody={<ProjectsGrid vis={likes} fun={turnOn} fun2={turnOff}/>}
        />
    )
};

export default Projects;
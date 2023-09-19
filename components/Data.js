import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava, faCss3Alt,  faCpp, faPython, faNode} from "@fortawesome/free-brands-svg-icons";
import { SiKotlin } from "react-icons/si";
import { TbLetterC } from "react-icons/tb";
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
    aboutMe: `Recent Computer Science graduate at HIT with over a year of hands-on experience building and testing applications for Android and Web that included Backend and Frontend development.`,
    skills: `I have experiance with: React, JavaScript, Kotlin ,NodeJS, C#, Python, C++, OOP.
    Here are some examples of how I use my skills:`,
    projects: `Here are some of the projects I have done, you can check out more projects on my GitHub.`,
};

let timelineElements = [
  {
    id: 1,
    title: "NGsoft",
    location: "Petah Tikva, Israel",
    description:
      "Mobile app developer",
    buttonText: "",
    ref: "",
    date: "2023 - present",
    icon: "work",
  },
    {
      id: 2,
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
      id: 3,
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
        id: 4,
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
      id: 5,
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




export {skillsElements, paragraphContent,projectsElements,timelineElements}
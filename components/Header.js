import React from "react"
// import Typed from "react-typed";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import Particle from "./Particle";
// import TypeWriterEffect from 'react-typewriter-effect';
import Typewriter from 'typewriter-effect';


// const skills = ["React", "JavaScript","Kotlin","Java", "NodeJS", "HTML", "CSS", "C#", "C++", "Python", "Git"];




export default function Header(){

   function gg(){
    console.log("dfds")
   }

    return (
        <div className="header">
      <div       className="particles-canvas2"
>   
      <Particle
      className="particles-canvas"
      /></div> 
          
                <div className="header-image-div">
          <Image src="/../public/nika.png" layout="fill" objectFit="cover" className="header-image"/>
        </div>


        <h2 className="header-h2">
          Nika Lomashvili
        </h2>
        <div className="hh3">
        <h3 className="header-h3">
                    Software Developer    </h3>
                    <h3 >
                    <Typewriter 
  options={{
    strings: ["React", "JavaScript","Kotlin","Java", "NodeJS", "HTML", "CSS", "C#", "C++", "Python", "Git"],
    autoStart: true,
    loop: true,
  }}
/></h3>
<h3 className="header-h3">
...    </h3>
                    
               </div>
        <p className="header-p">
        Got Work For Me?
        </p>
        {/* <div className="dheader-contact">
        <a href="#contact" className="header-contact">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "white",width:"30px"  } } /> Contact Me
        </a>
        </div> */}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg">
        <defs>
            <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
            </filter>
        </defs>
    </svg>

    {/* <button id="gooey-button" onClick={gg}> */}
    <div className="cba">
    <a  id="gooey-button" href="#contact" className="cb">
                   Contact Me
        <span className="bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
        </span>
    {/* </button> */}
    </a></div>

        <SocialMedia/>
        

      </div>
    )
}


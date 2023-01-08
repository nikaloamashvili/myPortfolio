import React from "react"
import {
    AiFillLinkedin,
    AiFillYoutube,
    AiFillGithub,
  } from "react-icons/ai";


export default function SocialMedia(){
    return (
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          
      <a href="https://github.com/nikaloamashvili" target="_blank" rel="noreferrer nofollow" className="btn-social-media">
    <AiFillGithub color="white"  size="20px"/>
      </a>
      <a href="https://www.linkedin.com/in/nika-lomashvili-software-developer/" target="_blank" rel="noreferrer nofollow" className="btn-social-media">
      <AiFillLinkedin color="white" size="20px" />     
             </a>
             
             <a href="https://www.youtube.com/@nikalomashvili9968" target="_blank" rel="noreferrer nofollow" className="btn-social-media">
             <AiFillYoutube color="white" size="20px"  />
             </a>
  
  </div>
    );
}
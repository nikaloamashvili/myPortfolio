

import { useState } from "react";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  console.log(isNavExpanded);
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Nika Lomashvili
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
                                   <li className="nav-li">
                         <a className="nav-link" href="#section-header">Home </a>
                         </li>
                         <li className="nav-li">
                             <a className="nav-link" href="#section-about-me">About Me</a>
                         </li>
                         <li className="nav-li">
                             <a className="nav-link" href="#section-skills">Skills</a>
                         </li>
                         <li className="nav-li">
                             <a className="nav-link" href="#section-projects">Projects</a>
                         </li>
                         <li className="nav-li">
                             <a className="nav-link" href="#contact">Contact Me</a>
                         </li>

        </ul>
      </div>
    </nav>
  );
}


    




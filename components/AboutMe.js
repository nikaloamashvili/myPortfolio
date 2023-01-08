import React from "react"
import Component from "./Component"
import TimeLine from "./TimeLine";

export default function AboutMe() {
    let paragraphContent =
    {
        aboutMe: `Recent Computer Science graduate at HIT with over a year of hands-on experience building and testing applications for Android and Web that included Backend and Frontend development. `
    };

    return (
        <Component
        id={"section-about-me"}
        title={"About Me"}
        paragraph={paragraphContent.aboutMe}
        componentBody={<TimeLine />}
        />
    )
};


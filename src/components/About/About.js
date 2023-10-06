import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/IMG_7390.jpeg" alt="Patrick's Portrait" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! I'm J. Patrick Cerutti, a versatile Software Engineer with
              a background as a former Physical Therapist. My journey from
              healthcare to the world of technology has equipped me with a
              unique perspective and a diverse skill set that I'm excited to
              bring to the table.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              With a passion for leveraging technology to solve real-world
              problems, I've transitioned into the role of a Full Stack Web
              Developer. My experience as a Physical Therapist exposed me to the
              challenges of time-consuming diagnosis code searches, which led me
              to develop a fuzzy search web app to streamline the process—a
              project that ignited my enthusiasm for technology.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Proficient in JavaScript and React, I thrive in agile-minded team
              environments where effective communication is paramount. I'm also
              comfortable working with Python and Django stacks, showcasing my
              versatility and adaptability to different tech stacks. I'm a
              dedicated lifelong learner, always seeking opportunities to expand
              my skills as an Engineer.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I'm a diligent and adaptable individual, constantly pushing the
              boundaries of my knowledge and skills in the software engineering
              field. I'm enthusiastic about the opportunity to contribute my
              unique background and technical expertise to your team.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

import React from "react";
import TitleNavbar from "../TitleNavbar";
import Icon1 from "../../Images/svg-1.svg";
import Icon2 from "../../Images/svg-2.svg";
import Icon3 from "../../Images/svg-3.svg";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsP,
  ProjectsH2,
  P,
} from "./ProjectElements";
const Project = () => {
  return (
    <>
      <TitleNavbar title={"My Projects"} />
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <ProjectsCard>
            <ProjectsIcon src={Icon1} />
            <ProjectsH2>My Projects H2</ProjectsH2>
            <ProjectsP>Project p</ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon2} />
            <ProjectsH2>My Projects H2</ProjectsH2>
            <ProjectsP>Project p</ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>My Projects H2</ProjectsH2>
            <ProjectsP>Project p</ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>My Projects H2</ProjectsH2>
            <ProjectsP>Project p</ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>My Projects H2</ProjectsH2>
            <ProjectsP>Project p</ProjectsP>
          </ProjectsCard>{" "}
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Project;

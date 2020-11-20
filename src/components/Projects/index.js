import React from "react";
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
} from "./ProjectsElements";
const Projects = () => {
  return (
    <>
      {/* <ProjectsH1>My Projects</ProjectsH1> */}
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
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
